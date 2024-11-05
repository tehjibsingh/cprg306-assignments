import Item from './item';

export default function ItemList({ items, onItemSelect }) {
    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shopping List</h2>
            <ul className="space-y-4">
                {items.map(item => (
                    <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                        onSelect={onItemSelect}
                    />
                ))}
            </ul>
        </div>
    );
}
