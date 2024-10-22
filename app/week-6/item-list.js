// /app/week-6/item-list.js
"use client"; // For client-side rendering

import { useState } from 'react';
import Item from './item';

// Shopping list data
const itemsData = [
  { "id": "1h2GJKH12gkHG31h1H", "name": "milk, 4 L 🥛", "quantity": 1, "category": "dairy" },
  { "id": "2KJH3k2j3H1k2J3K1H", "name": "bread 🍞", "quantity": 2, "category": "bakery" },
  { "id": "3h2KJH3k2j3H1k2J3", "name": "eggs, dozen 🥚", "quantity": 2, "category": "dairy" },
  { "id": "4k2J3K1H2GJKH12gk", "name": "bananas 🍌", "quantity": 6, "category": "produce" },
  { "id": "5H1h1H2KJH3k2j3H", "name": "broccoli 🥦", "quantity": 3, "category": "produce" },
  { "id": "6H1k2J3K1H2GJKH1", "name": "chicken breasts, 1 kg 🍗", "quantity": 1, "category": "meat" },
  { "id": "7gkHG31h1H2KJH3k", "name": "pasta sauce 🍝", "quantity": 3, "category": "canned goods" },
  { "id": "8j3H1k2J3K1H2GJK", "name": "spaghetti, 454 g 🍝", "quantity": 2, "category": "dry goods" },
  { "id": "9H12gkHG31h1H2KJ", "name": "toilet paper, 12 pack 🧻", "quantity": 1, "category": "household" },
  { "id": "10H3k2j3H1k2J3K1", "name": "paper towels, 6 pack", "quantity": 1, "category": "household" },
  { "id": "11k2J3K1H2GJKH12", "name": "dish soap 🍽️", "quantity": 1, "category": "household" },
  { "id": "12GJKH12gkHG31h1", "name": "hand soap 🧼", "quantity": 4, "category": "household" }
];

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');
  const [groupByCategory, setGroupByCategory] = useState(false);

  // Sort items based on the sortBy state
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  // Group items by category if the groupByCategory state is true
  const groupedItems = groupByCategory
    ? sortedItems.reduce((acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
      }, {})
    : { All: sortedItems };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-center gap-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => {
            setSortBy('name');
            setGroupByCategory(false);
          }}
        >
          Sort by Name
        </button>
        <button
          className={`px-4 py-2 rounded ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => {
            setSortBy('category');
            setGroupByCategory(false);
          }}
        >
          Sort by Category
        </button>
        <button
          className={`px-4 py-2 rounded ${groupByCategory ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setGroupByCategory(!groupByCategory)}
        >
          Group by Category
        </button>
      </div>

      {/* Render items */}
      {Object.entries(groupedItems).map(([category, items]) => (
        <div key={category}>
          {groupByCategory && <h2 className="text-lg font-semibold mt-4 capitalize">{category}</h2>}
          <ul className="list-none p-0">
            {items.map(item => (
              <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
