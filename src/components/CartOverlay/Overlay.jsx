import React from 'react'
import './styles.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export default function Overlay({ text, path}) {
    const navigate=useNavigate()
    const cartPrice=useSelector(state=>state.app.totalCartAmount)
    const cartQuantity=useSelector(state=>state.app.totalCartQuantity)
    return (
        <div className='checkout-overlay'>
            <div className='overlay-content'>

            <div>
                <p>Items: {cartQuantity}</p><pre>   </pre>
                <p>Amount: {cartPrice}</p>
            </div>
            <div>
                <button onClick={()=>navigate(`${path}`)}>
                    {text}
                </button>
            </div>
            </div>
        </div>
    )
}
