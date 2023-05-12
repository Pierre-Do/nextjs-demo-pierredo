import Link from 'next/link';
import React from 'react';

export default function Home(): React.JSX.Element {
  return (
    <main className="flex gap-2 p-24">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add to Cart
      </button>
      <Link
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        href="/checkout"
      >
        Checkout
      </Link>
    </main>
  );
}
