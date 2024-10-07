// /app/page.js

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">CPRG 306: Web Development 2 - Assignments</h1>
      <ul className="list-disc list-inside">
        <li><Link href="/week-1">Week 1</Link></li>
        <li><Link href="/week-2">Week 2</Link></li>
        <li><Link href="/week-3">Week 3</Link></li>
        <li><Link href="/week-4">Week 4</Link></li>
        <li><Link href="/week-5">Week 5</Link></li>
      </ul>
    </div>
  );
}
