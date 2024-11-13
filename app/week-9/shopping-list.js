"use client";

import { useState } from 'react';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import NewItem from './new-item';
import initialItems from './items.json';

export default function Page() {
    const [items, setItems] = useState(initialItems);
    const [selectedItemName, setSelectedItemName] = useState('');

    const handleItemSelect = (itemName) => {
        const cleanedItemName = itemName.split(',')[0].replace(/[^\w\s]/gi, '').trim();
        setSelectedItemName(cleanedItemName);
    };

    const handleAddItem = (newItem) => {
        const itemWithId = { ...newItem, id: Date.now().toString() };
        setItems([...items, itemWithId]);
    };

    return (
        <main className="flex flex-col items-center space-y-8 p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800">Shopping List with Meal Ideas</h1>
            <div className="flex w-full max-w-6xl space-x-8">
                <div className="w-1/2 bg-white p-6 rounded-lg shadow-lg">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="w-1/2 bg-white p-6 rounded-lg shadow-lg">
                    {selectedItemName ? (
                        <MealIdeas ingredient={selectedItemName} />
                    ) : (
                        <p className="text-center text-gray-500">Select an item to view meal ideas.</p>
                    )}
                </div>
            </div>
        </main>
    );
}

[
    { "id": "1h2GJKH12gkHG31h1H", "name": "milk, 4 L 🥛", "quantity": 1, "category": "dairy" },
    { "id": "2KJH3k2j3H1k2J3K1H", "name": "bread 🍞", "quantity": 2, "category": "bakery" },
    { "id": "3h2KJH3k2j3H1k2J3", "name": "eggs, dozen 🥚", "quantity": 2, "category": "dairy" },
    { "id": "4k2J3K1H2GJKH12gk", "name": "bananas 🍌", "quantity": 6, "category": "produce" },
    { "id": "5H1h1H2KJH3k2j3H", "name": "broccoli 🥦", "quantity": 3, "category": "produce" },
    { "id": "6H1k2J3K1H2GJKH1", "name": "chicken breasts, 1 kg 🍗", "quantity": 1, "category": "meat" },
    { "id": "7gkHG31h1H2KJH3k", "name": "pasta sauce 🍝", "quantity": 3, "category": "canned goods" },
    { "id": "8j3H1k2J3K1H2GJK", "name": "spaghetti, 454 g 🍝", "quantity": 2, "category": "dry goods" },
    { "id": "9H12gkHG31h1H2KJ", "name": "toilet paper, 12 pack 🧻", "quantity": 1, "category": "household" },
    { "id": "10H3k2j3H1k2J3K1", "name": "paper towels, 6 pack", "quantity": 1, "category": "household" },
    { "id": "11k2J3K1H2GJKH12", "name": "dish soap 🍽️", "quantity": 1, "category": "household" },
    { "id": "12GJKH12gkHG31h1", "name": "hand soap 🧼", "quantity": 4, "category": "household" }
]
