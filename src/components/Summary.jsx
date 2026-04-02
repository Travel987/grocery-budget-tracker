function Summary({ budget, totalSpent, remaining }) {
  const spentPercentage = budget > 0 ? (totalSpent / budget) * 100 : 0;
  const cappedPercentage = Math.min(spentPercentage, 100);

  let barClass = "progress-fill";

  if (spentPercentage >= 90) {
    barClass = "progress-fill danger flash";
  } else if (spentPercentage >= 75) {
    barClass = "progress-fill warning";
  }

  return (
    <div className="summary-text">
      <h2>Summary</h2>
      <p>Budget: ${Number(budget).toFixed(2)}</p>
      <p>Total Spent: ${Number(totalSpent).toFixed(2)}</p>
      <p>
        Remaining: {remaining < 0 ? "- " : ""}
        ${Math.abs(remaining).toFixed(2)}
      </p>

      <div className="progress-bar-wrapper">
        <p className="progress-label">Spending Progress</p>
        <div className="progress-bar">
          <div
            className={barClass}
            style={{ width: `${cappedPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Summary;