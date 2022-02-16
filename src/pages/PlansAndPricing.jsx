import React from "react";
import "../styles/pages/plansAndPricing.scss";
import { Card, Container, Col, Button, Row } from "react-bootstrap";

export const PlansAndPricing = () => {
  return (
    <>
      <Container id='book-now' fluid>
        <Row className='mt-4 mb-4'>
          <Col className='text-center'>
            <h1 className='book-now-title'>Choose your pricing plan</h1>
          </Col>
        </Row>

        <ul className='container pricing-list d-sm-block d-md-flex'>
          <li>
            <Card border='secondary' className='col m-3'>
              <Card.Body>
                <Card.Title>Help Me Package</Card.Title>
                <Card.Text>
                  <div className='package-pricing'>
                    <div className='price'>
                      <span className='denomination'>$</span>9.99
                    </div>
                    <div className='pricing-interval text-muted'>
                      Every month
                    </div>
                    <div className='pricing-blurb'>
                      Having trouble navigating your work environment?
                    </div>
                  </div>

                  <Button
                    variant={"primary"}
                    className='select-page-button'
                    size={"md"}
                  >
                    Select
                  </Button>
                </Card.Text>

                <hr />

                <Card.Text>
                  <div className='package-description'>
                    <ul className='package-content-list'>
                      <li>One in person 1 hour session a month</li>
                      <li>24/7 access to a career professional</li>
                      <li>Consulting on navigation of corporate bureaucracy</li>
                      <li>Assistance on basic technical needs</li>
                    </ul>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </li>
          <li>
            <Card border='secondary' className='col m-3'>
              <Card.Body>
                <Card.Title>Resume Review</Card.Title>
                <Card.Text>
                  <div className='package-pricing'>
                    <div className='price'>
                      <span className='denomination'>$</span>99
                    </div>
                    <div className='pricing-blurb'>
                      Perfect to get started on your career journey!
                    </div>
                    <div className='pricing-interval text-muted'>
                      Valid for one month
                    </div>
                  </div>

                  <Button
                    variant={"primary"}
                    className='select-page-button'
                    size={"md"}
                  >
                    Select
                  </Button>
                </Card.Text>

                <hr />

                <Card.Text>
                  <div className='package-description'>
                    <ul className='package-content-list'>
                      <li>1-on-1 guidance with a career professional</li>
                      <li>In-depth review of current resume</li>
                      <li>
                        Highlight key strengths catered towards desired industry
                      </li>
                    </ul>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </li>
          <li>
            <Card border='secondary' className='col m-3'>
              <Card.Body>
                <Card.Title>Comprehensive</Card.Title>
                <Card.Text>
                  <div className='package-pricing'>
                    <div className='price'>
                      <span className='denomination'>$</span>125
                    </div>
                    <div className='pricing-blurb'>
                      Looking for a promotion? Start here!
                    </div>
                    <div className='pricing-interval text-muted'>
                      Valid for one month
                    </div>
                  </div>

                  <Button
                    variant={"primary"}
                    className='select-page-button'
                    size={"md"}
                  >
                    Select
                  </Button>
                </Card.Text>

                <hr />

                <Card.Text>
                  <div className='package-description'>
                    <ul className='package-content-list'>
                      <li>1-on-1 session with a career coach</li>
                      <li>Perform personality and skills assessment</li>
                      <li>
                        Recommend additional education to achieve career goals
                      </li>
                      <li>Counsels on how to strengthen areas of weakness</li>
                      <li>
                        Help grow successful habits to advance job advancement
                      </li>
                    </ul>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </li>
          <li>
            <Card border='secondary' className='col m-3'>
              <Card.Body>
                <Card.Title>Mock Interview</Card.Title>
                <Card.Text>
                  <div className='package-pricing'>
                    <div className='price'>
                      <span className='denomination'>$</span>149
                    </div>
                    <div className='pricing-blurb'>
                      Ready to ace your interview? This is for you.
                    </div>
                    <div className='pricing-interval text-muted'>
                      Valid for one week
                    </div>
                  </div>

                  <Button
                    variant={"primary"}
                    className='select-page-button'
                    size={"md"}
                  >
                    Select
                  </Button>
                </Card.Text>

                <hr />

                <Card.Text>
                  <div className='package-description'>
                    <ul className='package-content-list'>
                      <li>Recorded live session from the interviewer</li>
                      <li>Feedback and suggestion on areas of focus</li>
                      <li>
                        Receive insights to a successful interview response
                      </li>
                      <li>Resume review</li>
                    </ul>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </li>
        </ul>
      </Container>
    </>
  );
};
