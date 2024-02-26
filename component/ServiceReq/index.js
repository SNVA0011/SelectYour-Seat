import React, { useState } from 'react'
import ChooseAddons from '../ChooseAddons'
import RouteAddons from '../RouteAddons'
import SeatTypeName from '../SeatTypeName'
import CartAddons from '../CartAddons'
import SkiptoAddons from '../SkiptoAddons'
import SeatTypeDepRet from '../SeatTypeDepRet'
import ChooseYourSeat from '../ChooseYourSeat'
import style from './servicerq.module.css'
import { allMeals } from '../JsonAddon'
import { allBaggage } from '../JsonAddon' 
import { Col, Row } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';


const index = () => {
  const [key, setKey] = useState(0);

  return (
    <>
      <div className={style.StepTitle}>
        Add-Ons
        <span>Service Requests (Optional)</span>
      </div>
      <div className={style.ServiceReq}>

        {key < 3 ? <div className='w-100'>
          <Tab.Container onSelect={(k) => setKey(k)} activeKey={key} value={key}>
            <Nav variant="pills" className={style.ServiceTbNav}>
              <Nav.Item className={`${style.SerTbNavItem}`}>
                <Nav.Link className={`${style.SerTbNavBtn} ${style.One}`} eventKey={0}>
                 <img src='/images/addon/car-seat-icon.png' /> Select Seat
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={`${style.SerTbNavItem}`}>
                <Nav.Link className={`${style.SerTbNavBtn} ${style.Two}`} eventKey={1}>
                 <img src='/images/addon/hot-meal-icon.png' /> Add Meals
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={`${style.SerTbNavItem}`}>
                <Nav.Link className={`${style.SerTbNavBtn} ${style.Three}`} eventKey={2}>
                 <img src='/images/addon/bag-suitcase-icon.png' /> Add Baggage
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content className={style.ServiceTbcont}>
              <Tab.Pane eventKey={0}>
                <Row>
                  <Col xs={12} md={4}>
                    <RouteAddons Type={'AddSeat'} />

                    <SeatTypeName />

                    <SeatTypeDepRet />
                  </Col>
                  <Col xs={12} md={8}>
                    <ChooseYourSeat />
                  </Col>
                </Row>

              </Tab.Pane>


              <Tab.Pane eventKey={1}>
                <Row>
                  <Col xs={12} md={4}>
                    <RouteAddons Type={'AddMeals'} />

                    <CartAddons Type={'AddMeals'} Json={allMeals} />
                  </Col>
                  <Col xs={12} md={8}>
                    <ChooseAddons Type={'AddMeals'} Json={allMeals} />

                  </Col>
                </Row>
              </Tab.Pane>


              <Tab.Pane eventKey={2}>
                <Row>
                  <Col xs={12} md={4}>
                    <RouteAddons Type={'AddBaggage'} />
                    <CartAddons Type={'AddBaggage'} Json={allBaggage} />
                  </Col>
                  <Col xs={12} md={8}>
                    <ChooseAddons Type={'AddBaggage'} Json={allBaggage} />
                  </Col>
                </Row>
              </Tab.Pane>
            </Tab.Content>

          </Tab.Container>


          <SkiptoAddons
            ContinueBtn={() => { setKey(Number(key < 3 && key + 1)) }}
            SkiptoAddbtn={() => { setKey(Number(3)) }}
          />
        </div>

          :
          <div className={style.ServiceReqDwrp}>
            <Row className='align-items-center'>
              <Col xs={12} md={8} className={style.ServiceReqDone}>
                Seats, Meals & Baggage <small>Departure: 3A, 1 Meal  & 1 Bag  Added</small>
              </Col>
              <Col xs={12} md={4} className='text-right'>
                <button onClick={() => { setKey(0) }} className={`btn ${style.ServiceRqEditbtn}`}>
                  Edit <img src='/images/addon/edit-seat.png' />
                </button>
              </Col>
            </Row>
          </div>
        }

      </div>
    </>
  )
}

export default index