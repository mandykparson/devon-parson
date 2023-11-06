import React from 'react'
import './Home.css';
import { Container, Row, Col, Image } from 'react-bootstrap'

export default function Home() {
  return (
    <Container className="home-container">
        <Row className="home-row">
            <Col>
                <Image
                src='/images/IMG_4189.JPG'
                fluid
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
            </Col>
            <Col>
                <Image
                src='/images/IMG_4190.JPG'
                fluid
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
            </Col>
            <Col>
                <Image
                src='/images/IMG_4191.JPG'
                fluid
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
            </Col>
            </Row>


    </Container>
  )
}
