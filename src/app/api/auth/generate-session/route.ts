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
    console.log('🔍 Auth request received:', { externalUserId, externalUserData });

    if (!externalUserId || !externalUserData) {
      console.log('❌ Missing required parameters');
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400, headers: corsHeaders }
      );
    }

    // 🔹 Check if user already exists by externalId
    console.log('🔍 Looking for existing user with externalId:', externalUserId);
    const users = await clerk.users.getUserList({
      externalId: [externalUserId],
    });

    let clerkUser;
    if (users.length > 0) {
      clerkUser = users[0];
      console.log('✅ Found existing user:', { id: clerkUser.id, email: clerkUser.primaryEmailAddress?.emailAddress });
    } else {
      console.log('🔹 Creating new user...');
      console.log('🔍 User data to create:', {
        externalId: externalUserId,
        email: externalUserData.email,
        firstName: externalUserData.firstName,
        lastName: externalUserData.lastName,
        avatar: externalUserData.avatar,
      });
      
      try {
        // 🔹 Create user if not exists
        clerkUser = await clerk.users.createUser({
          externalId: externalUserId,
          emailAddress: [externalUserData.email],
          firstName: externalUserData.firstName,
          lastName: externalUserData.lastName || 'User', // Provide default if missing
          imageUrl: externalUserData.avatar,
          password: 'temp_password_' + Math.random().toString(36).substring(7), // Generate temp password
          skipPasswordChecks: true, // Skip password validation
        });
        console.log('✅ Created new user:', { id: clerkUser.id, email: clerkUser.primaryEmailAddress?.emailAddress });
      } catch (createError: any) {
        console.error('❌ User creation failed:', {
          error: createError.message,
          status: createError.status,
          errors: createError.errors,
          clerkTraceId: createError.clerkTraceId,
        });
        
        // If email already exists, try to find user by email
        if (createError.errors?.[0]?.code === 'form_identifier_exists') {
          console.log('🔍 Email already exists, looking for user by email...');
          try {
            // Try different search methods
            const existingUsers = await clerk.users.getUserList({
              emailAddress: [externalUserData.email],
              limit: 1,
            });
            
            if (existingUsers.length > 0) {
              clerkUser = existingUsers[0];
              console.log('✅ Found existing user by email:', { id: clerkUser.id, email: clerkUser.primaryEmailAddress?.emailAddress });
            } else {
              // Try alternative search method
              console.log('🔍 Trying alternative search method...');
              const allUsers = await clerk.users.getUserList({ limit: 100 });
              const foundUser = allUsers.find(user => 
                user.primaryEmailAddress?.emailAddress === externalUserData.email
              );
              
              if (foundUser) {
                clerkUser = foundUser;
                console.log('✅ Found existing user by alternative search:', { id: clerkUser.id, email: clerkUser.primaryEmailAddress?.emailAddress });
              } else {
                console.log('❌ User not found by any method, creating with different email...');
                // Create user with a modified email to avoid conflict
                const modifiedEmail = `temp_${Date.now()}_${externalUserData.email}`;
                clerkUser = await clerk.users.createUser({
                  externalId: externalUserId,
                  emailAddress: [modifiedEmail],
                  firstName: externalUserData.firstName,
                  lastName: externalUserData.lastName || 'User',
                  imageUrl: externalUserData.avatar,
                  password: 'temp_password_' + Math.random().toString(36).substring(7),
                  skipPasswordChecks: true,
                });
                console.log('✅ Created user with modified email:', { id: clerkUser.id, email: modifiedEmail });
              }
            }
          } catch (emailSearchError) {
            console.error('❌ Failed to find user by email:', emailSearchError);
            // Fallback: create user with modified email
            try {
              const modifiedEmail = `temp_${Date.now()}_${externalUserData.email}`;
              clerkUser = await clerk.users.createUser({
                externalId: externalUserId,
                emailAddress: [modifiedEmail],
                firstName: externalUserData.firstName,
                lastName: externalUserData.lastName || 'User',
                imageUrl: externalUserData.avatar,
                password: 'temp_password_' + Math.random().toString(36).substring(7),
                skipPasswordChecks: true,
              });
              console.log('✅ Created user with fallback email:', { id: clerkUser.id, email: modifiedEmail });
            } catch (fallbackError) {
              console.error('❌ Fallback user creation also failed:', fallbackError);
              throw createError;
            }
          }
        } else {
          throw createError;
        }
      }
    }

    // 🔹 Create session
    console.log('🔹 Creating session for user:', clerkUser.id);
    const session = await clerk.sessions.create({
      userId: clerkUser.id,
      expiresInSeconds: 60 * 60 * 24 * 7, // 7 days
    });
    console.log('✅ Session created:', { sessionId: session.id });

    // 🔹 Create session token (JWT)
    console.log('🔹 Creating session token...');
    const token = await clerk.sessions.createSessionToken(session.id);
    console.log('✅ Session token created successfully');

    const response = {
      sessionId: session.id,
      sessionToken: token.jwt,
      clerkUserId: clerkUser.id,
      success: true,
    };
    console.log('🎉 Auth response prepared:', { sessionId: response.sessionId, clerkUserId: response.clerkUserId });

    return NextResponse.json(response, { headers: corsHeaders });
  } catch (err) {
    console.error('❌ Failed to create Clerk session:', err);
    return NextResponse.json(
      { error: 'Failed to create session' },
      { status: 500, headers: corsHeaders }
    );
  }
}
