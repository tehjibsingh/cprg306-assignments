"use client";

import { useState, useEffect } from 'react';

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    // Function to fetch meal ideas
    async function fetchMealIdeas(ingredient) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals || [];
    }

    // Load meal ideas whenever the ingredient changes
    useEffect(() => {
        if (ingredient) {
            async function loadMealIdeas() {
                const meals = await fetchMealIdeas(ingredient);
                setMeals(meals);
            }
            loadMealIdeas();
        }
    }, [ingredient]);

    return (
        <div>
            <h2>Meal Ideas</h2>
            <ul>
                {meals.map(meal => (
                    <li key={meal.idMeal}>
                        <img src={meal.strMealThumb} alt={meal.strMeal} width={100} />
                        <p>{meal.strMeal}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
