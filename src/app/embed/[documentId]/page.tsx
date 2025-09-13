'use client';

import { useSearchParams } from 'next/navigation';
import { ClerkProvider } from '@clerk/nextjs';
import { ClerkEmbeddableEditor } from '@/components/clerk-embeddable-editor';
import { ConvexClientProvider } from '@/components/convex-client-provider';

interface EmbedPageProps {
  params: { documentId: string };
}

export default function EmbedPage({ params }: EmbedPageProps) {
  const searchParams = useSearchParams();
  const sessionToken = searchParams.get('token');

  if (!sessionToken) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Unauthorized</h2>
          <p className="text-gray-600">Missing session token</p>
        </div>
      </div>
    );
  }

  return (
    <ClerkProvider>
      <ConvexClientProvider>
        <div className="h-screen w-full">
          <ClerkEmbeddableEditor 
            documentId={params.documentId}
            clerkSessionToken={sessionToken}
            onSave={(content) => {
              // Handle save to your main database
              console.log('Document saved:', content);
              // Send message to parent window
              window.parent.postMessage({ 
                type: 'DOCUMENT_SAVED', 
                content,
                documentId: params.documentId
              }, '*');
            }}
            onClose={() => {
              // Handle close
              window.parent.postMessage({ type: 'CLOSE_EDITOR' }, '*');
            }}
          />
        </div>
      </ConvexClientProvider>
    </ClerkProvider>
  );
}




