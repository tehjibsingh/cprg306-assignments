import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li>
          <Link href="/week-2">Week 2</Link>
        </li>
        <li>
          <Link href="/week-3">Week 3</Link>
        </li>
        <li>
          <Link href="/week-4">Week 4</Link>
        </li>
        <li>
          <Link href="/week-5">Week 5</Link>
        </li>
      </ul>
    </div>
  );
}
