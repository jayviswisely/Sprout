import React from 'react'
import AssetItem from './AssetItem'

const AssetList = ({ portfolio }) => {
  return (
    <div>
      <h2>Asset List</h2>
      {portfolio.length === 0 ? (
        <p>No assets yet</p>
      ) : (
        portfolio.map((asset) => (
          <AssetItem key={asset.id} asset={asset} />
        ))
      )}
    </div>
  )
}

export default AssetList