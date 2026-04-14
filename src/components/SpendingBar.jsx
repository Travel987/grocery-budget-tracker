function SpendingBar({ budget, totalSpent }) {
  if (budget <= 0) return null;

  const percentUsed = Math.min((totalSpent / budget) * 100, 100);

  let barColor = "#4caf50";
  if (percentUsed >= 70) barColor = "#f4b400";
  if (percentUsed >= 100) barColor = "#d93025";

  return (
    <div>
      <h3>Spending Progress</h3>

      <div className="bar-container">
        <div
          key={percentUsed}
          className={`bar-fill ${
            percentUsed >= 100 ? "danger" : percentUsed >= 70 ? "warning" : ""
          }`}
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