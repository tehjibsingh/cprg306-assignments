// /app/week-6/item.js
export default function Item({ name, quantity, category }) {
    return (
      <li className="bg-white p-4 rounded shadow mb-2">
        <div className="text-lg font-bold">{name}</div>
        <div>Quantity: {quantity}</div>
        <div className="text-sm text-gray-600 capitalize">Category: {category}</div>
      </li>
    );
  }
  