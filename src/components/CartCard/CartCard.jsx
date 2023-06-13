import React from 'react'
import { useDispatch} from 'react-redux'
import './styles.css'
import { removeFromCart } from '../../redux/appSlice'
function CartCard({data}) {
    const dispatch = useDispatch()
    return (
        <div key={data.id} className={'cart-card'}>
            <div>
                <img src={data.image} alt="" />
            </div>
            <div className='card-content'>
                <p className='title'>
                    {data.title.length > 50
                        ? `${data.title.substring(0, 30)}...`
                        : data.title
                    }
                </p>
                <div className="price-box">

                    <p className='price'>₹{data.price}</p>
                    
                    <div className='card-action'>


                        <i className="fa fa-trash" onClick={() => dispatch(removeFromCart(data.id))}></i>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CartCard