import React from 'react'

const AssetItem = ({ asset }) => {
  return (
    <div>
      {asset.name} - {asset.type} - (details coming soon)
    </div>
  )
}

export default AssetItem