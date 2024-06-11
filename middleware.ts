// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { clerkMiddleware } from "@clerk/nextjs/server";

const PUBLIC_ROUTES = ['/api/:path*'];

export default function middleware(req: NextRequest, ev: any) {
  console.log('Middleware is running');

  // Check if the request URL is for a public route
  const isPublicRoute = PUBLIC_ROUTES.some(route => {
    const regex = new RegExp(`^${route.replace('*', '.*')}$`);
    return regex.test(req.nextUrl.pathname);
  });

  // If it's a public route, proceed without Clerk middleware
  if (isPublicRoute) {
    return NextResponse.next();
  }

  // Apply Clerk middleware for all other routes
  return clerkMiddleware()(req, ev);
}

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", // Match all routes except for static files and _next
    "/", // Match the root route
    "/(api|trpc)(.*)", // Match all API routes
  ],
};
