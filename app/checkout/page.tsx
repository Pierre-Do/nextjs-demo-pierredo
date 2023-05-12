import Link from 'next/link';
import React from 'react';

import { DisplayCart } from '@/app/cart/DisplayCart';

export default function Checkout(): React.JSX.Element {
  return (
    <main className="flex gap-2 p-24">
      <Link
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        href="/"
      >
        Back to Product
      </Link>
      <DisplayCart />
    </main>
  );
}
