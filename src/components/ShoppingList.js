import React from 'react';

function ShoppingList({ shoppingList }) {
  return (
    <div>
      <h2>Shopping List</h2>
      <ul>
        {shoppingList.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
