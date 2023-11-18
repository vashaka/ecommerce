import { NextResponse } from "next/server";
import prisma from "../../../../../prisma";

export async function GET() {
  try {
    await prisma.$connect();
    const response = NextResponse.json({
      message: "Log Out Successfully",
      success: true,
    });
    response.cookies.set("token", "", { expires: new Date(0) });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
