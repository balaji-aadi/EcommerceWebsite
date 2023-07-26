import React, { useEffect, useState } from 'react'
// import Announcement from '../components/Announcement'
// import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'
import CloseIcon from '@mui/icons-material/Close';
import {  removeProduct } from '../Redux/cartRedux';


const KEY = "pk_test_51NVZnMSDNiAhnWgL5eOnSCnV0IHODlkQXvpMCMPZZgvhr6k51jMFpJ8GGXMdpKWOUQ2s1bg7okc6AE90JJ5G8Xc300wMhzdGye"
const Cart = () => {

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const handleRemove = (productId) => {
        dispatch(removeProduct(productId))
    }

    // STRIPE IMPELATATION
    const [stripeToken, setStripeToken] = useState(null)
    const discount = Math.round(cart.total / 10)
    const shippingDiscount = 1 - 100



    const onToken = (token) => {
        setStripeToken(token)
    }


    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post('http://localhost:5000/api/checkout/payment',
                    {
                        tokenId: stripeToken.id,
                        amount: 50000,
                    }, { withCredentials: true })
                console.log(res.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        makeRequest();
    }, [stripeToken])


    return (
        <div className='cart_container'>
            {/* <Navbar /> */}
            <div className='cart_wrapper'>
                <h1 className='cart_title'>YOUR BAG</h1>

                <div className="cart_top">
                    <Link to={'/'}><button className='cart_topbutton'>CONTINUE SHOPPING</button></Link>
                    <div className="cart_topTexts">
                        <span className='cart_topText'>Shopping Bag ({cart?.quantity})</span>
                        <span className='cart_topText'>Your Wishlist (0) </span>
                    </div>
                    <StripeCheckout
                        name='Aadi shop'
                        image='/logo2.png'
                        billingAddress
                        shippingAddress
                        description='Your total is ₹500'
                        amount={50000}
                        token={onToken}
                        stripeKey={KEY}
                    >
                        <button className='cart_topbutton' >CHECKOUT NOW</button>
                    </StripeCheckout>
                </div>



                <div className="cart_bottom" >
                    <div className="cart_info">
                        {cart.products.length === 0 && <p className='cart_info_p'>"Your Cart is Empty" <span style={{ color: "red" }}>🧡 Shop Now</span></p>}

                        {cart.products.map(product => (
                            <div className="cart_product">
                                <div className="cart_productDetail">
                                    <img className="cart_productDetail_img" src={`../upload/${product.img}`} alt="" />
                                    <div className="cart_details">
                                        <span className="cart_productName"><b>Product : </b> {product.title} </span>
                                        <span className="cart_productId"><b>Id : </b> {product._id} </span>
                                        <div className="cart_productColor" style={{ backgroundColor: `${product.color}` }} />

                                        <span className="cart_productSize"><b>Size : </b> {product.size} </span>
                                    </div>

                                </div>

                                <div className="cart_priceDetail">
                                    <div className="productAmountContainer">
                                        {/* <AddIcon /> */} <span>Qty</span>
                                        <span className='productAmount'> {product.productQuantity} </span>
                                        {/* <RemoveIcon /> */}
                                    </div>
                                    <div className="productPrice">
                                        ₹ {product.price * product.productQuantity}
                                    </div>
                                </div>
                                <span onClick={() => handleRemove(product._id)} style={{cursor:"pointer",height:"20px"}}><CloseIcon /></span>
                            </div>
                        ))
                        }

                    </div>


                    <div className="cart_summary">
                        <h1 className="cart_summaryTitle">ORDER SUMMARY </h1>
                        <div className="cart_summaryItem">
                            <span className='cart_summaryItemText'>Total MRP</span>
                            <span className='cart_summaryItemText'>₹ {cart.total} </span>
                        </div>
                        <div className="cart_summaryItem">
                            <span className='cart_summaryItemText'>Discount on MRP </span>
                            <span className='cart_summaryItemText'>₹ -{cart.total === 0 ? 0 : discount} </span>
                        </div>
                        <div className="cart_summaryItem">
                            <span className='cart_summaryItemText'>Shipping Discount</span>
                            <span className='cart_summaryItemText'>₹ {cart.total === 0 ? 0 : shippingDiscount} </span>
                        </div>

                        <div className="cart_summaryItem active">
                            <span className='cart_summaryItemText'>Total</span>
                            <span className='cart_summaryItemText'>₹ {cart.total === 0 ? 0 : cart.total - Math.abs(discount - shippingDiscount)} </span>
                        </div>

                        <StripeCheckout
                            name='Aadi shop'
                            image='/logo2.png'
                            billingAddress
                            shippingAddress
                            description={`Your total is ${cart.total}`}
                            amount={cart.total * 100}
                            token={onToken}
                            stripeKey={KEY}
                        >

                            <button className='cart_btn'>CHECKOUT NOW</button>
                        </StripeCheckout>


                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart
