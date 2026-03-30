import { useState } from "react";

function BudgetForm({ setBudget }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!input) {
      setError("Please enter a budget.");
      return;
    }

    if (Number(input) <= 0) {
      setError("Budget must be greater than 0.");
      return;
    }

    setBudget(Number(input));
    setInput("");
    setError("");
  }
// Handles budget input and validation
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <span>Set Your Budget</span>

        <input
          type="number"
          placeholder="Enter budget"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit">Set Budget</button>
      </div>

      {error && <p className="error-text">{error}</p>}
    </form>
  );
}

export default BudgetForm;