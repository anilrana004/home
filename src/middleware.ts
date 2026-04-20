import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Remove trailing slash (except root)
  if (pathname !== "/" && pathname.endsWith("/")) {
    const cleanUrl = new URL(request.url);
    cleanUrl.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(cleanUrl, 301);
  }

  const response = NextResponse.next();
  response.headers.set("X-Content-Type-Options", "nosniff");
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon|icons|images|site.webmanifest|robots.txt).*)",
  ],
};

