import React, { useState } from 'react'
import style from './chsaddon.module.css'
import Image from 'next/image'

const index = ({ Json, Type }) => {
    const [selected, setSelected] = useState({});

    const selectBtn = (val) => {
        setSelected(() => ({
            ...selected,
            [val]: !selected[val]
        }))
    }

    return (
        <div className={style.ChsaddWrapper}>
            <ul className={style.ChsaddUl}>
                {Json && Json.map((item, index) => {
                    return (
                        <li className={`${selected[`${index}`] ? style.Active : ""}`}>
                            <div className='d-flex align-items-start align-items-sm-center'>
                                <div className={style.ChsaddImg}>
                                    <div className={style.ChsaddImgInner}>
                                        {Type == 'AddBaggage' && <Image
                                            src={`/images/addon/suitcase-baggage.png`}
                                            alt={item.title}
                                            fill={true}
                                            layout={'fill'}
                                            objectFit={'cover'}
                                        />}

                                        {Type == 'AddMeals' && <Image
                                            src={`/images/addon/${item.image}`}
                                            alt={item.title}
                                            fill={true}
                                            layout={'fill'}
                                            objectFit={'cover'}
                                        />}

                                    </div>
                                    {Type == 'AddMeals' && <img src={`/images/addon/mealtype-${item.mealtype}.png`} className={style.ChsMealtype} />}
                                </div>

                                <div className={`flex-grow-1 ${style.ChsaddBody}`}>
                                    <div className={`mb-1 text-right d-sm-none align-items-center ${style.ChsaddBtWrap}  ${style.ChsaddBtWraPr}`}>
                                    <span className={`d-inline-block ${style.ChsPrice} ${style.ChsPriceMb} ${selected[`${index}`] ? style.Active : ""}`}>{item.price}</span>
                                    </div>

                                    <p>{item.title}
                                        {Type == 'AddBaggage' && <span className='d-sm-block pt-sm-1'>
                                        <span className={`d-inline-block d-sm-none mx-2 mx-sm-0 ${style.ChsPriceMbLo}`}>|</span>{item.weight}</span>}
                                    </p>

                                    <div className={`text-right d-block d-sm-none ${style.ChsaddBtWrap} ${style.ChsaddSelMob}`}>
                                        <button type="button" className={`btn btn-light ${style.ChsaddBtn} ${selected[`${index}`] ? style.Active : ""}`} onClick={() => { selectBtn(index) }} data-select="Selected">
                                            <span>Select</span>
                                        </button>
                                    </div>

                                </div>
                                <div className={`d-none d-sm-block ${style.ChsaddBtWrap}`}>
                                    <span className={`d-block ${style.ChsPrice} ${selected[`${index}`] ? style.Active : ""}`}>{item.price}</span>
                                    <button type="button" className={`btn btn-light ${style.ChsaddBtn} ${selected[`${index}`] ? style.Active : ""}`} onClick={() => { selectBtn(index) }} data-select="Selected">
                                        <span>Select</span>
                                    </button>
                                </div>
                            </div>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}

export default index