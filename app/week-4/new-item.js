"use client"; 
import { useState } from 'react'; 

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="h-screen flex justify-center items-start pt-10 bg-gradient-to-r from-purple-300 via-blue-300 to-indigo-300">
      <div className="flex items-center space-x-3 bg-white p-4 rounded-full shadow-lg">
        <span className="text-lg font-semibold text-gray-700">{quantity}</span>

        <button 
          onClick={decrement} 
          disabled={quantity === 1}
          className="w-8 h-8 bg-red-400 text-white rounded-full hover:bg-red-500 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
        >
          –
        </button>

        <button 
          onClick={increment} 
          disabled={quantity === 20}
          className="w-8 h-8 bg-green-400 text-white rounded-full hover:bg-green-500 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
        >
          +
        </button>
      </div>
    </div>
  );
}
