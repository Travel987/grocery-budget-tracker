import { useState } from "react";

function BudgetForm({ setBudget }) {
  const [inputBudget, setInputBudget] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // ✅ Validation
    if (!inputBudget || Number(inputBudget) <= 0) {
      alert("Enter a valid budget");
      return;
    }

    setBudget(Number(inputBudget));

    // reset input
    setInputBudget("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Set Your Budget</h2>

      <input
        type="number"
        value={inputBudget}
        onChange={(e) => setInputBudget(e.target.value)}
        placeholder="Enter budget"
      />

      <button type="submit">Set Budget</button>
    </form>
  );
}

export default BudgetForm;