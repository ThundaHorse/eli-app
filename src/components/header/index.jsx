import React from "react";
import { Navbar, Container, Nav, NavLink, Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrinWink, faSmile } from "@fortawesome/free-regular-svg-icons";
import "./header.scss";

export const PageHeader = () => {
  return (
    <Navbar variant='light' expand={"sm"}>
      <Container>
        <NavLink className='navbar-brand d-flex d-md-none left-align' href='/'>
          <FontAwesomeIcon className='mx-3' icon={faFaceGrinWink} />
        </NavLink>
        <Nav className='flex-grow-1 pe-3 d-none d-md-flex'>
          <NavLink className='navbar-brand' href='/'>
            Follow the Nerd
            <FontAwesomeIcon className='mx-3' icon={faSmile} />
          </NavLink>
          <NavLink href='/book-now'>Book Now</NavLink>
          <NavLink href='/plans-pricing'>Plans & Pricing</NavLink>
          <NavLink href='/blog'>Blog</NavLink>
          <NavLink href='/about'>About</NavLink>
        </Nav>
        <Navbar.Toggle aria-controls='offcanvasNavbar' />
        <Navbar.Offcanvas
          className='grey lighten-4'
          id='offcanvasNavbar'
          aria-labelledby='offcanvasNavbarLabel'
          placement='end'
        >
          <Offcanvas.Header className='z-depth-1' closeButton>
            <Offcanvas.Title id='offcanvasNavbarLabel' className='mx-4'>
              Follow the Nerd
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body className='mx-4'>
            <Nav className='justify-content-center flex-grow-1'>
              <a
                href='/book-now'
                className='link-black offcanvas-link btn-large btn blue-grey lighten-5'
              >
                Book Now
              </a>

              <a
                href='/plans-pricing'
                className='link-black offcanvas-link btn-large btn blue-grey lighten-5'
              >
                Plans & Pricing
              </a>

              <a
                href='/blog'
                className='link-black offcanvas-link btn-large btn blue-grey lighten-5'
              >
                Blog
              </a>

              <a
                href='/about'
                className='link-black offcanvas-link btn-large btn blue-grey lighten-5'
              >
                About
              </a>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
