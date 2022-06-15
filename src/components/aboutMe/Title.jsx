import React from 'react'

const Title = ({item,setActiveIndex, index}) => {
  return (
    <div className='skills_item'
      onMouseEnter={()=>setActiveIndex(index)}
      onMouseLeave={()=>setActiveIndex(-1)}
    >
        <div className="skills_item_title">
            <span>{item.title}</span>
        </div>
    </div>
  )
}

export default Title