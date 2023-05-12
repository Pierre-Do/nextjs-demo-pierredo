'use client';

import React from 'react';

import { setQuantity } from '@/app/cart/clientApi';

export function AddToCartButton(): React.JSX.Element {
  const [isAdding, setIsAdding] = React.useState(false);

  async function handleClick() {
    try {
      setIsAdding(true);
      await setQuantity();
    } finally {
      setIsAdding(false);
    }
  }

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      disabled={isAdding}
    >
      Add to Cart
    </button>
  );
}
