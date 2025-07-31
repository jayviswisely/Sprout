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

  return (
    <>
      <h1>Your Portfolio:</h1>
      <PortfolioSummary portfolio={portfolio} />
      <AssetForm setPortfolio={setPortfolio} />
      <AssetList portfolio={portfolio} />
    </>
  )
}

export default App