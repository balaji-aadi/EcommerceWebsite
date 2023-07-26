import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import axios from 'axios'

const Products = ({ cat, filters, sort }) => {

  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat} ` : "http://localhost:5000/api/products")
        setProducts(res.data)
      }
      catch (err) {
        console.log(err)
      }
    }
    getProducts();
  }, [cat])


  useEffect(() => {
    cat && setFilterProducts(products.filter(item => Object.entries(filters).every(([key, value]) => item[key].includes(value)))
    )
  }, [products, cat, filters]);


  useEffect(() => {
    if (sort === "newest") {
      setFilterProducts(prev => [...prev].sort((a, b) => a.createdAt - b.createdAt));
    }
    else if (sort === "asc") {
      setFilterProducts(prev => [...prev].sort((a, b) => a.price - b.price));
    }
    else {

      setFilterProducts(prev => [...prev].sort((a, b) => b.price - a.price));

    }
  }, [sort])

  return (
    <div className='product_container'>
      {
        cat

          ? filterProducts.map(item => (
            <ProductItem item={item} key={item.id} />
          ))

          : products.map(item => (
            <ProductItem item={item} key={item.id} />
          ))

      }
    </div>
  )
}

export default Products
