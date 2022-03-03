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
              <h3 className='about-us-heading'>What is Follow The Nerd?</h3>
            </Col>
          </Row>

          <Row className='about-us-sec center-align grey lighten-4'>
            <Col className='my-auto'>
              <img
                className='about-us-intro-tools'
                src='/assets/images/about-us-clipboard.webp'
                alt='about-us-intro-tools'
              />
            </Col>

            <Col className='my-auto'>
              <h3 className='about-us-call-to-action'>
                FTN is a philosophy our company stands by to enable and teach
                clients who may not be experts or experienced in their
                professional career.
              </h3>
            </Col>
          </Row>

          <div className='section-wrapper'>
            <Container>
              <Row className='about-us-sub-sec sub-1 center-align'>
                <Col>
                  <h3 className='about-us-call-to-action-sub center-align'>
                    Our mission is to support and guide individuals who possess
                    a hunger and passion to grow their careers. We wanted to
                    help those from non-target schools and non-traditional
                    backgrounds by leveraging our background and experience to
                    be the Nerds they could follow and learn from
                  </h3>
                </Col>
              </Row>
            </Container>
          </div>

          <Row className='about-us-end center-align grey lighten-4'>
            <Col>
              <h3 className='about-us-call-end center-align'>
                We've helped thousands secure offers from top companies
                including Salesforce, Microsoft, Deloitte, Slalom, and many
                more!
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
