import React from 'react'
import loader from '../../assets/loader.gif'
function Loader() {
  return (
    <div className='' style={{minHeight:'90vh'}}>
      <img src={loader} alt="" width={'90%'} style={{
        objectFit:'cover',
        margin:'auto'
      }} />
    </div>
  )
}

export default Loader