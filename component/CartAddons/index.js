import React, { useState } from 'react'
import style from './cartadd.module.css'
import Image from 'next/image'
import CartRouteWay from './CartRouteWay'

const index = ({ Json, Type }) => {
  const [openCartTyp, setCardOpenTyp] = useState('Departure');

  return (
    <div className={style.ChsaddWrapper}>

      <div className={`${style.TabCrtButtonWrp}`}>
        <div className={`${style.TabAddonKeySlide} ${openCartTyp === 'Departure' ? style.Dep : style.Rtr}`}></div>
        <button className={`btn w-50 ${style.TabCrtButton} ${openCartTyp === 'Departure' && style.Active}`} onClick={() => setCardOpenTyp('Departure')}>
          Departure
        </button>
        <button className={`btn w-50 ${style.TabCrtButton} ${openCartTyp === 'Return' && style.Active}`} onClick={() => setCardOpenTyp('Return')}>
          Return
        </button>
      </div>

      <CartRouteWay Title={'Departure'} Type={Type} Json={Json.slice(0, 3)}
        openCartTyp={openCartTyp}
        setCardOpenTyp={setCardOpenTyp}
      />
      <hr className={style.ChsaddWrapperHr}></hr>
      <CartRouteWay Title={'Return'} Type={Type} Json={Json.slice(3, 6)}
        openCartTyp={openCartTyp}
        setCardOpenTyp={setCardOpenTyp}
      />
    </div>
  )
}

export default index