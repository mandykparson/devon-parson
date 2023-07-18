import React from 'react'
import './About.css';
import { Container, Row, Col, Image } from 'react-bootstrap'

export default function About() {
  return (
    <Container className="about-container">
        <Row className="about-row">
            <Col>
                <Image src="https://media.licdn.com/dms/image/C4E03AQHccNvbOTEDCg/profile-displayphoto-shrink_400_400/0/1566355620010?e=1689811200&v=beta&t=BuSG1HYRmLbYIRJHHYcnv7mbv3eN4LOJn4FHol5OqKU" fluid />
            </Col>
            <Col>
                <p>
                    Denver local Devon Parson comes from a family of artists. His father, Charles Parson, is a 
                    recognized sculptor and contemporary artist who resides in Denver Colorado. His mother was 
                    a modern dancer and was heavily involved in the Changing Scene.  His brother, Collin Parson, 
                    is the curator at the Arvada Center for the Arts and has shown his contemporary work 
                    worldwide. His sister studied theater and has been in a variety of performances throughout 
                    the state of Colorado. Devon received his Bachelor of Arts with a focus on Philosophy and 
                    Southwest Studies from Fort Lewis College.  Devon has also received a masters in education 
                    and is currently the Program Director for a Transition Program in Durango, Colorado. Devon 
                    also currently teaches Emergency Medical Services Courses with Southwest Community College.  
                    Growing up in a family of artists it is no surprise that Devon has the drive for creative 
                    expression. Devon has been involved in music for most of his life playing in local bluegrass 
                    bands and recently has found visual arts to be an outlet. Devon has shown his work statewide 
                    and has provided multiple artist talks and his process and theme of his work.
                </p>
            </Col>
        </Row>
    </Container>
  )
}
