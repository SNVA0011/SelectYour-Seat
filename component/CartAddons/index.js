import React from 'react'
import style from './cartadd.module.css'
import Image from 'next/image'
import CartRouteWay from './CartRouteWay'

const index = ({ Json, Type }) => {

  return (
    <div className={style.ChsaddWrapper}>

      <CartRouteWay Title={'Departure'} Type={Type} Json={Json.slice(0, 3)} />
      <CartRouteWay Title={'Return'} Type={Type} Json={Json.slice(3, 6)} />

    </div>
  )
}

export default index