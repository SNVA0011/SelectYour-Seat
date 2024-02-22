import React from 'react'
import style from './cartadd.module.css'
import Image from 'next/image'


const CartRouteWay = ({ Title, Json, Type }) => {

    const RouteFromTo = Title === 'Return' ? 'HYD-DEL' : 'DEL-HYD'

    return (
        <section className={Title === 'Return' ? 'mt-4 ' + style.ChsaddUlFadeRet : style.ChsaddUlFadeDep}>
            <div className={style.ChsaddUlTitle}>{Title}</div>
            <ul className={style.ChsaddUl}>
                {Json && Json.map((item, index) => {
                    return (
                        <li>
                            <div className='d-flex align-items-start'>
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
                                    <div className={style.ChsaddRoute}>{RouteFromTo}</div>
                                    <p>{item.title}
                                        {Type == 'AddBaggage' && <> | <span className='d-inline-block'>{item.weight}</span></>}
                                    </p>

                                    <div className={style.ChsaddBtWrap}>
                                        <span className={`d-block ${style.ChsPrice}`}>{item.price}</span>
                                    </div>

                                </div>

                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default CartRouteWay