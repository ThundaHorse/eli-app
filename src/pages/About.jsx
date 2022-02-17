import React from "react";
import "../styles/pages/about.scss";
import { Container, Col, Row } from "react-bootstrap";

export const About = () => {
  return (
    <>
      <Container id='about-us-page' fluid>
        <Row id='about-us-hero-brand'>
          <Col className='my-auto text-left'>
            <h1 className='about-us-brand-text'>About Us</h1>
          </Col>
        </Row>

        <hr />

        <Row id='about-us-hero-main'>
          <Col className='my-auto'>
            <div className='about-intro-wrapper'>
              <h2 className='about-us-intro'>
                Your resume is one of your most important career tools.
              </h2>

              <p className='about-us-sub-intro'>
                But many professionals have no idea where to start, what to
                include, and what to leave off of their resumes.
              </p>
            </div>
          </Col>
        </Row>

        <Row id='about-us-mission'>
          <Col className='my-auto'>
            <div className='about-us-mission-wrapper'>
              <h3 className='about-us-mission-statement'>
                That’s where Follow the Nerd comes in.
              </h3>
              <p className='about-us-mission-sub'>
                We can carefully craft your career story to target the job that
                you want to land.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
