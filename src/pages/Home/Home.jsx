import React, { useEffect, useState } from 'react'
import { bakeryItems } from '../../constants/products'
import Card from '../../components/ProductCard/Card'
import './styles.css'
import Header from '../../components/Header/Header'
import { useSelector } from 'react-redux'
import Overlay from '../../components/CartOverlay/Overlay'
import Loader from '../../components/Loader/Loader'
function Home() {
  const cart = useSelector(state => state.app.cart)
  const [isLoaded, setLoaded] = useState(false)
  useEffect(e => {
    setTimeout(()=>{

      setLoaded(true)
    },2000)
  }, [])
  return (
    isLoaded ? <div>
      <Header />
      <div className="page-top">
        <h2>Our Products</h2>
      </div>
      <div className='cardBox'>
        {
          bakeryItems.map(item => {
            return <Card key={item.id} data={item} />
          })
        }
      </div>
      {
        (Object.values(cart).length)
          ? <Overlay text={'Proceed to cart'} path={'/cart'} />
          : null
      }
    </div> : <Loader />
  )
}

export default Home