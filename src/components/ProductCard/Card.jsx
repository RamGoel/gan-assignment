import React from 'react'
import './styles.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/appSlice'
function Card({ data }) {
  const cart = useSelector(state => state.app.cart)
  const dispatch = useDispatch()
  return (
    <div className='card'>
      <img src={data.image} alt='' width={300} />
      <div className="content">

        <p className='title'>{data.title}</p>
        <p className='desc'>{data.description}</p>
        <p className='price'>{data.price}₹</p>
        <div className="row">

          <div className='cardRow'>
            <p>{data.rating.rating} </p>{' '}
            <p>({data.rating.count}) ★	</p>
          </div>
          {
            cart[data.id]
              ? <img
                onClick={() => dispatch(removeFromCart(data.id))}
                src="https://static.thenounproject.com/png/3164967-200.png"
                className='card-icon' alt="" />
              : <img
                onClick={() => dispatch(addToCart(data))}
                src="https://www.iconpacks.net/icons/2/free-add-to-cart-icon-3046-thumb.png"
                className='card-icon' alt="" />
          }
        </div>
      </div>
    </div>
  )
}

export default Card