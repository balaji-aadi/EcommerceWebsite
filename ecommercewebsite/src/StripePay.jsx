import React, { useEffect, useState } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'


const KEY = "pk_test_51NVZnMSDNiAhnWgL5eOnSCnV0IHODlkQXvpMCMPZZgvhr6k51jMFpJ8GGXMdpKWOUQ2s1bg7okc6AE90JJ5G8Xc300wMhzdGye"
const StripePay = () => {
  const [stripeToken, setStripeToken] = useState(null)

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
          },{withCredentials:true})
          console.log(res.data)
      }
      catch (err) {
        console.log(err)
      }
    }
    makeRequest();
  }, [stripeToken])



  return (
    <div style={{ width: '100%', height: "100vh", display: 'flex', alignItems: "center", justifyContent: "center" }}>
      <StripeCheckout
        name='Aadi shop'
        image='/logo5.jpeg'
        billingAddress
        shippingAddress
        description='Your total is ₹500'
        amount={50000}
        token={onToken}
        stripeKey={KEY}
      >
        <button
          style={{ backgroundColor: "black", color: "white", "padding": '10px', cursor: 'pointer' }}>
          PayNow
        </button>
      </StripeCheckout>
    </div>
  )
}

export default StripePay
