import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';


const ProductItem = ({ item }) => {

    return (
        <div className='productItem_container'>
            <img src={`../upload/${item.img}`} alt="" className='product_img' />

            <div className="circle"></div>

            <div className="productItem_info">
                <div className="productItem_icons">
                    <Link to={'/cart'}>
                        <ShoppingCartOutlinedIcon />
                    </Link>
                </div>

                <div className="productItem_icons">
                    <Link to={`/product/${item._id}`}>
                        <SearchOutlinedIcon />
                    </Link>
                </div>

                <div className="productItem_icons">
                    <Link to={'/cart'}>
                        <FavoriteBorderOutlinedIcon />
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default ProductItem
