import { useState } from "react";
import "./App.css";
import BudgetForm from "./components/BudgetForm";
import AddItemForm from "./components/AddItemForm";
import GroceryList from "./components/GroceryList";
import Summary from "./components/Summary";

function App() {
  const [budget, setBudget] = useState(0);
  const [items, setItems] = useState([]);

  const totalSpent = items.reduce((total, item) => total + item.price, 0);
  const remaining = budget - totalSpent;

  function addItem(newItem) {
    setItems((currentItems) => [...currentItems, newItem]);
  }

  function deleteItem(id) {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  }

  return (
    <div className="app-container">
      <h1>Grocery Budget Tracker</h1>

      <div className="card">
        <BudgetForm setBudget={setBudget} />
      </div>

      <div className="card">
        <AddItemForm addItem={addItem} />
      </div>

      <div className="card">
        <GroceryList items={items} deleteItem={deleteItem} />
      </div>

      <div className="card">
        <Summary
          budget={budget}
          totalSpent={totalSpent}
          remaining={remaining}
        />
      </div>
    </div>
  );
}

export default App;