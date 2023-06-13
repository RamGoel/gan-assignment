import React, { useEffect, useState } from 'react'
import CheckoutLoader from '../../components/CheckoutLoader/CheckoutLoader'
import './styles.css'
function Checkout() {
    const [isLoaded, setLoaded] = useState(false)
    useEffect(e => {
        setTimeout(() => {
            setLoaded(true)
        }, 3000)
    }, [])
    return (
        isLoaded ? <div className='checkout-page'>
            <h3>Success! Your order has been placed</h3>
        </div> : <CheckoutLoader />
    )
}

export default Checkout