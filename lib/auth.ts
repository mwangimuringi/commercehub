// src/lib/auth.ts
export async function getUser(userId: string) {
    try {
      return await clerk.users.getUser(userId);
    } catch (error) {
      console.error("Failed to fetch user:", error);
      return null;
    }
  }
  