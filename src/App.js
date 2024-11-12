import React, { useState } from 'react';
import MealPlanner from './components/MealPlanner';
import ShoppingList from './components/ShoppingList';
import './App.css';

const mealData = {
  breakfast: [
    { name: "Pancakes", ingredients: ["Flour", "Eggs", "Milk"] },
    { name: "Avocado Toast", ingredients: ["Avocado", "Bread"] },
    { name: "Yoghurt Bowl", ingredients: ["Yoghurt", "Granola", "Berries"] },
  ],
  lunch: [
    { name: "Salad", ingredients: ["Lettuce", "Tomato", "Cucumber"] },
    { name: "Soup", ingredients: ["Carrot", "Potato", "Onion"] },
    { name: "Chicken Wrap", ingredients: ["Chicken", "Tortilla", "Lettuce"] },
  ],
  dinner: [
    { name: "Curry", ingredients: ["Chicken", "Coconut Milk", "Spices"] },
    { name: "Shepherd's Pie", ingredients: ["Potato", "Beef", "Carrot"] },
    { name: "Fajitas", ingredients: ["Tortilla", "Bell Peppers", "Chicken"] },
  ],
};

const initialMealPlan = {
  Monday: { breakfast: null, lunch: null, dinner: null },
  Tuesday: { breakfast: null, lunch: null, dinner: null },
  Wednesday: { breakfast: null, lunch: null, dinner: null },
  Thursday: { breakfast: null, lunch: null, dinner: null },
  Friday: { breakfast: null, lunch: null, dinner: null },
  Saturday: { breakfast: null, lunch: null, dinner: null },
  Sunday: { breakfast: null, lunch: null, dinner: null },
};

function App() {
  const [mealPlan, setMealPlan] = useState(initialMealPlan);
  const [shoppingList, setShoppingList] = useState([]);

  const selectMeal = (day, mealType, mealName) => {
    const selectedMeal = mealData[mealType].find((meal) => meal.name === mealName);
    if (!selectedMeal) return;

    setMealPlan((prevPlan) => ({
      ...prevPlan,
      [day]: { ...prevPlan[day], [mealType]: mealName }
    }));

    setShoppingList((prevList) => {
      const newIngredients = selectedMeal.ingredients.filter(
        (ingredient) => !prevList.includes(ingredient)
      );
      return [...prevList, ...newIngredients];
    });
  };

  return (
    <div className="container">
      <header>
        <h1>Plate Planner</h1>
        <p>made by emer o’connor</p>
      </header>
      <div className="main-content">
          <MealPlanner mealPlan={mealPlan} mealData={mealData} selectMeal={selectMeal} />
        <div className="shopping-list">
          <ShoppingList shoppingList={shoppingList} />
        </div>
      </div>
    </div>
  );
}

export default App;
