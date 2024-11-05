"use client";

import { useState, useEffect } from 'react';

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState(null);
    const [recipe, setRecipe] = useState(null);

    // Function to fetch meal ideas based on ingredient
    async function fetchMealIdeas(ingredient) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals || [];
    }

    // Function to fetch recipe details based on meal ID
    async function fetchRecipe(idMeal) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
        const data = await response.json();
        return data.meals ? data.meals[0] : null;
    }

    useEffect(() => {
        if (ingredient) {
            async function loadMealIdeas() {
                const meals = await fetchMealIdeas(ingredient);
                setMeals(meals);
            }
            loadMealIdeas();
        }
    }, [ingredient]);

    const handleMealClick = async (idMeal) => {
        const mealRecipe = await fetchRecipe(idMeal);
        setSelectedMeal(idMeal);
        setRecipe(mealRecipe);
    };

    const closeRecipeModal = () => {
        setSelectedMeal(null);
        setRecipe(null);
    };

    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meal Ideas for {ingredient}</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {meals.map(meal => (
                    <li key={meal.idMeal} className="bg-gray-50 p-4 rounded-lg shadow-md">
                        <img
                            src={meal.strMealThumb}
                            alt={meal.strMeal}
                            className="w-full h-32 object-cover rounded-md cursor-pointer"
                            onClick={() => handleMealClick(meal.idMeal)}
                        />
                        <p className="mt-2 text-center font-medium">{meal.strMeal}</p>
                    </li>
                ))}
            </ul>

            {/* Recipe Modal */}
            {selectedMeal && recipe && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2 lg:w-1/3 max-h-[80vh] overflow-y-auto">
                        <button
                            className="text-red-500 font-bold text-lg float-right"
                            onClick={closeRecipeModal}
                        >
                            &times;
                        </button>
                        <h3 className="text-2xl font-bold mb-4">{recipe.strMeal}</h3>
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-48 object-cover rounded mb-4" />
                        <h4 className="text-xl font-semibold mb-2">Instructions</h4>
                        <p className="text-gray-700 mb-4">{recipe.strInstructions}</p>
                        <h4 className="text-lg font-semibold mb-2">Ingredients</h4>
                        <ul className="list-disc list-inside">
                            {Array.from({ length: 20 }, (_, i) => i + 1)
                                .map(i => ({
                                    ingredient: recipe[`strIngredient${i}`],
                                    measure: recipe[`strMeasure${i}`],
                                }))
                                .filter(ing => ing.ingredient && ing.ingredient.trim())
                                .map((ing, idx) => (
                                    <li key={idx} className="text-gray-700">
                                        {ing.ingredient} - {ing.measure}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}
