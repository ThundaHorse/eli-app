import React from 'react';
import '../styles/pages/home.scss';
import { Card, Container, Col, Button, Row } from 'react-bootstrap';

export const Home = () => {
  return (
    <>
      <Container id='intro-opening-1' fluid>
        <Row id='intro-hero'>
          <Col md='6' lg='6' className='p-0 intro-image-1'>
            <img
              className='home-image-1'
              src='https://static.wixstatic.com/media/11062b_6743da5900054f1f8e69f53302930a6af000.jpg/v1/fill/w_953,h_844,al_c,q_85,usm_0.33_1.00_0.00/11062b_6743da5900054f1f8e69f53302930a6af000.webp'
              alt='intro'
            />
          </Col>
          <Col className='mt-4 my-auto'>
            <div className='intro-text-wrapper'>
              <h1 className='intro-call-to-action'>FOLLOW THE NERD</h1>
              <br />
              <p>
                With our professional coaching services, you’ll have access to:
              </p>
              <ul className='intro-list'>
                <li>
                  One-on-one personal session with a career professional with
                  industry experience.
                </li>
                <li>A custom tailored resume that tells your career story.</li>
                <li>Double the interviews, guaranteed!</li>
              </ul>

              <Button href='/book-online' variant={'primary'} size={'lg'}>
                Book Now
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Container id='intro-opening-2' fluid>
        <Row id='intro-opening'>
          <Col md='6' lg='6' className='my-auto p-4 intro-heading-2'>
            <h1>YOU ARE IN GOOD HANDS</h1>
            <p>
              Atlanta's leading career consulting service. You’ll be in good
              hands with our professional writers. Our team of writers has
              expertise in more than 65 industries and includes certified career
              coaches, recruiters, and experienced hiring professionals.
            </p>

            <Button href='/plans-pricing' variant={'light'} size={'lg'}>
              Learn More
            </Button>
          </Col>
          <Col className='text-center p-0 intro-image-2'>
            <img
              className='home-image-2'
              src='https://static.wixstatic.com/media/nsplsh_666145665743644f4b4967~mv2_d_6016_4016_s_4_2.jpg/v1/fill/w_1906,h_1760,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01/nsplsh_666145665743644f4b4967~mv2_d_6016_4016_s_4_2.webp'
              alt='intro-2'
            />
          </Col>
        </Row>
      </Container>

      <Container id='intro-companies' fluid>
        <Row id='companies-heading'>
          <Col className='text-center p-0 mt-4'>
            <h2 className='companies-heading'>
              WE HAVE CONSULTANTS FROM ALL INDUSTRIES
            </h2>
          </Col>
        </Row>

        <Row className='mx-auto'>
          <Col className='text-center'>
            <img
              className='homepage-about-companies'
              src='https://static.wixstatic.com/media/f4ad60_dec1d9a710d545d6b0bb269d919683bf~mv2.png/v1/fill/w_602,h_223,al_c,q_85,usm_0.66_1.00_0.01/adp-payroll-logo_edited.webp'
              alt='ADP'
            />
            <br />
            Experienced analytics professionals to educate you on data
            visualization, data science and data engineering. Automatic Data
            Processing
          </Col>
          <Col className='text-center'>
            <img
              className='homepage-about-companies'
              src='https://static.wixstatic.com/media/f4ad60_e84f4253f77747c79886479b94aefad3~mv2.jpg/v1/fill/w_602,h_316,al_c,q_80,usm_0.66_1.00_0.01/default.webp'
              alt='salesforce'
            />
            <br />
            Architects driven to educate and grow your knowledge beyond
            Salesforce Trailhead to fully understand the fundamentals and
            principles of Salesforce architecture. Salesforce
          </Col>
          <Col className='text-center'>
            <img
              className='homepage-about-companies'
              src='https://static.wixstatic.com/media/f4ad60_fc5cc435e7894f8c83f24a586921a6dc~mv2.jpg/v1/fill/w_520,h_520,al_c,q_80,usm_0.66_1.00_0.01/Delta-Logo.webp'
              alt='delta'
            />
            <br />
            Strategy consultants focused in growing your knowledge and
            understanding of pricing and marketing strategies. Delta Airlines
          </Col>
        </Row>
      </Container>

      <Container id='how-it-works' fluid>
        <Row className='how-it-works-intro'>
          <Col className='text-center'>
            <h1 className='how-it-works-heading'>HOW IT WORKS</h1>
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
              </Card.Body>
            </Card>
          </li>
        </ul>
      </Container>
    </>
  );
};
