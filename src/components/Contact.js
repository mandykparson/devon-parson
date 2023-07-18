import './Contact.css';
// import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Contact() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform form submission logic or API call here
//     console.log('Form submitted:', { name, email, message });
//     // Reset form fields
//     setName('');
//     setEmail('');
//     setMessage('');
//   };

  return (
    <Container className="contact-container">
        <Row className="contact-row">
            <Col>
                <h3>Contact Devon</h3>
            </Col>
        </Row>
        <Row className="contact-row">
            <Col>
                <p>For questions or general inqueries, please email devonparson@gmail.com</p>
            </Col>
        </Row>
        {/* <form onSubmit={handleSubmit}>
        <Row>
            <Col>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Col>
        </Row>
        <Row>
            <Col>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Col>
        </Row>
        <Row>
            <Col>
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
            </Col>
        </Row>
        <Row>
            <Col>
                <button type="submit">Submit</button>
            </Col>
        </Row>
        </form> */}
    </Container>
  );
}

export default Contact;
