import React from 'react'
import './Home.css';
import { Container, Row, Col, Image } from 'react-bootstrap'

export default function Home() {
  return (
    <Container className="home-container">
        <Row className="home-row">
            <Col>
                <Image src="https://img1.wsimg.com/isteam/ip/94ed2665-ba11-4c53-9478-9ef976fc5138/IMG_0131-0001.jpg" fluid />
            </Col>
            <Col>
                <Image src="https://img1.wsimg.com/isteam/ip/94ed2665-ba11-4c53-9478-9ef976fc5138/IMG_0129.jpg" fluid />
            </Col>
            <Col>
                <Image src="https://img1.wsimg.com/isteam/ip/94ed2665-ba11-4c53-9478-9ef976fc5138/IMG_0138.jpg" fluid />
            </Col>
        </Row>
    </Container>
  )
}
