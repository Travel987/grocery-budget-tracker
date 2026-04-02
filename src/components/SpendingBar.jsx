function SpendingBar({ budget, totalSpent }) {
  const spentPercentage = budget > 0 ? (totalSpent / budget) * 100 : 0;
  const cappedPercentage = Math.min(spentPercentage, 100);

  let barClass = "progress-fill";

  if (spentPercentage >= 90) {
    barClass = "progress-fill danger flash";
  } else if (spentPercentage >= 75) {
    barClass = "progress-fill warning";
  }

  return (
    <div className="progress-bar-wrapper">
      <p className="progress-label">Spending Progress</p>

      <div className="progress-bar">
        <div
          className={barClass}
          style={{ width: `${cappedPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default SpendingBar;