import { NextResponse } from 'next/server';
import { getOutreachSnapshot } from '@/lib/agent/orchestrator';

export async function GET() {
  try {
    const snapshot = getOutreachSnapshot();
    return NextResponse.json(snapshot);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch outreach data' },
      { status: 500 }
    );
  }
}
