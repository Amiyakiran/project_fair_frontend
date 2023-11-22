import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar className='p-3 fixed-top'  style={{backgroundColor:'yellowgreen'}}>
    <Container>
      <Navbar.Brand href="#home" className='fw-bolder fs-3'>
     <Link to={'/'} style={{textDecoration:'none', color:'black'}}>
        <i class="fa-brands fa-stack-overflow me-3"></i>
         Project Fair
     </Link>
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header