'use client';
import React, { useEffect, useState } from 'react';

import { Cart, getCart } from '@/app/cart/clientApi';

export function DisplayCart(): React.JSX.Element | null {
  const [cart, setCart] = useState<Cart | null>(null);

  useEffect(() => {
    if (!cart) {
      getCart().then(setCart);
    }
  }, [cart]);

  if (!cart) {
    return null;
  }

  return <div>{JSON.stringify(cart)}</div>;
}
