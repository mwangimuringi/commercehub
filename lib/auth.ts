// src/lib/auth.ts
import { Clerk, WithAuth } from "@clerk/clerk-sdk-node";

const clerk = new Clerk({ secretKey: process.env.CLERK_SECRET_KEY! });

export const withAuth: WithAuth = clerk.withAuth();
export default clerk;

export async function isAdmin(userId: string): Promise<boolean> {
    const user = await getUser(userId);
    return user?.publicMetadata?.role === "admin";
  }
  