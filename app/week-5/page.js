// /app/week-5/page.js

import NewItem from './new-item'; // Make sure the path is correct

export default function Week5Page() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Week 5: Add a New Item</h1>

      {/* Navigation Links */}
      <div className="mb-6">
        <a href="/" className="text-blue-500 hover:underline">Back to Home</a>
      </div>

      {/* Render the NewItem Component */}
      <NewItem />
    </div>
  );
}
