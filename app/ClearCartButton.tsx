'use client';

import React from 'react';

import { clearCart } from '@/app/cart/clientApi';

export function ClearCartButton(): React.JSX.Element {
  const [isAdding, setIsAdding] = React.useState(false);

  async function handleClick() {
    try {
      setIsAdding(true);
      await clearCart();
    } finally {
      setIsAdding(false);
    }
  }

  return (
    <button
      onClick={handleClick}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      disabled={isAdding}
    >
      Clear Cart
    </button>
  );
}
