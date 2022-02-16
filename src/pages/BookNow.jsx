import React from 'react';
import '../styles/pages/bookNow.scss';
import { Container, Col, Button, Row, Tab, Nav } from 'react-bootstrap';

export const BookNow = () => {
  return (
    <>
      <Container id='book-now'>
        <Row className='mt-4 mb-4'>
          <Col className='text-center'>
            <h1 className='book-now-title'>Our Services</h1>
          </Col>
        </Row>

        <Tab.Container id='services-list' defaultActiveKey='first'>
          <Row>
            <Col className='text-center'>
              <Nav variant='tabs' className='flex-column'>
                <Nav.Item>
                  <Nav.Link eventKey='first'>Package 1</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col className='text-center'>
              <Nav variant='tabs' className='flex-column'>
                <Nav.Item>
                  <Nav.Link eventKey='second'>Package 2</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

              <Col className='text-center'>
                <Nav variant='tabs' className='flex-column'>
                  <Nav.Item>
                    <Nav.Link eventKey='third'>Package 3</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
          </Row>

          <Row className='service-descriptions mt-4'>
            <Col>
              <Tab.Content className='mt-4'>
                <Tab.Pane eventKey="first">
                  <Row xs='auto' sm='auto' lg={2} md={2}>
                    <Col className='my-auto'>
                      <img
                        src='https://static.wixstatic.com/media/11062b_2cf42e9a12034a169cc52ca052e1a567~mv2.jpg/v1/fill/w_1090,h_1090,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/11062b_2cf42e9a12034a169cc52ca052e1a567~mv2.webp'
                        className='service-image'
                        alt='service-1-img' />
                    </Col>

                    <Col className='my-auto'>
                      <h1>Resume review starter package</h1>
                      <p>1hr</p>
                      <p>$65</p>
                      <Button variant={'primary'}>Book Now</Button>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row xs='auto' sm='auto' lg={2} md={2}>
                    <Col className='my-auto'>
                      <img
                        src='https://static.wixstatic.com/media/690e5c88a9d14c62952dca57af039fdc.jpg/v1/fill/w_1090,h_1090,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/690e5c88a9d14c62952dca57af039fdc.webp'
                        className='service-image'
                        alt='service-2-img' />
                    </Col>

                    <Col className='my-auto'>
                      <h1>Comprehensive Professional Package</h1>
                      <p>1hr</p>
                      <p>$99</p>
                      <Button variant={'primary'}>Book Now</Button>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                    <Row xs='auto' sm='auto' lg={2} md={2}>
                      <Col className='my-auto'>
                        <img
                          src='https://static.wixstatic.com/media/nsplsh_3761616b5a64496c347667~mv2_d_6016_4000_s_4_2.jpg/v1/fill/w_1090,h_1090,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/nsplsh_3761616b5a64496c347667~mv2_d_6016_4000_s_4_2.webp'
                          className='service-image'
                          alt='service-3-img' />
                      </Col>

                      <Col className='my-auto'>
                        <h1>Mock Interview Comprehensive Package</h1>
                        <p>1hr</p>
                        <p>$149</p>
                        <Button variant={'primary'}>Book Now</Button>
                      </Col>
                    </Row>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </>
  );
};
