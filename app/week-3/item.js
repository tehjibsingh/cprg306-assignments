export default function Item({ name, quantity, category }) {
    return (
      <li className="border p-4 rounded-lg shadow-md mb-2">
        <p className="font-bold">{name}</p>
        <p>Quantity: {quantity}</p>
        <p>Category: {category}</p>
      </li>
    );
  }
  