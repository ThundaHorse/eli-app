import React from 'react';
import '../styles/pages/home.scss';
import { Container, Col, Button, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faCoffee, faCheckDouble } from '@fortawesome/free-solid-svg-icons'

export const Home = () => {
  return (
    <>
      <Container id='intro-opening-1' fluid>
        <Row id='intro-hero'>
          <Col md='8' lg='8' className='mt-4 mb-4'>
            <div className='intro-image-1'>
              <img src='/assets/images/nerd1.png' alt='hero1' />
            </div>
          </Col>
          <Col className='my-auto hero-1'>
            <div className='intro-text-wrapper'>
              <h1 className='intro-call-to-action'>Follow the Nerd</h1>
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

      <hr />

      <Container id='intro-opening-2' fluid>
        <Row id='intro-opening'>
          <Col className='my-auto intro-heading-2 p-4'>
            <h1>You're in good hands</h1>
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
          <Col md='7' lg='7' className='mt-4 mb-4'>
            <div className='intro-image-2'>
              <img src='/assets/images/hero2.png' alt='hero2' />
            </div>
          </Col>
        </Row>
      </Container>

      <hr />

      <Container id='intro-companies'>
        <Row id='companies-heading'>
          <Col className='text-center p-2 mt-4 companies-intro'>
            <h2 className='companies-heading'>
              We have consultants from all industries
            </h2>
          </Col>
        </Row>

        <Row className='mx-auto'>
          <Col className='consultant-desc text-center m-2 p-4'>
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
          <Col className='consultant-desc text-center m-2 p-4'>
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
          <Col className='consultant-desc text-center m-2 p-4'>
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

      <hr />

      <Container id='how-it-works'>
        <Row className='how-it-works-intro'>
          <Col md='6' lg='6'>
            <img src='/assets/images/how-it-works-1.png' className='how-it-works-img' alt='how-it-works-1' />
          </Col>
          <Col className='mx-2'>
            <h1 className='how-it-works-heading'>How it works</h1>
            <p className='how-it-works-description'>Based on your needs, we tailor our services to exceed expectations</p>

            <ul className='services-list d-sm-block d-md-flex p-0'>
              <li>
                <div className='service-package'>
                  <FontAwesomeIcon className='service-icon' icon={faCirclePlay} />
                  <div className='service-info'>
                    <span className='package-title'>
                      Resume review starter package
                    </span> | $65/hr</div>
                </div>
              </li>
              <li>
                <div className='service-package'>
                  <FontAwesomeIcon className='service-icon' icon={faCoffee} />
                  <div className='service-info'>
                    <span className='package-title'>
                      Comprehensive professional package
                    </span> | $99/hr</div>
                </div>
              </li>
              <li>
                <div className='service-package'>
                  <FontAwesomeIcon className='service-icon' icon={faCheckDouble} />
                  <div className='service-info'>
                    <span className='package-title'>
                      Mock interview comprehensive package
                    </span> | $149/hr</div>
                </div>
              </li>
            </ul>

            <Button href='/plans-pricing' variant={'secondary'} size={'lg'}>
              Plans & Pricing
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
