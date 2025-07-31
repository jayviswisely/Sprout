import React from 'react'
import { useState } from 'react'

const AssetForm = ({ setPortfolio }) => {
  const [assetName, setAssetName] = useState('')
  const [assetType, setAssetType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [buyPrice, setBuyPrice] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newAsset = {
      id: Date.now(),
      name: assetName,
      type: assetType,
      quantity: parseFloat(quantity),
      buyPrice: parseFloat(buyPrice),
      currentPrice: parseFloat(currentPrice),
    };

    // Add to portfolio
    setPortfolio((prevPortfolio) => [...prevPortfolio, newAsset]);

    // Clear form
    setAssetName("");
    setAssetType("");
    setQuantity("");
    setBuyPrice("");
    setCurrentPrice("");
  }

  return (
    <div>
      <h2>Add an Asset</h2>
      <form onSubmit={handleSubmit}>
        <label>Asset Name: </label>
        <input
          type="text"
          value={assetName}
          onChange={(e) => setAssetName(e.target.value)}
          placeholder='Enter asset name'
        />
        <label>Asset Type: </label>
        <input
          type="text"
          placeholder="Asset Type"
          value={assetType}
          onChange={(e) => setAssetType(e.target.value)}
        />
        <label>Asset Quantity: </label>
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <label>Buy Price: </label>
        <input
          type="number"
          placeholder="Buy Price"
          value={buyPrice}
          onChange={(e) => setBuyPrice(e.target.value)}
        />
        <label>Current Price: </label>
        <input
          type="number"
          placeholder="Current Price"
          value={currentPrice}
          onChange={(e) => setCurrentPrice(e.target.value)}
        />
        <button type='submit'>Add Asset</button>
      </form>
    </div>
  )
}

export default AssetForm