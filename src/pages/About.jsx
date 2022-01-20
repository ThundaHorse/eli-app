import React from 'react';
import '../styles/pages/about.scss';
import { Container, Col, Row } from 'react-bootstrap';

export const About = () => {
  return (
    <Container id='about-us-page'>
      <Row id='about-us-wrapper'>
        <Col md='6' lg='6' className='p-4 about-us-text'>
          <div className='about-us-text'>
            <h1 className='about-us-main-heading'>About Us</h1>
            <h2 className='about-us-sub-heading'>Follow The Nerd</h2>
            <p className='about-us-description'>
              Your resume is one of your most important career tools. But many
              professionals have no idea where to start, what to include, and
              what to leave off of their resumes. That’s where Follow the Nerd
              comes in. We can carefully craft your career story to target the
              job that you want to land.
            </p>
          </div>
        </Col>
        <Col md='6' lg='6' className='p-0'>
          <div className='image-overlay'>
            <img
              className='about-us-image'
              src='https://static.wixstatic.com/media/033db6cfbd844ab3991ffffc1009815c.jpg/v1/fill/w_960,h_1520,al_c,q_85,usm_0.66_1.00_0.01/Landscape%20Architecture.webp'
              alt='about-us'
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
