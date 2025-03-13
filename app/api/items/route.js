import { NextResponse } from 'next/server';
import { createItem, getItemsByUserId } from '@/lib/db/utils';

// GET /api/items
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    
    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }
    
    const items = await getItemsByUserId(userId);
    
    return NextResponse.json({ items });
  } catch (error) {
    console.error('Error fetching items:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST /api/items
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, description, userId } = body;
    
    if (!name || !userId) {
      return NextResponse.json({ error: 'Name and user ID are required' }, { status: 400 });
    }
    
    const item = await createItem({ name, description, userId });
    
    return NextResponse.json({ item }, { status: 201 });
  } catch (error) {
    console.error('Error creating item:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 