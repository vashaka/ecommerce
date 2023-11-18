import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "../../../../../prisma";
import jwt from "jsonwebtoken";

export const POST = async (req: Request, res: NextResponse) => {
  try {
    await prisma.$connect();
    const reqBody = await req.json();
    const { email, password } = reqBody;
    const foundUser = await prisma.user.findFirst({ where: { email } });
    if (!foundUser) {
      return NextResponse.json({ message: "User not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      foundUser.password
    );

    if (!isPasswordCorrect) {
      return NextResponse.json({ message: "Password Incorrect, try Again" });
    }

    const response = NextResponse.json(
      {
        message: "Successfully Loged In",
        foundUser,
        error: "user not found",
      },
      { status: 200 }
    );

    const tokenData = {
      id: foundUser.id,
      username: foundUser.username,
      email: foundUser.email,
    };
    // generate token

    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });

    response.cookies.set("token", token);

    return response;
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Server Error",
        error: error.message,
      },
      { status: 500 }
    );
  }
};
