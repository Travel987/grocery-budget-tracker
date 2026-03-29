function Summary({ budget, totalSpent, remaining }) {
  return (
    <div className="summary-text">
      <h2>Summary</h2>
      <p>Budget: ${budget}</p>
      <p>Total Spent: ${totalSpent}</p>
      <p>Remaining: ${remaining}</p>
    </div>
  );
}

export default Summary;