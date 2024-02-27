import React, { useState } from 'react'
import style from './chsseatyr.module.css';
import { Col, Row } from 'react-bootstrap';
import SeatTableRow from './SeatTableRow';
import { allSeats } from '../JsonAddon';

const index = () => {
    const [selected, setSelected] = useState();

    const selectBtn = (val) => {
        setSelected(val)
    }

    return (
        <>

            <div className={style.FillChsSeat}>
                <div className={style.AirplaneWrapper}>
                    <div className={style.AirplaneBxHeader}>
                        <img src='/images/addon/airplaneseat-head.png' />
                    </div>

                    <div className={style.AirplaneBxExit}>
                        <Row>
                            <Col xs={6} className={style.AirExitLeft}>
                                <img src='/images/addon/emergency-exit.png' />
                            </Col>
                            <Col xs={6} className={style.AirExitRight}>
                                <img src='/images/addon/emergency-exit.png' />
                            </Col>
                        </Row>
                    </div>


                    {/*======= AirplaneBxBody =======*/}
                    <div className={style.AirplaneBxBody}>

                        <table class={`table ${style.AirPlTable}`}>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>A</th>
                                    <th>B</th>
                                    <th>C</th>
                                    <th className={style.AirPlSpace}></th>
                                    <th>D</th>
                                    <th>E</th>
                                    <th>F</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                                {allSeats && allSeats.map((item, index) => {
                                    const Count = index + 1;
                                    return (
                                        <SeatTableRow
                                        item={item}
                                          selected={selected}
                                         selectBtn={selectBtn}
                                         index={Count} />
                                    )
                                })}
 
                            </tbody>
                        </table>
                    </div>
                    {/*======= end AirplaneBxBody =======*/}


                    <div className={style.AirplaneBxExit}>
                        <Row>
                            <Col xs={6} className={style.AirExitLeft}>
                                <img src='/images/addon/emergency-exit.png' />
                            </Col>
                            <Col xs={6} className={style.AirExitRight}>
                                <img src='/images/addon/emergency-exit.png' />
                            </Col>
                        </Row>
                    </div>



                    <div className={style.AirplaneBxFooter}></div>
                </div>
            </div>
        </>
    )
}

export default index