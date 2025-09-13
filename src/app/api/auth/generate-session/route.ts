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

// Handle CORS preflight
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

    let clerkUser;

    // 1. Check by externalId
    const usersByExternalId = await clerk.users.getUserList({
      externalId: [externalUserId],
      limit: 1,
    });
    if (usersByExternalId.length > 0) {
      clerkUser = usersByExternalId[0];
    }

    // 2. If not found, check by email
    if (!clerkUser) {
      const usersByEmail = await clerk.users.getUserList({
        emailAddress: [externalUserData.email],
        limit: 1,
      });
      if (usersByEmail.length > 0) {
        clerkUser = usersByEmail[0];
      }
    }

    // 3. If still not found, create user
    if (!clerkUser) {
      clerkUser = await clerk.users.createUser({
        externalId: externalUserId,
        emailAddress: [externalUserData.email],
        firstName: externalUserData.firstName,
        lastName: externalUserData.lastName || 'User',
        imageUrl: externalUserData.avatar,
      });
    }

    // 4. Create session
    const session = await clerk.sessions.createSession({
      userId: clerkUser.id,
      expiresInSeconds: 60 * 60 * 24 * 7, // 7 days
    });

    // 5. Create session token
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
  } catch (err: any) {
    console.error('❌ Failed to create Clerk session:', err);
    return NextResponse.json(
      { error: err.message || 'Failed to create session' },
      { status: 500, headers: corsHeaders }
    );
  }
}
