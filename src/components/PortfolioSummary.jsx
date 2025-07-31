import React from 'react'

const PortfolioSummary = ({ portfolio }) => {
  const totalValue = portfolio.reduce(
    (sum, asset) => sum + asset.quantity * asset.currentPrice,
    0
  );

  const totalGainLoss = portfolio.reduce(
    (sum, asset) => sum + (asset.currentPrice - asset.buyPrice) * asset.quantity,
    0
  );

  const gainLossPercent =
    totalValue > 0 ? ((totalGainLoss / (totalValue - totalGainLoss)) * 100).toFixed(2) : 0;

  return (
    <div>
      <h2>Portfolio Summary</h2>
      <p>Total Value: {totalValue.toLocaleString()}</p>
      <p>Total Gain/Loss: {totalGainLoss.toLocaleString()} ({gainLossPercent}%)</p>
    </div>
  )
}

export default PortfolioSummary