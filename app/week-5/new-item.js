// /app/week-5/new-item.js

"use client"; 

import { useState } from 'react';

export default function NewItem() {
  
  const [name, setName] = useState(''); 
  const [quantity, setQuantity] = useState(1); 
  const [category, setCategory] = useState('produce'); 

  
  const handleSubmit = (e) => {
    e.preventDefault();

   
    const item = {
      name: name,
      quantity: quantity,
      category: category,
    };

    
    console.log(item);

    
    alert(`Item added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

  
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Add a New Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
       
        <div>
          <label className="block mb-1 text-gray-600">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter item name"
          />
        </div>

        
        <div>
          <label className="block mb-1 text-gray-600">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            required
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter quantity"
          />
        </div>

       
        <div>
          <label className="block mb-1 text-gray-600">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
``
