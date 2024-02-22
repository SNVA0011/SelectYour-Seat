import Head from 'next/head';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ServiceReq from '../component/ServiceReq'

export default function Home(props) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Head>
        <title>Select Your Seat</title>
      </Head>


      <Container>
        <Row>
          <Col xs={12} lg={8} xl={9}>
            <ServiceReq />
          </Col>
        </Row>
      </Container>
    </>
  )
}

