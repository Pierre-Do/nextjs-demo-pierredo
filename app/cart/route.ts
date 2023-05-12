import { NextResponse } from 'next/server';

const cart = {
  id: '1234',
  cart_items: [],
};

export async function GET() {
  return NextResponse.json({ cart });
}

export async function POST() {
  return NextResponse.json({ cart });
}
