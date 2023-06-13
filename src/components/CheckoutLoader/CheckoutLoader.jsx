import React from 'react'
import './styles.css'
import loaderImage from '../../assets/200w.gif'
function CheckoutLoader() {

    return (
        <div className='loader-bg'>
            <img src={loaderImage} alt="" />
        </div>
    )
}

export default CheckoutLoader