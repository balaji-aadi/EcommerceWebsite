import React from 'react'
import { Link } from 'react-router-dom'

const CategoryItem = ({item}) => {
  return (
    <div className='catItem_container'>
      <Link to={`/products/${item.cat}`}>
      <img src= {item.img} alt="" className='catItem_img'/>
      <div className="catItem_info">
        <h1 className="catItem_title">{item.title} </h1>
        <button className='catItem_btn'>SHOP NOW</button>
      </div>
      </Link>
    </div>
    
  )
}

export default CategoryItem
