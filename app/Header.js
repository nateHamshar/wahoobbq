'use client'
import logo from "../public/logo.png"
import Image from 'next/image'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react'


export default function Header() {

  const [isActive, setIsActive] = useState(false)

  const changeNavColor = () => {
    if (isActive == false) {
      const navBackground = document.getElementById("navbar-background")
      navBackground.classList.add("active")
      setIsActive(true)
    } else {
      const navBackground = document.getElementById("navbar-background")
      navBackground.classList.remove("active")
      setIsActive(false)
    }
  }

  function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
      document.getElementById("navbar-background").classList.add('active')
    } else {
      document.getElementById("navbar-background").classList.remove("active");
    }
  }
  window.onscroll = function() {scrollFunction()};
  

    return (
    <Navbar expand="lg" className="bg-body-primary" id="navbar-background">
      <Container className='navContainer'>
        <Navbar.Brand href="/">
            <Image 
                src='/logo.png'
                width={65}
                height={65}
                alt='Wahoo bbq logo'
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" id='toggler' onClick={() => {changeNavColor()}} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link" href="/dine-in-menu">Dine In Menu</Nav.Link>
            <Nav.Link className="nav-link" href="/bulk-carry-out-menu">Bulk Carry Out Menu</Nav.Link>
            <Nav.Link className="nav-link" href="/about">About</Nav.Link>
            <Nav.Link className="nav-link" href="/events">Events Calendar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}