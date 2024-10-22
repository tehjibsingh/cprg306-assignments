// /app/week-6/page.js
import ItemList from './item-list';

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Shopping List</h1>
      <ItemList />
    </main>
  );
}
