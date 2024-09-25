import Link from "next/link";
export default function page() {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li>
          <Link href="/week-2">week-2</Link>
        </li>
        <li>
          <Link href="/week-3">week-3</Link>
        </li>
        <li>
          <Link href="/week-3">week-4</Link>
        </li>
      </ul>
    </div>
  );
}
