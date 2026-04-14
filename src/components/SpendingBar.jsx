function SpendingBar({ budget, totalSpent }) {
  if (budget <= 0) return null;

  const percentUsed = Math.min((totalSpent / budget) * 100, 100);

  let barColor = "#4caf50";
  if (percentUsed >= 75) barColor = "#f4b400";
  if (percentUsed >= 100) barColor = "#d93025";

  return (
    <div>
      <h3>Spending Progress</h3>
      <div className="bar-container">
        <div
          className="bar-fill"
          style={{
            width: `${percentUsed}%`,
            backgroundColor: barColor,
          }}
        ></div>
      </div>
      <p>{percentUsed.toFixed(0)}% of budget used</p>
    </div>
  );
}

export default SpendingBar;