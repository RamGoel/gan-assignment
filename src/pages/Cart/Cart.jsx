import React from 'react'
import './styles.css'
import { useSelector } from 'react-redux'

import CartCard from '../../components/CartCard/CartCard'
import EmptyCard from '../../components/EmptyCard/EmptyCard'
import Overlay from '../../components/CartOverlay/Overlay'
function Cart() {
    const cart = useSelector(state => state.app.cart)
    return (
        <div className='cart-page'>
            <div className='cart-section'>
                {Object.values(cart).length ? <div><h2>Items in your cart</h2>
                    <div className='cart-items-container'>
                        {
                            Object.values(cart).map(e => {
                                return <CartCard key={e.id} data={e} qtValue={1} qtModifier={() => console.log(1)} />
                            })
                        }
                    </div>


                    {
                        (Object.values(cart).length)
                            ? <Overlay text={'Checkout'} path={'/checkout'} />
                            : null
                    }

                </div> : <EmptyCard />}

            </div>

        </div>
    )
}

export default Cart