import { auth, currentUser } from '@clerk/nextjs/server';
import { ConvexHttpClient } from 'convex/browser';
import { api } from '../../../../../convex/_generated/api';
import { NextRequest } from 'next/server';

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const documentId = searchParams.get('id');
    
    if (!documentId) {
      return new Response("Missing document ID", { status: 400 });
    }
    
    // Verify Clerk authentication
    const { sessionClaims } = await auth();
    const user = await currentUser();
    
    if (!sessionClaims || !user) {
      return new Response("Unauthorized", { status: 401 });
    }
    
    // Get document
    const document = await convex.query(api.documents.getById, { id: documentId });
    
    if (!document) {
      return new Response("Document not found", { status: 404 });
    }
    
    // Check permissions using Clerk organization data
    const isOwner = document.ownerId === user.id;
    const userOrgId = (sessionClaims.o as { id?: string })?.id;
    const isOrganizationMember = !!(
      document.organizationId && 
      userOrgId && 
      document.organizationId === userOrgId
    );
    
    if (!isOwner && !isOrganizationMember) {
      return new Response("Unauthorized", { status: 401 });
    }
    
    return Response.json({
      id: document._id,
      title: document.title,
      content: document.initialContent,
      ownerId: document.ownerId,
      organizationId: document.organizationId,
      clerkUserId: user.id,
      userInfo: {
        name: user.fullName || user.primaryEmailAddress?.emailAddress || "Anonymous",
        email: user.primaryEmailAddress?.emailAddress,
        avatar: user.imageUrl
      }
    });
  } catch (error) {
    console.error('External document access error:', error);
    return new Response("Internal Server Error", { status: 500 });
  }
}




