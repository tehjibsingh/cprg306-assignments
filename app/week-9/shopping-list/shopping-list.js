"use client";

import { useUserAuth } from "../_utils/auth-context";
import { useState } from "react";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import NewItem from "./new-item";
import initialItems from "./items.json";

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const [items, setItems] = useState(initialItems);
  const [selectedItemName, setSelectedItemName] = useState("");

  if (!user) {
    return <p>You must be logged in to view the shopping list.</p>;
  }

  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName.split(",")[0].replace(/[^\w\s]/gi, "").trim();
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
