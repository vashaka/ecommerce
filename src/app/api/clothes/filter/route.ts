import { NextResponse } from "next/server";
import prisma from "../../../../../prisma";

export const POST = async (req: Request, res: NextResponse) => {
  try {
    await prisma.$connect();
    const reqBody = await req.json();
    const category = reqBody.category;
    if (category === "all products") {
      const allClothes = await prisma.clothe.findMany();

      return NextResponse.json({
        message: "clothes filtered successfully",
        filteredClothes: allClothes,
      });
    }
    const filteredClothes = await prisma.clothe.findMany({
      where: {
        category: {
          contains: category,
        },
      },
    });

    return NextResponse.json({
      message: "clothes filtered successfully",
      filteredClothes,
    });
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
