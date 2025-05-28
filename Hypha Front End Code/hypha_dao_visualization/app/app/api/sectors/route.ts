export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { flywheelSectors } from '@/lib/data';

export async function GET() {
  try {
    return NextResponse.json(flywheelSectors);
  } catch (error) {
    console.error('Error fetching sectors:', error);
    return NextResponse.json(
      { error: 'Failed to fetch sectors' },
      { status: 500 }
    );
  }
}