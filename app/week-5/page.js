// /app/week-5/page.js

"use client"; 

import Link from 'next/link';
import NewItem from './new-item'; 

export default function Week5Page() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6"></h1>

     
      <div className="mb-6">
        <Link href="/" className="text-blue-500 hover:underline">Back to Home</Link>
      </div>

     
      <NewItem />

     
    </div>
  );
}
