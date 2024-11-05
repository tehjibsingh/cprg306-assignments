export default function Item({ name, quantity, category, onSelect }) {
    const categoryColors = {
        dairy: 'bg-blue-100 text-blue-800',
        bakery: 'bg-yellow-100 text-yellow-800',
        produce: 'bg-green-100 text-green-800',
        meat: 'bg-red-100 text-red-800',
        other: 'bg-gray-100 text-gray-800',
    };

    const categoryStyle = categoryColors[category] || 'bg-gray-100 text-gray-800';

    return (
        <li 
            onClick={() => onSelect(name)} 
            className={`p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer ${categoryStyle}`}
        >
            <h3 className="text-lg font-bold">{name}</h3>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
        </li>
    );
}
