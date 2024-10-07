// /app/week-3/item.js

export default function Item({ name, quantity, category }) {
  const categoryColors = {
    dairy: 'bg-blue-200 text-blue-900',
    bakery: 'bg-yellow-200 text-yellow-900',
    produce: 'bg-green-200 text-green-900',
    meat: 'bg-red-200 text-red-900',
    "canned goods": 'bg-pink-200 text-pink-900',
    "dry goods": 'bg-purple-200 text-purple-900',
    household: 'bg-gray-200 text-gray-900',
    beverages: 'bg-teal-200 text-teal-900',
    snacks: 'bg-orange-200 text-orange-900',
    other: 'bg-indigo-200 text-indigo-900',
  };

  const categoryStyle = categoryColors[category] || 'bg-gray-200 text-gray-900';

  return (
    <li className={`relative p-6 rounded-xl shadow-xl overflow-hidden transition-all transform hover:-translate-y-1 hover:shadow-2xl ${categoryStyle}`}>
      {/* Decorative Element */}
      <div className="absolute inset-0 bg-white/20 rounded-xl opacity-75 backdrop-blur-md -z-10" />
      
      {/* Item Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-extrabold mb-2">{name}</h3>
        <p className="text-md mb-1">Quantity: {quantity}</p>
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/50 text-black">
          {category}
        </span>
      </div>
    </li>
  );
}
