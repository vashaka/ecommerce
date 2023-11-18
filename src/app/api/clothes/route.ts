import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../../prisma";

export const GET = async (req: Request, res: NextResponse) => {
  try {
    await prisma.$connect();
    const allClothes = await prisma.clothe.findMany();
    return NextResponse.json(
      {
        message: "Success",
        allClothes,
      },
      { status: 200 }
    );
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
