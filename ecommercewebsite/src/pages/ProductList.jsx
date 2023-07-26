import React, { useState } from 'react'
import Navbar from '../components/Navbar'
// import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'

const ProductList = () => {

    const location = useLocation();
    const cat = location.pathname.split('/')[2]
    const [filters, setFilter] = useState({})
    const [sort, setSort] = useState("newest")

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilter({
            ...filters,
            [e.target.name] : value,
        })
    }


    return (
        <div className='productlist_container'>
            <Navbar />
            <h1 className="productslist_title">{cat}</h1>
            <div className="filterContainer">
                <div className="filter">
                    <div className="filterText">Filter Products :</div>
                    <select name='color' onChange={handleFilters}>
                        <option disabled>Color</option>
                        <option >white</option>
                        <option >black</option>
                        <option >red</option>
                        <option >blue</option>
                        <option >green</option>
                        <option >orange</option>
                    </select>
                    <select name='size' onChange={handleFilters}>
                        <option disabled >Size</option>
                        <option >Xs</option>
                        <option >S</option>
                        <option >M</option>
                        <option >L</option>
                        <option >XL</option>
                    </select>
                </div>
                <div className="filter">
                    <div className="filterText">Sort Products :</div>
                    <select onChange={e => setSort(e.target.value)}>
                        <option value={'newest'} >Newest</option>
                        <option value={'asc'} >Price (low to high)</option>
                        <option value={'desc'} >Price (high to low) </option>
                    </select>
                </div>
            </div>
            <Products cat = {cat} filters = {filters} sort = {sort} />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default ProductList
