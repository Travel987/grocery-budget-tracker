function Summary({ budget, totalSpent, remaining }) {
  return (
    <div className="summary-text">
      <h2>Summary</h2>
      <p>Budget: ${Number(budget).toFixed(2)}</p>
<p>Total Spent: ${Number(totalSpent).toFixed(2)}</p>
      <p>Remaining: {remaining < 0 ? '-' : ''}${Math.abs(remaining).toFixed(2)}</p>
    </div>
  );
}

export default Summary;