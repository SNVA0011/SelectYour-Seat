import React, { useState } from 'react'
import style from './cartadd.module.css'
import Image from 'next/image'
import CartRouteWay from './CartRouteWay'

const index = ({ Json, Type }) => {
  const [openCart, setCardOpen] = useState(false);

  return (
    <div className={style.ChsaddWrapper}>
      <CartRouteWay Title={'Departure'} Type={Type} Json={Json.slice(0, 3)}
        openCart={openCart}
        setCardOpen={setCardOpen}
      />
      <hr className={style.ChsaddWrapperHr}></hr>
      <CartRouteWay Title={'Return'} Type={Type} Json={Json.slice(3, 6)}
        openCart={openCart}
        setCardOpen={setCardOpen} />
    </div>
  )
}

export default index