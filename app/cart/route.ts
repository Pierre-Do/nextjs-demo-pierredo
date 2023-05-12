import { NextResponse } from 'next/server';

import {
  deleteCart,
  getOrCreateById,
  handleDb,
  setCartItem,
} from '@/app/cart/db';

export async function GET() {
  const cart = await handleDb(getOrCreateById(1));
  return NextResponse.json(cart);
}

export async function POST() {
  const cart = await handleDb(setCartItem(1));

  return NextResponse.json(cart);
}

export async function DELETE() {
  await handleDb(deleteCart(1));

  return NextResponse.json({});
}
