import React from 'react';
import '../styles/pages/bookNow.scss';
import { Card, Container, Col, Button, Row } from 'react-bootstrap';

export const BookNow = () => {
  return (
    <>
      <Container id='book-now' fluid>
        <Row className='mt-4 mb-4'>
          <Col className='text-center'>
            <h1 className='book-now-title'>Our Services</h1>
          </Col>
        </Row>

        <ul className='container services-list d-sm-block d-md-flex'>
          <li>
            <Card className='col m-3'>
              <Card.Img
                variant='top'
                src='https://static.wixstatic.com/media/11062b_2cf42e9a12034a169cc52ca052e1a567~mv2.jpg/v1/fill/w_1090,h_1090,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/11062b_2cf42e9a12034a169cc52ca052e1a567~mv2.webp'
              />
              <Card.Body>
                <Card.Title>Resume Review Starter Package</Card.Title>
                <hr />
                <Card.Text>
                  1hr
                  <br />
                  $65
                </Card.Text>
                <Button variant={'primary'}>Book Now</Button>
              </Card.Body>
            </Card>
          </li>
          <li>
            <Card className='col m-3'>
              <Card.Img
                variant='top'
                src='https://static.wixstatic.com/media/690e5c88a9d14c62952dca57af039fdc.jpg/v1/fill/w_1090,h_1090,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/690e5c88a9d14c62952dca57af039fdc.webp'
              />
              <Card.Body>
                <Card.Title>Comprehensive Professional Package</Card.Title>
                <hr />
                <Card.Text>
                  1hr
                  <br />
                  $99
                </Card.Text>
                <Button variant={'primary'}>Book Now</Button>
              </Card.Body>
            </Card>
          </li>
          <li>
            <Card className='col m-3'>
              <Card.Img
                variant='top'
                src='https://static.wixstatic.com/media/nsplsh_3761616b5a64496c347667~mv2_d_6016_4000_s_4_2.jpg/v1/fill/w_1090,h_1090,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/nsplsh_3761616b5a64496c347667~mv2_d_6016_4000_s_4_2.webp'
              />
              <Card.Body>
                <Card.Title>Mock Interview Comprehensive Package</Card.Title>
                <hr />
                <Card.Text>
                  1hr
                  <br />
                  $149
                </Card.Text>
                <Button variant={'primary'}>Book Now</Button>
              </Card.Body>
            </Card>
          </li>
        </ul>
      </Container>
    </>
  );
};
