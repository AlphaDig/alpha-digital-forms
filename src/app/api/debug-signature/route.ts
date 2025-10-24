import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    return NextResponse.json({
      success: true,
      debug: {
        hasSignature: !!data.signature,
        signatureType: typeof data.signature,
        signatureLength: data.signature ? data.signature.length : 0,
        signaturePreview: data.signature ? data.signature.substring(0, 100) + '...' : 'none',
        isValidDataUrl: data.signature ? data.signature.startsWith('data:image/') : false
      }
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}