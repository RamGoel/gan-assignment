import React from 'react'
import './styles.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function Header() {
    const cart = useSelector(state => state.app.cart)
    const navigate = useNavigate()
    return (
        <div className="header">
            <img src='https://media.istockphoto.com/id/1208607673/vector/sweet-bakery-logotype-template-badge-label.jpg?s=612x612&w=0&k=20&c=slMWF3bWCezcVMKzaubKfYa8Vni8n9P5TS3-N2twjsY=' alt="" />
            <div className='cart-div' onClick={() =>navigate('/cart')}>
                <img src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png" alt="" />
                <p>{Object.values(cart).length}</p>
            </div>
        </div>
    )
}

export default Header