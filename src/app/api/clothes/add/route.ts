import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../../../prisma";
import { Clothe } from "../../../../interface";

export const POST = async (req: Request, res: NextResponse) => {
  try {
    await prisma.$connect();
    const reqBody = await req.json();
    const { title, desc, price, category, isInSale, oldPrice, image }: Clothe =
      reqBody;

    const newClothe = await prisma.clothe.create({
      data: {
        title,
        desc,
        price,
        category,
        isInSale,
        oldPrice,
        image,
      },
    });
    return NextResponse.json(
      {
        message: "new clothe added successfully",
        newClothe,
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
