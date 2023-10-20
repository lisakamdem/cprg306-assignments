"use client";

import { useState, useEffect } from "react";


async function fetchMealIdea(ingredient) {
    console.log(ingredient);
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    if (data && data.mealIdea) {
        setMeals(data.mealIdea);
    } else {
        setMeals([]);}
}

export default function MealIdea({ingredient}){
    const [mealIdea, setMealIdea] = useState([]);

    async function loadMeals() {
        try{
            const data = await fetchMealIdea(ingredient);
            setMealIdea(data.mealIdea);
        } catch (error) {
            console.log(error);
        }
    }

   useEffect(() => {
        loadMeals();
    }, [ingredient]);

    return (
        <div>
            <h2 className="text-2xl font-bold m-2 text-purple-500">Meal Idea for {ingredient}</h2>
            <ul>
                {mealIdea.map((meal) => (
                    <li key={meal.idMeal} > {meal.strMeal}</li>
                ))}
            </ul>            
        </div>
    );
}