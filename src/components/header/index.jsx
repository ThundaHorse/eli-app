import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceGrinWink } from '@fortawesome/free-regular-svg-icons';
import { Navbar, NavItem } from 'react-materialize';
import './header.scss';

export const PageHeader = () => {
  return (
    <>
      <Navbar
        alignLinks='left'
        id='mobile-nav'
        brand={
          <a href='/' className='right'>
            <img
              src='/assets/images/nerd-glasses.png'
              className='brand-logo hide-on-large-only'
              alt='Mobile Icon'
            />
          </a>
        }
        menuIcon={<img src='/assets/images/menu_black_24dp.svg' alt='Menu' />}
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true,
        }}
        className='navbar blue lighten-5'
      >
        <NavItem href='/' className='nav-link navbar-brand'>
          Follow the Nerd
          <FontAwesomeIcon
            className='mobile-drawer-icon mx-3'
            icon={faFaceGrinWink}
          />
        </NavItem>
        <NavItem href='/book-now' className='nav-link mx-2'>
          Book Now
        </NavItem>
        <NavItem href='/plans-pricing' className='nav-link mx-2'>
          Plans & Pricing
        </NavItem>
        <NavItem href='/success-stories' className='nav-link mx-2'>
          Success Stories
        </NavItem>
        <NavItem href='/about' className='nav-link mx-2'>
          About
        </NavItem>
      </Navbar>
    </>
  );
};
