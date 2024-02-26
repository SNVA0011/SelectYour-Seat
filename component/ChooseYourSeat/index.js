import React from 'react'
import style from './chsseatyr.module.css'; 

const index = () => {
    return (
        <div className={style.FillChsSeat}>
            <div className={style.AirplaneWrapper}>
                <div className={style.AirplaneBxHeader}>
                    <img src='/images/addon/airplaneseat-head.png' />
                </div>
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
                            <tr>
                                <td className={style.AirPlRowName}>1</td>
                                <td></td>
                                <td><button className={`btn ${style.SeatDef}`}>1B</button></td>
                                <td><button className={`btn ${style.SeatDef}`}>1C</button></td>
                                <td className={style.AirPlSpace}></td>
                                <td><button className={`btn ${style.SeatDef}`} disabled={true}>1D</button></td>
                                <td><button className={`btn ${style.SeatDef}`}>1E</button></td>
                                <td><button className={`btn ${style.SeatDef}`}>1F</button></td>
                                <td className={style.AirPlRowName}>1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default index