import { useState } from "react";
import BudgetForm from "../components/BudgetForm";
import AddItemForm from "../components/AddItemForm";
import GroceryList from "../components/GroceryList";
import Summary from "../components/Summary";
import SpendingBar from "../components/SpendingBar";

function Home({
  items,
  addItem,
  deleteItem,
  budget,
  setBudget,
  totalSpent,
  remaining,
  resetAll,
}) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="app-container">
      <div className="card">
        <h1>Grocery Budget Tracker</h1>
        <p>
          This app helps you manage your grocery spending by setting a budget,
          adding items, and tracking how much you've spent.
        </p>
      </div>

      <div className="card">
        <h2>Features</h2>
        <ul className="feature-links">
          <li>
            <a href="#budget-section">Set a grocery budget</a>
          </li>
          <li>
            <a href="#add-item-section">Add grocery items</a>
          </li>
          <li>
            <a href="#grocery-list-section">Filter and remove items</a>
          </li>
          <li>
            <a href="#summary-section">Track spending and remaining balance</a>
          </li>
        </ul>
      </div>

      <div className="card" id="budget-section">
        <BudgetForm setBudget={setBudget} />
      </div>

      <div className="card" id="add-item-section">
        <AddItemForm addItem={addItem} />
      </div>

      <div className="card" id="grocery-list-section">
        <h2>Filter by Category</h2>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Meat">Meat</option>
          <option value="Pantry">Pantry</option>
          <option value="Snacks">Snacks</option>
          <option value="Drinks">Drinks</option>
          <option value="Frozen">Frozen</option>
        </select>

        <GroceryList items={filteredItems} deleteItem={deleteItem} />
      </div>

      <div className="card" id="summary-section">
        <Summary
          budget={budget}
          totalSpent={totalSpent}
          remaining={remaining}
        />
        <SpendingBar budget={budget} totalSpent={totalSpent} />
      </div>

      <div className="card">
        <button onClick={resetAll}>Reset Everything</button>
      </div>
    </div>
  );
}

export default Home;