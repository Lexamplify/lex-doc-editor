import { createClerkClient } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

const clerk = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY!,
});

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Handle CORS preflight requests
export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: corsHeaders,
  });
}

export async function POST(req: NextRequest) {
  try {
    const { externalUserId, externalUserData } = await req.json();

    if (!externalUserId || !externalUserData) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400, headers: corsHeaders }
      );
    }

    // 🔹 Check if user already exists by externalId
    const users = await clerk.users.getUserList({
      externalId: [externalUserId],
    });

    let clerkUser;
    if (users.length > 0) {
      clerkUser = users[0];
    } else {
      // 🔹 Create user if not exists
      clerkUser = await clerk.users.createUser({
        externalId: externalUserId,
        emailAddress: [externalUserData.email],
        firstName: externalUserData.firstName,
        lastName: externalUserData.lastName,
        imageUrl: externalUserData.avatar,
      });
    }

    // 🔹 Create session
    const session = await clerk.sessions.createSession({
      userId: clerkUser.id,
      expiresInSeconds: 60 * 60 * 24 * 7, // 7 days
    });

    // 🔹 Create session token (JWT)
    const token = await clerk.sessions.createSessionToken(session.id);

    return NextResponse.json(
      {
        sessionId: session.id,
        sessionToken: token.jwt,
        clerkUserId: clerkUser.id,
        success: true,
      },
      { headers: corsHeaders }
    );
  } catch (err) {
    console.error('Failed to create Clerk session:', err);
    return NextResponse.json(
      { error: 'Failed to create session' },
      { status: 500, headers: corsHeaders }
    );
  }
}
