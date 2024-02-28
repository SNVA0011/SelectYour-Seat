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
                  <img src='/images/addon/car-seat-icon.png' /> <span className={`d-block d-sm-inline-block ${style.SerTbNavBtnWd}`}>Select Seat</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={`${style.SerTbNavItem}`}>
                <Nav.Link className={`${style.SerTbNavBtn} ${style.Two}`} eventKey={1}>
                  <img src='/images/addon/hot-meal-icon.png' /> <span className={`d-block d-sm-inline-block ${style.SerTbNavBtnWd}`}>Add Meals</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={`${style.SerTbNavItem}`}>
                <Nav.Link className={`${style.SerTbNavBtn} ${style.Three}`} eventKey={2}>
                  <img src='/images/addon/bag-suitcase-icon.png' /> <span className={`d-block d-sm-inline-block ${style.SerTbNavBtnWd}`}>Add Baggage</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content className={style.ServiceTbcont}>
              <Tab.Pane eventKey={0}>
                <Row className={style.ServiceTbRow}>
                  <Col xs={12} md={5} xl={4} className={style.ServiceTbCol}>
                    <RouteAddons Type={'AddSeat'} />

                    <SeatTypeName />

                    <div className='d-none d-md-block'>
                      <SeatTypeDepRet />
                    </div>
                  </Col>
                  <Col xs={12} md={7} xl={8} className={style.ServiceTbCol}>
                    <ChooseYourSeat />

                    <div className='d-md-none'>
                      <SeatTypeDepRet />
                    </div>
                  </Col>
                </Row>

              </Tab.Pane>


              <Tab.Pane eventKey={1}>
                <Row className={style.ServiceTbRow}>
                  <Col xs={12} md={5} xl={4} className={style.ServiceTbCol}>
                    <RouteAddons Type={'AddMeals'} />

                    <div className='d-none d-md-block'>
                      <CartAddons Type={'AddMeals'} Json={allMeals} />
                    </div>
                  </Col>
                  <Col xs={12} md={7} xl={8} className={style.ServiceTbCol}>
                    <div className='mt-3 mt-sm-4 mt-md-0'>
                      <ChooseAddons Type={'AddMeals'} Json={allMeals} />
                    </div>

                    <div className='d-md-none'>
                      <CartAddons Type={'AddMeals'} Json={allMeals} />
                    </div>
                  </Col>
                </Row>
              </Tab.Pane>


              <Tab.Pane eventKey={2}>
                <Row className={style.ServiceTbRow}>
                  <Col xs={12} md={5} xl={4} className={style.ServiceTbCol}>
                    <RouteAddons Type={'AddBaggage'} />

                    <div className='d-none d-md-block'>
                      <CartAddons Type={'AddBaggage'} Json={allBaggage} />
                    </div>
                  </Col>
                  <Col xs={12} md={7} xl={8} className={style.ServiceTbCol}>
                    <div className='mt-3 mt-sm-4 mt-md-0'>
                      <ChooseAddons Type={'AddBaggage'} Json={allBaggage} />
                    </div>

                    <div className='d-md-none'>
                      <CartAddons Type={'AddBaggage'} Json={allBaggage} />
                    </div>
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
              <Col xs={8} className={style.ServiceReqDone}>
                Seats, Meals & Baggage <small>Departure: 3A, 1 Meal  & 1 Bag  Added</small>
              </Col>
              <Col xs={4} className={style.SerbtnAlignt}>
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