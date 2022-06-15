import React from 'react'

const Media = ({url, active, x, y}) => {
  return (
    <div>
        <img 
            src={url.image} 
            alt="media" 
            className={active && "is_active"}
            style={{transform:`translate(${x}px,${y}px)`}} 
        />
    </div>
  )
}

export default Media