import React from 'react'
import style from './seattyp.module.css';

const index = () => {
  return (
    <aside className={style.SeatTypeName}>
      <ul>
        <li className='d-flex align-items-center'><label className={style.ClrGreen}></label> Free</li>
        <li className='d-flex align-items-center'><label className={style.ClrLightBl}></label> ₹ 200 - ₹600</li>
        <li className='d-flex align-items-center'><label className={style.ClrDarkBl}></label> ₹ 700 - ₹1400</li>
        <li className='d-flex align-items-center'><label className={style.ClrGray}></label> Occupied</li>
      </ul>
      <p>Disclaimer : Seat allotment is the solo prerogative of the airline and can’t be guaranteed by tavomint.com</p>
    </aside>
  )
}

export default index