import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest, res: NextResponse) {
  const path = req.nextUrl.pathname;

  const token = req.cookies.get("token")?.value || "";

  const isPublicPath = path === "/login" || path === "/signup";
  const isPrivatePath = path === "/account";

  if (token && isPublicPath) {
    return NextResponse.redirect(new URL("/account", req.nextUrl));
  }

  if (!token && isPrivatePath) {
    return NextResponse.redirect(new URL("/signup", req.nextUrl));
  }
}

export const config = {
  matcher: ["/", "/account", "/signup", "/login"],
};
