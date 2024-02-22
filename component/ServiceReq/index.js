import React from 'react'
import ChooseAddons from '../ChooseAddons'
import RouteAddons from '../RouteAddons'
import CartAddons from '../CartAddons'
import style from './servicerq.module.css'
import { allMeals } from '../JsonAddon'
import { allBaggage } from '../JsonAddon'
import { Col, Row } from 'react-bootstrap'

const index = () => {
  return (
    <div className={style.ServiceReq}>
      <Row>
        <Col xs={12} md={4}>

        <RouteAddons Type={'AddSeat'} />

          {/*
          <RouteAddons Type={'AddMeals'} />
          <RouteAddons Type={'AddBaggage'} />    */}

          {/* <CartAddons Type={'AddMeals'} Json={allMeals} /> */}
          <CartAddons Type={'AddBaggage'} Json={allBaggage} />
        </Col>
        <Col xs={12} md={8}>
        <ChooseAddons Type={'AddMeals'} Json={allMeals} />

          {/* 
          <ChooseAddons Type={'AddBaggage'} Json={allBaggage} />   */}
        </Col>
      </Row>
    </div>
  )
}

export default index