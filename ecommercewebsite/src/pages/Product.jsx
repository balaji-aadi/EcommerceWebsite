import React, { useEffect, useState } from 'react'
// import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import { addProduct} from '../Redux/cartRedux'
import { useDispatch, useSelector } from 'react-redux'


const Product = () => {
    const location = useLocation();
    const id = location.pathname.split('/')[2]

    const [product, setProduct] = useState({});
    const [productQuantity , setProductQuantity] = useState(1);
    const [color , setColor] = useState();
    const [size , setSize] = useState();
    const dispatch = useDispatch()

    const currentUser = useSelector(state => state.user.currentUser)


    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/products/find/' + id)
                setProduct(res.data);
            }
            catch (err) {
                console.log(err);
            }
        }
        getProduct();
    }, [id])



    const handleQuantity = (type) => {
        if(type === 'desc'){
            productQuantity > 1 &&  setProductQuantity(productQuantity - 1)
        }
        else{
            setProductQuantity(productQuantity + 1)
        }
    }

    // Add to cart

    const handleClick = () => {
        dispatch((addProduct({...product,productQuantity,color, size})))
    }

    return (
        <div className='productPage_container'>
            <Navbar />
            <div className="productPage_wrapper">
                <div className='productPage_imgContainer'>
                    <img className='productPage_img' src={`../upload/${product.img}`} alt="" />
                </div>
                <div className='productPage_infoContainer'>
                    <h1 className='productPage_title'>{product.title}  </h1>
                    <p className='productPage_desc'>{product.desc} </p>

                    <span className='productPage_price'>₹ {product.price} </span>

                    <div className='productPage_filterContainer'>
                        <div className='productPage_filter'>
                            <span className='productPage_filterTitle'>Color</span>
                            <select onChange={(e) => setColor(e.target.value)}>
                                {product.color?.map((c) => (
                                    <option key={c}>{c}</option>
                                ))}
                            </select>
                        </div>
                        <div className='productPage_filter'>
                            <span className='productPage_filterTitle'>Size</span>
                            <select onChange={(e) => setSize(e.target.value)} > 
                                {product.size?.map((s) => (
                                    <option key={s}>{s}</option>
                                ))}

                            </select>
                        </div>
                    </div>
                    <div className='productPage_addContainer'>
                        <div className='productPage_amountcontainer'>

                            <RemoveIcon onClick = {() => handleQuantity('desc')}  style={{ cursor: "pointer" }}/>

                            <span className='productPage_amount'> {productQuantity} </span> 

                            <AddIcon onClick = {() => handleQuantity('inc')} style={{ cursor: "pointer" }} />

                        </div>
                        {currentUser ? <button className='productPage_btn' onClick={handleClick}>ADD TO CART</button>: <p style={{fontSize: "1.2rem"}}>To add to cart, <Link to={'/login'} style={{textDecoration: "none"}}>login</Link> </p>}
                    </div>
                </div>
            </div>

            <Newsletter />
            <Footer />
        </div>
    )
}

export default Product
