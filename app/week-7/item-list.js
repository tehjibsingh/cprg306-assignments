"use client";

import { useState } from 'react';

// Initial shopping list items
const initialItemsData = [
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

export default function ShoppingListApp() {
  const [items, setItems] = useState(initialItemsData);
  const [name, setName] = useState(''); 
  const [quantity, setQuantity] = useState(1); 
  const [category, setCategory] = useState('produce'); 
  const [sortBy, setSortBy] = useState('name');
  const [groupByCategory, setGroupByCategory] = useState(false);

  // Sorting function
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'category') return a.category.localeCompare(b.category);
    return 0;
  });

  // Grouping function
  const groupedItems = groupByCategory
    ? sortedItems.reduce((acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
      }, {})
    : { All: sortedItems };

  // Add new item
  const handleAddItem = (e) => {
    e.preventDefault();
    const newItem = { id: Date.now().toString(), name, quantity, category };
    setItems([...items, newItem]);
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="bg-gradient-to-b from-purple-50 to-purple-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-bold text-center text-purple-800 mb-4">Add a New Item</h2>
        <form onSubmit={handleAddItem} className="space-y-4">
          <div>
            <label className="block mb-1 text-lg text-purple-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter item name"
            />
          </div>
          <div>
            <label className="block mb-1 text-lg text-purple-700">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              required
              className="w-full px-4 py-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter quantity"
            />
          </div>
          <div>
            <label className="block mb-1 text-lg text-purple-700">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="canned goods">Canned Goods</option>
              <option value="dry goods">Dry Goods</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow hover:shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition duration-200"
          >
            Add Item
          </button>
        </form>
      </div>

      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${sortBy === 'name' && !groupByCategory ? 'bg-purple-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          onClick={() => {
            setSortBy('name');
            setGroupByCategory(false);
          }}
        >
          Sort by Name
        </button>
        <button
          className={`px-4 py-2 rounded ${sortBy === 'category' && !groupByCategory ? 'bg-purple-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          onClick={() => {
            setSortBy('category');
            setGroupByCategory(false);
          }}
        >
          Sort by Category
        </button>
        <button
          className={`px-4 py-2 rounded ${groupByCategory ? 'bg-purple-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          onClick={() => {
            setGroupByCategory(!groupByCategory);
            setSortBy('');
          }}
        >
          Group by Category
        </button>
      </div>

      {Object.entries(groupedItems).map(([category, items]) => (
        <div key={category} className="mb-6">
          {groupByCategory && <h3 className="text-lg font-semibold text-purple-700 mt-4 mb-2 capitalize">{category}</h3>}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map(item => (
              <li 
                key={item.id} 
                className="bg-gradient-to-br from-white to-purple-50 border border-purple-200 p-4 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <p className="font-bold text-purple-800">{item.name}</p>
                <p className="text-purple-700">Quantity: {item.quantity}</p>
                <p className="text-purple-600">Category: {item.category}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
