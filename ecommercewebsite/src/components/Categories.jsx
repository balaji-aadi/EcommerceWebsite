import React from 'react'
import { categories } from '../data'
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <div className='cat_container'>
      {categories.map(item => (
        <CategoryItem item={item} key={item.id}/>
      ) )}
    </div>
  )
}

export default Categories
