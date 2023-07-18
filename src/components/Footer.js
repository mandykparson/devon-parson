import React from 'react'
import './Footer.css';
import Navbar from 'react-bootstrap/Navbar';

export default function Footer() {
  return (
    <Navbar fixed="bottom">
        <Navbar.Collapse className="justify-content-center">
            <Navbar.Text className="footer-text">
                Copyright © 2023 Devon Parson Art
            </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>
  )
}
