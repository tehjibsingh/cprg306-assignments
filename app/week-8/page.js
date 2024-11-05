import { useState } from 'react';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';

export default function Page() {
    const [selectedItemName, setSelectedItemName] = useState('');

    const handleItemSelect = (itemName) => {
        // Clean the item name for API use
        const cleanedItemName = itemName.split(',')[0].replace(/[^\w\s]/gi, '').trim();
        setSelectedItemName(cleanedItemName);
    };

    return (
        <main className="flex justify-center space-x-4">
            <div className="w-1/2">
                <ItemList onItemSelect={handleItemSelect} />
            </div>
            <div className="w-1/2">
                {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
            </div>
        </main>
    );
}
