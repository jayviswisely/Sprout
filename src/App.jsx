import React from 'react'
import { useState, useEffect } from 'react'
import PortfolioSummary from './components/PortfolioSummary'
import AssetForm from './components/AssetForm'
import AssetList from './components/AssetList'

const App = () => {
  const [portfolio, setPortfolio] = useState(() => {
    const savedPortfolio = localStorage.getItem('portfolio')
    return savedPortfolio ? JSON.parse(savedPortfolio) : [];
  });

  useEffect(() => {
    localStorage.setItem('portfolio', JSON.stringify(portfolio))
  }, [portfolio])

  const handleDeleteAsset = (id) => {
    setPortfolio((prevPortfolio) =>
      prevPortfolio.filter((asset) => asset.id !== id)
    );
  };

  const handleEditAsset = (id, newPrice) => {
    setPortfolio((prevPortfolio) =>
      prevPortfolio.map((asset) =>
        asset.id === id
          ? { ...asset, currentPrice: Number(newPrice) }
          : asset
      )
    );
  };

  return (
    <>
      <h1>Your Portfolio:</h1>
      <PortfolioSummary portfolio={portfolio} />
      <AssetForm setPortfolio={setPortfolio} />
      <AssetList
        portfolio={portfolio}
        onDelete={handleDeleteAsset}
        onEdit={handleEditAsset}
      />
    </>
  )
}

export default App