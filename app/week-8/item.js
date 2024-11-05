// Updated item.js
export default function Item({ name, quantity, category, onSelect }) {
    const categoryColors = {
      // existing category colors
    };
  
    const categoryStyle = categoryColors[category] || 'bg-gray-200 text-gray-900';
  
    return (
      <li 
        className={`relative p-6 rounded-xl shadow-xl overflow-hidden transition-all transform hover:-translate-y-1 hover:shadow-2xl ${categoryStyle}`}
        onClick={() => onSelect(name)}  // Pass name to the onSelect function
      >
        <div className="absolute inset-0 bg-white/20 rounded-xl opacity-75 backdrop-blur-md -z-10" />
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
