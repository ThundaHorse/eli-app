import React from "react";
import "../styles/pages/bookNow.scss";
import { Container, Col, Button, Row, Tab, Tabs } from "react-bootstrap";

export const BookNow = () => {
  return (
    <>
      <Container id='book-now'>
        <Row className='mt-4 mb-4'>
          <Col className='text-center'>
            <h2 className='book-now-title'>Our Services</h2>
          </Col>
        </Row>

        <Tabs
          defaultActiveKey='first'
          id='services-tabs'
          className='mb-3'
          transition
        >
          <Tab eventKey='first' title='Package 1'>
            <Row className='mt-4' xs='auto' sm='auto' lg={2} md={2}>
              <Col className='my-auto'>
                <img
                  src='/assets/images/review.png'
                  className='service-image'
                  alt='service-1-img'
                />
              </Col>

              <Col>
                <div className='service-description-wrapper p-4'>
                  <h1 className='service-title'>
                    Resume review starter package
                  </h1>

                  <p className='service-description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis id iste nisi harum eum reiciendis ea aut maxime
                    officiis labore, non voluptatum nostrum! Saepe officia
                    earum, sit doloribus exercitationem aliquid.
                  </p>

                  <div className='service-cost'>
                    <span className='service-rate'>$65 / </span>
                    <span className='service-time'>hr</span>
                  </div>

                  <Button className='book-service' variant={"primary"}>
                    Book Now
                  </Button>
                </div>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey='second' title='Package 2'>
            <Row className='mt-4' xs='auto' sm='auto' lg={2} md={2}>
              <Col className='my-auto'>
                <img
                  src='/assets/images/comprehensive.png'
                  className='service-image'
                  alt='service-2-img'
                />
              </Col>

              <Col>
                <div className='service-description-wrapper p-4'>
                  <h1 className='service-title'>
                    Comprehensive Professional Package
                  </h1>

                  <p className='service-description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis id iste nisi harum eum reiciendis ea aut maxime
                    officiis labore, non voluptatum nostrum! Saepe officia
                    earum, sit doloribus exercitationem aliquid.
                  </p>

                  <div className='service-cost'>
                    <span className='service-rate'>$99 / </span>
                    <span className='service-time'>hr</span>
                  </div>

                  <Button className='book-service' variant={"primary"}>
                    Book Now
                  </Button>
                </div>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey='third' title='Package 3'>
            <Row className='mt-4' xs='auto' sm='auto' lg={2} md={2}>
              <Col className='my-auto'>
                <img
                  src='/assets/images/mockInterview.png'
                  className='service-image'
                  alt='service-3-img'
                />
              </Col>

              <Col>
                <div className='service-description-wrapper p-4'>
                  <h1 className='service-title'>
                    Mock Interview Comprehensive Package
                  </h1>

                  <p className='service-description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis id iste nisi harum eum reiciendis ea aut maxime
                    officiis labore, non voluptatum nostrum! Saepe officia
                    earum, sit doloribus exercitationem aliquid.
                  </p>

                  <div className='service-cost'>
                    <span className='service-rate'>$149 / </span>
                    <span className='service-time'>hr</span>
                  </div>

                  <Button className='book-service' variant={"primary"}>
                    Book Now
                  </Button>
                </div>
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};
