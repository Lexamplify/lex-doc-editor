import { createClerkClient } from '@clerk/nextjs/server';
import { NextRequest } from 'next/server';

const clerk = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY!,
});

export async function POST(req: NextRequest) {
  try {
    const { externalUserId, externalUserData } = await req.json();
    
    if (!externalUserId || !externalUserData) {
      return new Response("Missing required parameters", { status: 400 });
    }

    // Check if user already exists
    let clerkUser;
    try {
      clerkUser = await clerk.users.getUser({ externalId: externalUserId });
    } catch (error) {
      // User doesn't exist, create new one
      clerkUser = await clerk.users.createUser({
        externalId: externalUserId,
        emailAddress: [externalUserData.email],
        firstName: externalUserData.firstName,
        lastName: externalUserData.lastName,
        imageUrl: externalUserData.avatar,
      });
    }

    // Generate session token
    const sessionToken = await clerk.sessions.createSession({
      userId: clerkUser.id,
      expiresInSeconds: 60 * 60 * 24 * 7, // 7 days
    });

    return Response.json({ 
      sessionToken: sessionToken.token,
      clerkUserId: clerkUser.id,
      success: true
    });
  } catch (err) {
    console.error('Failed to create Clerk session:', err);
    return new Response("Failed to create session", { status: 500 });
  }
}




