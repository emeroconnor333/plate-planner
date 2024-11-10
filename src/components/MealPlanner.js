import React from 'react';

function MealPlanner({ mealPlan, selectMeal, mealData }) {
  const daysOfWeek = Object.keys(mealPlan);

  return (
    <div className="meal-planner">
      {daysOfWeek.map((day) => (
        <div key={day} className="meal-day">
          <h3>{day}</h3>
          {["breakfast", "lunch", "dinner"].map((mealType) => (
            <div key={mealType} className="meal-type">
              <label>{mealType}</label>
              <select
                onChange={(e) => selectMeal(day, mealType, e.target.value)}
                value={mealPlan[day][mealType] || ""}
              >
                <option value="">Select {mealType.charAt(0).toUpperCase() + mealType.slice(1)}</option>
                {mealData[mealType].map((meal) => (
                  <option key={meal.name} value={meal.name}>
                    {meal.name}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default MealPlanner;
