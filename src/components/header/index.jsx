import React from 'react';
// import { Row, Col } from "react-bootstrap"
import {
  Navbar,
  Container,
  Nav,
  NavItem,
  NavLink,
  Offcanvas
} from 'react-bootstrap';
import './header.scss';

export const PageHeader = () => {
  return (
    <Navbar bg='dark' variant='dark' expand={'sm'}>
      <Container className='justify-content-end'>
        <Nav className='justify-content-center flex-grow-1 pe-3 d-none d-md-flex'>
          <NavLink href='/'>Home</NavLink>
          <NavLink href='/book-now'>Book Now</NavLink>
          <NavLink href='/plans-pricing'>Plans & Pricing</NavLink>
          <NavLink href='/blog'>Blog</NavLink>
          <NavLink href='/about'>About</NavLink>
        </Nav>

        <Navbar.Toggle aria-controls='offcanvasNavbar' />
        <Navbar.Offcanvas
          id='offcanvasNavbar'
          aria-labelledby='offcanvasNavbarLabel'
          placement='end'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              id='offcanvasNavbarLabel'
              className='text-center mx-auto'>
              Log In
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className='text-center'>
            <Nav className='justify-content-center flex-grow-1'>
              <NavLink href='/'>Home</NavLink>
              <NavLink href='/book-now'>Book Now</NavLink>
              <NavLink href='/plans-pricing'>Plans & Pricing</NavLink>
              <NavLink href='/blog'>Blog</NavLink>
              <NavLink href='/about'>About</NavLink>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
