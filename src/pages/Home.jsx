import BudgetForm from "../components/BudgetForm";
import AddItemForm from "../components/AddItemForm";
import GroceryList from "../components/GroceryList";
import Summary from "../components/Summary";

function Home({
  items,
  addItem,
  deleteItem,
  budget,
  setBudget,
  totalSpent,
  remaining,
}) {
  return (
    <div className="app-container">
      <div className="card">
        <h1>Grocery Budget Tracker</h1>
        <p>
          This app helps you manage your grocery spending by setting a budget,
          adding items, and tracking how much you&apos;ve spent.
        </p>
      </div>

      <div className="card">
        <h2>Features</h2>
        <ul className="feature-links">
          <li>
            <a href="#budget-section">Set a grocery budget</a>
          </li>
          <li>
            <a href="#grocery-list-section">Add and remove items</a>
          </li>
          <li>
            <a href="#summary-section">Track total spending</a>
          </li>
          <li>
            <a href="#summary-section">See remaining balance instantly</a>
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
        <GroceryList items={items} deleteItem={deleteItem} />
      </div>

      <div className="card" id="summary-section">
        <Summary
          budget={budget}
          totalSpent={totalSpent}
          remaining={remaining}
        />
      </div>
    </div>
  );
}

export default Home;