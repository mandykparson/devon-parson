import React from 'react'
import './Home.css';
import { Container, Row, Col, Image } from 'react-bootstrap'

export default function Home() {
  return (
    <Container className="home-container">
        <Row className="home-row">
            <Col>
                <Image
                src='https://i.imgur.com/IOvrbIY.jpg'
                fluid
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
            </Col>
            <Col>
                <Image
                src='https://i.imgur.com/WZlg4wo.jpg'
                fluid
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
            </Col>
            <Col>
                <Image
                src='https://i.imgur.com/6S24KxX.jpg'
                fluid
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
            </Col>
            </Row>


    </Container>
  )
}
