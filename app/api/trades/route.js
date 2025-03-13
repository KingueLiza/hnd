import { NextResponse } from 'next/server';
import { createTrade, getTradeById, updateTradeStatus } from '@/lib/db/utils';

// GET /api/trades/:id
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Trade ID is required' }, { status: 400 });
    }
    
    const trade = await getTradeById(id);
    
    if (!trade) {
      return NextResponse.json({ error: 'Trade not found' }, { status: 404 });
    }
    
    return NextResponse.json({ trade });
  } catch (error) {
    console.error('Error fetching trade:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST /api/trades
export async function POST(request) {
  try {
    const body = await request.json();
    const { itemOfferedId, itemRequestedId } = body;
    
    if (!itemOfferedId || !itemRequestedId) {
      return NextResponse.json({ error: 'Item offered ID and item requested ID are required' }, { status: 400 });
    }
    
    const trade = await createTrade({ itemOfferedId, itemRequestedId });
    
    return NextResponse.json({ trade }, { status: 201 });
  } catch (error) {
    console.error('Error creating trade:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PATCH /api/trades/:id
export async function PATCH(request) {
  try {
    const body = await request.json();
    const { id, status } = body;
    
    if (!id || !status) {
      return NextResponse.json({ error: 'Trade ID and status are required' }, { status: 400 });
    }
    
    if (!['pending', 'accepted', 'rejected'].includes(status)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
    }
    
    const trade = await updateTradeStatus(id, status);
    
    if (!trade) {
      return NextResponse.json({ error: 'Trade not found' }, { status: 404 });
    }
    
    return NextResponse.json({ trade });
  } catch (error) {
    console.error('Error updating trade:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 