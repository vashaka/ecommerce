import { NextResponse } from "next/server";
import prisma from "../../../../../prisma";

export const GET = async (req: Request, res: NextResponse) => {
  try {
    await prisma.$connect();
    const id = req.url.split("/clothes/")[1];

    const foundItem = await prisma.clothe.findFirst({ where: { id } });
    return NextResponse.json({ message: "oK", foundItem });
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
