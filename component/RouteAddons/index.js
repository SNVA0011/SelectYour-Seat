import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import style from './routeadd.module.css';

const index = ({ Type }) => {
    const [key, setKey] = useState('departure');
    const [btnFrom, setActbtnFrom] = useState(0);
    const [btnTo, setActbtnTo] = useState(0);
 

    const AddonType = (Type) => {
        switch (Type) {
            case 'AddSeat': return 'Select Seat';
            case 'AddMeals': return 'Select Meal';
            case 'AddBaggage': return 'Select Baggage';
        }
    }

    return (
        <div className={style.TabAddonRoute}>
            <div className={`${style.TabAddonKey} ${key == 'return' ? style.Return : ''}`}></div>
            <Tabs defaultActiveKey={key} onSelect={(k) => setKey(k)}>
                <Tab eventKey="departure" title="Departure">
                    <div className={style.TabAddonRt}>
                        <ol>
                            <li className={btnFrom == 0 ? style.Active : ''}>
                                <button className={`btn ${style.TabAddonRtBtn} ${btnFrom == 0 ? style.Active : ''}`} onClick={() => { setActbtnFrom(0) }}>DEL-HYD</button>
                            </li>
                            <li className={btnFrom == 1 ? style.Active : ''}>
                                <button className={`btn ${style.TabAddonRtBtn} ${btnFrom == 1 ? style.Active : ''}`} onClick={() => { setActbtnFrom(1) }}>HYD-BOM</button>
                            </li>
                            <li className={btnFrom == 2 ? style.Active : ''}>
                                <button className={`btn ${style.TabAddonRtBtn} ${btnFrom == 2 ? style.Active : ''}`} onClick={() => { setActbtnFrom(2) }}>BOM-DXB</button>
                            </li>
                        </ol>
                        <div className={`${style.TabARtSelected}`} style={{ top: btnFrom * 57 }}>{AddonType(Type)}</div>
                    </div>
                </Tab>
                <Tab eventKey="return" title="Return">
                    <div className={style.TabAddonRt}>
                        <ol>
                            <li className={btnTo == 0 ? style.Active : ''}>
                                <button className={`btn ${style.TabAddonRtBtn} ${btnTo == 0 ? style.Active : ''}`} onClick={() => { setActbtnTo(0) }}>HYD-DEL</button>
                            </li>
                            <li className={btnTo == 1 ? style.Active : ''}>
                                <button className={`btn ${style.TabAddonRtBtn} ${btnTo == 1 ? style.Active : ''}`} onClick={() => { setActbtnTo(1) }}>BOM-HYD</button>
                            </li>
                            <li className={btnTo == 2 ? style.Active : ''}>
                                <button className={`btn ${style.TabAddonRtBtn} ${btnTo == 2 ? style.Active : ''}`} onClick={() => { setActbtnTo(2) }}>DXB-BOM</button>
                            </li>
                        </ol>
                        <div className={`${style.TabARtSelected}`} style={{ top: btnTo * 57 }}>{AddonType(Type)}</div>
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}

export default index