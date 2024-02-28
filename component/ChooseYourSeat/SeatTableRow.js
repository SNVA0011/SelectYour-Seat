import React from 'react'
import style from './chsseatyr.module.css';

const SeatTableRow = ({ item, selected, selectBtn, index }) => {

    const addSeatClass = (type) => {
        switch (type) {
            case 'darkblue': return style.DarkBl;
            case 'lightblue': return style.LightBl;
            case 'lightgreen': return style.LightGr;
            case 'occupied': return style.Disable;
        }
    }

    const addDisableAttr = (value) => {
        return (
            value === 'occupied' ? true : false
        )
    }

    const SeatType = (type) => {
        switch (type) {
            case 'A': case 'F': return 'Window Seat';
            case 'B': case 'E': return 'Middle Seat';
            case 'C': case 'D': return 'Aisle Seat';
        }
    }

    const TooltipContent = (value, index, name, price) => { 
        return (
            value === 'occupied' ? (<>Occupied</>) : (<>{index}{name}, <b className='d-block d-xl-inline-block'>{SeatType(name)}</b> <span>{price}</span> </>)
        )
    }

    const SeatSelected = (selected, index, name) => {
        return (
            selected === `${index}${name}` ? style.Active : ""
        )
    }





    return (
        <tr key={index}>
            <td className={style.AirPlRowName}>
                {index}
            </td>
            <td>
                <button className={`btn ${style.SeatDef} ${addSeatClass(item.A)} ${addSeatClass(item.A)} ${addSeatClass(item.A)} ${addSeatClass(item.A)} ${SeatSelected(selected, index, 'A')}`}
                    disabled={addDisableAttr(item.A)}
                    onClick={() => { selectBtn(`${index}A`) }}>
                    {index}A
                    <div className={style.SeatDefTooltio}>
                        {TooltipContent(item.A, `${index}`, 'A', '₹600')}
                    </div>
                </button>
            </td>
            <td>
                <button className={`btn ${style.SeatDef} ${addSeatClass(item.B)} ${addSeatClass(item.B)} ${addSeatClass(item.B)} ${addSeatClass(item.B)} ${SeatSelected(selected, index, 'B')}`}
                    disabled={addDisableAttr(item.B)}
                    onClick={() => { selectBtn(`${index}B`) }}>
                    {index}B
                    <div className={style.SeatDefTooltio}>
                        {TooltipContent(item.B, `${index}`, 'B', '₹600')}
                    </div>
                </button>
            </td>
            <td>
                <button className={`btn ${style.SeatDef} ${addSeatClass(item.C)} ${addSeatClass(item.C)} ${addSeatClass(item.C)} ${addSeatClass(item.C)} ${SeatSelected(selected, index, 'C')}`}
                    disabled={addDisableAttr(item.C)}
                    onClick={() => { selectBtn(`${index}C`) }}>
                    {index}C
                    <div className={style.SeatDefTooltio}>
                        {TooltipContent(item.C, `${index}`, 'C', '₹600')}
                    </div>
                </button>
            </td>
            <td className={style.AirPlSpace}>
                <span className={style.AirPlRowNameText}>{index}</span>
            </td>
            <td>
                <button className={`btn ${style.SeatDef} ${addSeatClass(item.D)}  ${addSeatClass(item.D)} ${addSeatClass(item.D)} ${addSeatClass(item.D)} ${SeatSelected(selected, index, 'D')}`}
                    disabled={addDisableAttr(item.D)}
                    onClick={() => { selectBtn(`${index}D`) }}>
                    {index}D
                    <div className={style.SeatDefTooltio}>
                        {TooltipContent(item.D, `${index}`, 'D', '₹600')}
                    </div>
                </button>
            </td>
            <td>
                <button className={`btn ${style.SeatDef} ${addSeatClass(item.E)} ${addSeatClass(item.E)} ${addSeatClass(item.E)} ${addSeatClass(item.E)} ${SeatSelected(selected, index, 'E')}`}
                    disabled={addDisableAttr(item.E)}
                    onClick={() => { selectBtn(`${index}E`) }}>
                    {index}E
                    <div className={style.SeatDefTooltio}>
                        {TooltipContent(item.E, `${index}`, 'E', '₹600')}
                    </div>
                </button>
            </td>
            <td>
                <button className={`btn ${style.SeatDef} ${addSeatClass(item.F)} ${addSeatClass(item.F)} ${addSeatClass(item.F)} ${addSeatClass(item.F)} ${SeatSelected(selected, index, 'F')}`}
                    disabled={addDisableAttr(item.F)}
                    onClick={() => { selectBtn(`${index}F`) }}>
                    {index}F
                    <div className={style.SeatDefTooltio}>
                        {TooltipContent(item.F, `${index}`, 'F', '₹600')}
                    </div>
                </button>
            </td>
            <td className={style.AirPlRowName}>
                {index}
            </td>
        </tr>
    )
}

export default SeatTableRow