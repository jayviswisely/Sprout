import React from 'react'

const AssetItem = ({ asset, onDelete }) => {
  return (
    <div>
      <strong>{asset.name}</strong> ({asset.type}) - 
      Quantity: {asset.quantity}, Buy Price: {asset.buyPrice}, Current Price: {asset.currentPrice}
      <br />
      <button onClick={() => onDelete(asset.id)}>Delete</button>
    </div>
  )
}

export default AssetItem