"use client"; // Ensures the component runs on the client-side
import { useState } from 'react'; // Importing useState hook

export default function NewItem() {
  // Step 1: Declare the state variable `quantity` and initialize it to 1
  const [quantity, setQuantity] = useState(1);

  // Step 2: Create increment and decrement functions
  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1); // Use the setter function to increment quantity
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1); // Use the setter function to decrement quantity
    }
  };

  // Step 3: Render the component
  return (
    <div className="flex items-center space-x-4 p-4">
      {/* Decrement button */}
      <button 
        onClick={decrement} 
        disabled={quantity === 1} // Disable when quantity is 1
        className="bg-gray-300 px-4 py-2 rounded-lg disabled:bg-gray-100"
      >
        -
      </button>

      {/* Display current quantity */}
      <span className="text-lg">{quantity}</span>

      {/* Increment button */}
      <button 
        onClick={increment} 
        disabled={quantity === 20} // Disable when quantity is 20
        className="bg-gray-300 px-4 py-2 rounded-lg disabled:bg-gray-100"
      >
        +
      </button>
    </div>
  );
}
