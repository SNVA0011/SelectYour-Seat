import React, { useState } from 'react'
import style from './chsaddon.module.css'
import Image from 'next/image'

const index = ({ Json, Type}) => {
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
                        <li className={`${selected[`${index}`] ? style.Active : ""}`}  style={{animationDelay : `${index * 100}ms`}}>
                            <div className='d-flex align-items-center'>
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
                                    <p>{item.title}
                                        {Type == 'AddBaggage' && <span className='d-block pt-1'>{item.weight}</span>}
                                    </p>
                                </div>
                                <div className={style.ChsaddBtWrap}>
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