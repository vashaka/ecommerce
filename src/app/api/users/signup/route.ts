import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import prisma from "../../../../../prisma";
import jwt from "jsonwebtoken";

export const POST = async (req: Request, res: NextResponse) => {
  try {
    await prisma.$connect();
    const reqBody = await req.json();
    const { username, email, password } = reqBody;

    const foundEmail = await prisma.user.findFirst({ where: { email: email } });

    if (foundEmail) {
      return NextResponse.json({
        message: "User Allready exists please login",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await prisma.user.create({
      data: { username, email, password: hashedPassword },
    });

    const response = NextResponse.json(
      {
        message: "User created successfully",
        createdUser,
      },
      { status: 200 }
    );

    // Create token JWT
    const tokenData = {
      id: createdUser.id,
      username: createdUser.username,
      email: createdUser.email,
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
  } finally {
    // prisma.$disconnect();
  }
};
