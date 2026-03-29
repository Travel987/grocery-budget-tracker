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
        <ul>
          <li>Set a grocery budget</li>
          <li>Add and remove items</li>
          <li>Track total spending</li>
          <li>See remaining balance instantly</li>
        </ul>
      </div>

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

export default Home;