import React from 'react'
import style from './cartadd.module.css'
import Image from 'next/image'
import Collapse from 'react-bootstrap/Collapse';
import { Col, Row } from 'react-bootstrap';

const CartRouteWay = ({ Title, Json, Type, openCartTyp, setCardOpenTyp }) => {

    const RouteFromTo = Title === 'Return' ? 'HYD-DEL' : 'DEL-HYD'

    return (
        <section className={Title === 'Return' ? 'mt-4 ' + style.ChsaddUlFadeRet : style.ChsaddUlFadeDep}>
            <div className={style.ChsaddUlTitle} onClick={() => setCardOpenTyp(Title)}> 
                <Row className='align-items-center'>
                    <Col xs={10}>
                        {Title}

                        {Type == 'AddBaggage' && <span className='d-inline-block ml-1'>
                            {Title === 'Return' && <>&#8226; (1 Bag)</>}
                            {Title === 'Departure' && <>&#8226; (2 Bags)</>} Added
                        </span>}

                        {Type == 'AddMeals' && <span className='d-inline-block ml-1'>
                            {Title === 'Return' && <>&#8226; (1 Meal)</>}
                            {Title === 'Departure' && <>&#8226; (2 Meals)</>} Added
                        </span>}

                    </Col>
                    <Col xs={2} className="text-right">
                        <div className={`${style.DownCaret} ${openCartTyp == Title ? style.Active : ''}`}>
                            <Image
                                src={`/images/addon/arrowup-seat.png`}
                                alt={'arrowup-seat'}
                                width={12}
                                height={12}
                            />
                        </div>
                    </Col>
                </Row>
            </div>

            <Collapse in={openCartTyp == Title ? true : false}>
                <ul className={style.ChsaddUl}>
                    {Json && Json.map((item, index) => {
                        return (
                            <li>
                                <div className={`d-flex align-items-start ${style.ChsaddRouteMt}`}>
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
            </Collapse>

        </section>
    )
}

export default CartRouteWay