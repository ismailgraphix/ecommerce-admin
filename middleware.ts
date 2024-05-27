// middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";

export default function customMiddleware(req, ev) {
  console.log('Middleware is running');
  return clerkMiddleware()(req, ev);
}

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", // Match all routes except for static files and _next
    "/", // Match the root route
    "/(api|trpc)(.*)", // Match all API routes
  ],
};
