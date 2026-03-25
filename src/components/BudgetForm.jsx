import { useState } from "react";

function BudgetForm({ setBudget }) {
  const [inputBudget, setInputBudget] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!inputBudget || Number(inputBudget) <= 0) {
      alert("Enter a valid budget");
      return;
    }

    setBudget(Number(inputBudget));
    setInputBudget("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Set Your Budget</h2>

      <div className="form-row">
        <input
          type="number"
          value={inputBudget}
          onChange={(e) => setInputBudget(e.target.value)}
          placeholder="Enter budget"
        />

        <button type="submit">Set Budget</button>
      </div>
    </form>
  );
}

export default BudgetForm;
