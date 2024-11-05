import Item from './item';

export default function ItemList({ items, onItemSelect }) {
    return (
        <ul>
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
    );
}
