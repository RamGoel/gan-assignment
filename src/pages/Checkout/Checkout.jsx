import React, { useEffect, useState } from 'react'
import CheckoutLoader from '../../components/CheckoutLoader/CheckoutLoader'
import './styles.css'
import { useSelector } from 'react-redux'
function Checkout() {
    const [isLoaded, setLoaded] = useState(false)
    const cart=useSelector(state=>state.app.cart)
    useEffect(e => {
        setTimeout(() => {
            setLoaded(true)
            console.log(Object.values(cart))
        }, 3000)
    }, [])
    return (
        isLoaded ? <div className='checkout-page'>
            <h3>Success! Your order has been placed</h3>
        </div> : <CheckoutLoader />
    )
}

export default Checkout