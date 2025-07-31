import React from 'react'

const AssetItem = ({ asset }) => {
  return (
    <div>
      <strong>{asset.name}</strong> ({asset.type}) - 
      Quantity: {asset.quantity}, Buy Price: {asset.buyPrice}, Current Price: {asset.currentPrice}
    </div>
  )
}

export default AssetItem