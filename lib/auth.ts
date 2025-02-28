import { Clerk, WithAuth } from "@clerk/clerk-sdk-node";

const clerk = new Clerk({ secretKey: process.env.CLERK_SECRET_KEY! });

export const withAuth: WithAuth = clerk.withAuth();

/**
 * Fetch user details from Clerk
 */
export async function getUser(userId: string) {
  try {
    return await clerk.users.getUser(userId);
  } catch (error) {
    console.error(`Failed to fetch user ${userId}:`, error);
    throw new Error("User fetch failed");
  }
}

/**
 * Check if a user is an admin based on metadata
 */
export async function isAdmin(userId: string): Promise<boolean> {
  const user = await getUser(userId);
  return user?.publicMetadata?.role === "admin";
}

/**
 * Sign in user using Clerk
 */
export async function signIn(email: string, password: string) {
  try {
    return await clerk.clients.createEmailPasswordSession(email, password);
  } catch (error) {
    console.error("Sign-in failed:", error);
    throw new Error("Sign-in error");
  }
}

/**
 * Sign out user by revoking session
 */
export async function signOut(sessionId: string) {
  try {
    return await clerk.sessions.revokeSession(sessionId);
  } catch (error) {
    console.error("Sign-out failed:", error);
    throw new Error("Sign-out error");
  }
}

/**
 * Verify Clerk session token for API authentication
 */
export async function verifyToken(token: string) {
  try {
    return await clerk.verifyToken(token);
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
}

export default clerk;
