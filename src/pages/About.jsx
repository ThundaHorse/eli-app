import React from "react";
import "../styles/pages/about.scss";
import { Row, Col, Container } from "react-bootstrap";
import { Animated } from "react-animated-css";

export const About = () => {
  return (
    <>
      <Animated
        animationIn='fadeIn'
        animationOut='fadeOut'
        animationDuration={1000}
        animationOutDuration={1000}
        isVisible={true}
      >
        <Container className='p-0' fluid>
          <Row className='teal grey lighten-5 mb-0'>
            <Col className='text-black lighten-6'>
              <h3 className='about-us-heading'>About Us</h3>
            </Col>
          </Row>

          <Row className='about-us-sec center-align grey lighten-4'>
            <Col>
              <img
                className='about-us-intro-tools'
                src='/assets/images/about-us-clipboard.webp'
                alt='about-us-intro-tools'
              />
            </Col>

            <Col className='my-auto'>
              <h3 className='about-us-call-to-action'>
                Your resume is one of your most important career tools.
              </h3>
            </Col>
          </Row>

          <div className='section-wrapper'>
            <Container>
              <Row className='about-us-sub-sec sub-1 center-align'>
                <Col>
                  <h3 className='about-us-call-to-action-sub center-align'>
                    But many professionals have no idea where to start, what to
                    include, and what to leave off of their resumes.
                  </h3>
                </Col>
              </Row>
            </Container>
          </div>

          <Row className='about-us-end center-align grey lighten-4'>
            <Col>
              <h3 className='about-us-call-end center-align'>
                That’s where Follow the Nerd comes in. We can carefully craft
                your career story to target the job that you want to land.
              </h3>
            </Col>

            <Col>
              <img
                className='end-image'
                src='/assets/images/superhero-about-us.svg'
                alt='about-us-end-1'
              />
            </Col>
          </Row>
        </Container>
      </Animated>
    </>
  );
};
