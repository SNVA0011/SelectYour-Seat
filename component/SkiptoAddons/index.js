import React from 'react'
import ButtonStyle from '../ButtonStyle/ButtonStyle'
import style from './skipadn.module.css'
import { Col, Row } from 'react-bootstrap'

const index = ({ContinueBtn, SkiptoAddbtn}) => {
    return (
        <div className={style.SkipContinue}>
            <Row className='align-items-center'>
                <Col xs={6}>
                <ButtonStyle
                content={'Continue'}
                outline={false}
                fullwidth={false}
                onClick={ContinueBtn} 
              /> 
                </Col>
                <Col xs={6} className="text-right"> 
                    <button type="button" class={`btn btn-link ${style.SkiptoBtn}`} onClick={SkiptoAddbtn} >
                    Skips to add-on
                    </button>
                </Col>
            </Row>
        </div>
    )
}

export default index