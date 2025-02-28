// src/lib/auth.ts
import { Clerk, WithAuth } from "@clerk/clerk-sdk-node";

const clerk = new Clerk({ secretKey: process.env.CLERK_SECRET_KEY! });

export const withAuth: WithAuth = clerk.withAuth();
export default clerk;

export async function isAdmin(userId: string): Promise<boolean> {
    const user = await getUser(userId);
    return user?.publicMetadata?.role === "admin";
  }
  
  export async function signIn(email: string, password: string) {
    return await clerk.clients.createEmailPasswordSession(email, password);
  }
  
  export async function signOut(sessionId: string) {
    return await clerk.sessions.revokeSession(sessionId);
  }
  