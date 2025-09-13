import { auth, currentUser } from '@clerk/nextjs/server';
import { ConvexHttpClient } from 'convex/browser';
import { api } from '../../../../convex/_generated/api';
import { NextRequest } from 'next/server';

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function POST(req: NextRequest) {
  try {
    const { documentId, content, externalDocumentId, externalSyncUrl } = await req.json();
    
    if (!documentId || !content) {
      return new Response("Missing required parameters", { status: 400 });
    }
    
    // Verify Clerk authentication
    const { sessionClaims } = await auth();
    const user = await currentUser();
    
    if (!sessionClaims || !user) {
      return new Response("Unauthorized", { status: 401 });
    }
    
    // Update document in Convex
    await convex.mutation(api.documents.updateContent, {
      id: documentId,
      content: content,
      userId: user.id
    });
    
    // Optionally sync to external database (your main website)
    if (externalDocumentId && externalSyncUrl) {
      try {
        const response = await fetch(externalSyncUrl, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${sessionClaims.jti}`, // Clerk session token
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            documentId: externalDocumentId,
            content: content,
            clerkUserId: user.id
          })
        });
        
        if (!response.ok) {
          console.error('Failed to sync to external database:', await response.text());
        }
      } catch (error) {
        console.error('External sync error:', error);
        // Don't fail the request if external sync fails
      }
    }
    
    return Response.json({ 
      success: true,
      message: 'Document synced successfully'
    });
  } catch (error) {
    console.error('Document sync error:', error);
    return new Response("Sync failed", { status: 500 });
  }
}




