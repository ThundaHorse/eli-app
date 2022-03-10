import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrinWink } from "@fortawesome/free-regular-svg-icons";
import { Navbar, NavItem } from "react-materialize";
import "./header.scss";

export const PageHeader = () => {
  return (
    <>
      <Navbar
        alignLinks='left'
        id='mobile-nav'
        brand={
          <a href='/' className='right'>
            <FontAwesomeIcon
              className='brand-logo hide-on-large-only'
              icon={faFaceGrinWink}
            />
          </a>
        }
        menuIcon={<img src='/assets/images/menu_black_24dp.svg' alt='Menu' />}
        options={{
          draggable: true,
          edge: "left",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true,
        }}
        className='navbar blue-grey lighten-5'
      >
        <NavItem href='/' className='nav-link navbar-brand'>
          Follow the Nerd
          <FontAwesomeIcon className='mx-3' icon={faFaceGrinWink} />
        </NavItem>
        <NavItem href='/book-now' className='nav-link mx-5'>
          Book Now
        </NavItem>
        <NavItem href='/plans-pricing' className='nav-link mx-5'>
          Plans & Pricing
        </NavItem>
        <NavItem href='/about' className='nav-link mx-5'>
          About
        </NavItem>
      </Navbar>
    </>
  );
};
