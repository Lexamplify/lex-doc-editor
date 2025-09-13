import { createClerkClient } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

const clerk = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY!,
});

// Handle CORS preflight requests
export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const { externalUserId, externalUserData } = await req.json();
    
    if (!externalUserId || !externalUserData) {
      return NextResponse.json("Missing required parameters", { 
        status: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      });
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

    return NextResponse.json({ 
      sessionToken: sessionToken.token,
      clerkUserId: clerkUser.id,
      success: true
    }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  } catch (err) {
    console.error('Failed to create Clerk session:', err);
    return NextResponse.json("Failed to create session", { 
      status: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }
}




