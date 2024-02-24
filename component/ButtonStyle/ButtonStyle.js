import React from 'react'
import styles from './buttonui.module.css'
import { Button } from 'react-bootstrap'


const ButtonStyle = ({ content, outline, fullwidth, onClick, className = null }) => {
    return (
        <Button   
            variant={`${outline ? 'outline-' : ''}danger`} onClick={onClick}
            className={`bt ${outline ? styles.OutlineClr : styles.FillClr} ${fullwidth ? 'w-100' : ''} ${styles.FlightOfdealBtn} ${className}`}> 
            <span>{content}</span>
        </Button>
    )
}

export default ButtonStyle