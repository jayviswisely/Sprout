import React from 'react'
import { useState } from 'react'

const AssetItem = ({ asset, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentPrice, setCurrentPrice] = useState(asset.currentPrice);
  return (
    <div>
      <strong>{asset.name}</strong> ({asset.type}) - 
      Quantity: {asset.quantity}, Buy Price: {asset.buyPrice}, Current Price: {asset.currentPrice}

      <br />

      {isEditing ? (
        <>
          <input
            type="number"
            value={currentPrice}
            onChange={(e) => setCurrentPrice(e.target.value)}
          />
          <button
            onClick={() => {
              onEdit(asset.id, currentPrice);
              setIsEditing(false);
            }}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <span>Current: {asset.currentPrice}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}

      <button onClick={() => onDelete(asset.id)}>Delete</button>
    </div>
  )
}

export default AssetItem