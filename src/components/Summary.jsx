function Summary({ budget, totalSpent, remaining }) {
  return (
    <div>
      <h2>Budget Summary</h2>
      <p>Budget: ${Number(budget).toFixed(2)}</p>
      <p>Total Spent: ${Number(totalSpent).toFixed(2)}</p>
      <p>Remaining: ${Number(remaining).toFixed(2)}</p>

      {remaining < 0 ? (
        <p className="error-text">You are over budget.</p>
      ) : (
        <p className="success-text">You are staying within your budget.</p>
      )}
    </div>
  );
}

export default Summary;