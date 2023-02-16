import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';

import Optimen from '../img/nabvar/Optimen.jpg';
/*import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';
import twitter from '../img/twitter.png';
import tiktok from '../img/tik-tok.png';
*/
const NabvarExample = () => {
  return (
    <> 
    <div id="menu">
     <Navbar className="navBg" variant='dark' expand="lg" style={{color:"black"}}>
      <Container>
        <Navbar.Brand as={Link} to="/">
        <img
              src={Optimen}
              width="190"
              height="90"
              className="left"
              alt=''
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='contenidoNav' as={Link} to="/home">Home</Nav.Link>
            <Nav.Link className='contenidoNav' as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link className='contenidoNav' as={Link} to="/services">Services</Nav.Link>
            <Nav.Link className='contenidoNav' as={Link} to="/customers">Customers</Nav.Link>
            <Nav.Link className='contenidoNav' as={Link} to="/news">News</Nav.Link>
            <Nav.Link className='contenidoNav' as={Link} to="/innovation">Innovation</Nav.Link>
            <Nav.Link className='contenidoNav' as={Link} to="/contact">Contact Us</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
       <section>
            <Outlet>

            </Outlet>
        </section> 
    
    </>
  )
}

export default NabvarExample

