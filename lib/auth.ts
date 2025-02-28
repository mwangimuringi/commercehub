// src/lib/auth.ts
import { Clerk, WithAuth } from "@clerk/clerk-sdk-node";

const clerk = new Clerk({ secretKey: process.env.CLERK_SECRET_KEY! });

export const withAuth: WithAuth = clerk.withAuth();
export default clerk;
