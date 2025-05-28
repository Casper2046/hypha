export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { roadmapData } from '@/lib/data';

export async function GET() {
  try {
    return NextResponse.json(roadmapData);
  } catch (error) {
    console.error('Error fetching roadmap:', error);
    return NextResponse.json(
      { error: 'Failed to fetch roadmap' },
      { status: 500 }
    );
  }
}