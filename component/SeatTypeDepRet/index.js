import React from 'react'
import style from './depretseat.module.css'
import { Col, Row } from 'react-bootstrap'

const index = () => {
    return (
        <div className={style.DepSeatType}>
            <Row className={style.DepSeatRow}>
                <Col xs={6} className={`${style.DepSeatCol}`}>
                    <label>
                        <div className={`${style.DepSeatLeftMs}`}>
                            Departure
                        </div>
                    </label>
                    <div className={`${style.DepSeatLeftMs}`}>
                        <ul>
                            <li>
                                <span>DEL-HYD</span>
                                <b>19A</b> | Window Seat
                            </li>
                            <li>
                                <span>HYD-BOM</span>
                                <b>4B</b> | Middle Seat
                            </li>
                            <li>
                                <span>BOM-DXB</span>
                                <b>21D</b> | Aisle Seat
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col xs={6} className={`${style.DepSeatCol}  ${style.DepSeatLeft}`}>
                    <label>
                        <div className={`${style.DepSeatLeftWd}`}>Return</div>
                    </label>
                    <div className={`${style.DepSeatLeftWd}`}>
                        <ul>
                            <li>
                                <span>DXB-BOM</span>
                                <b>21D</b> | Aisle Seat
                            </li>
                            <li>
                                <span>BOM-HYD</span>
                                <b>4B</b> | Middle Seat
                            </li>
                            <li>
                                <span>HYD-DEL</span>
                                <b>19A</b> | Window Seat
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default index