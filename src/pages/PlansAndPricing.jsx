import React from "react";
import "../styles/pages/plansAndPricing.scss";
import { Container, Col, Button, Row } from "react-bootstrap";
import { Card } from "react-materialize";
import { Animated } from "react-animated-css";

export const PlansAndPricing = () => {
  const plans = [
    {
      title: "Help me Package",
      pricing: "9.99",
      validPeriod: "Every month",
      planIntro: "Having trouble navigating your work environment?",
      planDescription: [
        "One in person 1 hour session a month",
        "24/7 access to a career professional",
        "Consulting on navigation of corporate bureaucracy",
        "Assistance on basic technical needs",
      ],
    },
    {
      title: "Resume Package",
      pricing: "99",
      validPeriod: "Valid for one month",
      planIntro: "Perfect to get started on your career journey!",
      planDescription: [
        "1-on-1 guidance with a career professional",
        "In-depth review of current resume",
        "Highlight key strengths catered towards desired industry",
      ],
    },
    {
      title: "Comprehensive",
      pricing: "125",
      validPeriod: "Valid for one month",
      planIntro: "Looking for a promotion? Start here!",
      planDescription: [
        "1-on-1 session with a career coach",
        "Perform personality and skills assessment",
        "Recommend additional education to achieve career goals",
        "Counsels on how to strengthen areas of weakness",
      ],
    },
    {
      title: "Mock Interview",
      pricing: "149",
      validPeriod: "Valid for one week",
      planIntro: "Ready to ace your interview? This is for you",
      planDescription: [
        "Recorded live session from the interviewer",
        "Feedback and suggestion on areas of focus",
        "Receive insights to a successful interview response",
        "Resume review",
      ],
    },
  ];

  const renderPlans = () => {
    return (
      <>
        {plans.map((plan, index) => (
          <Card
            key={index}
            className='blue-grey darken-1 col large hoverable'
            textClassName='white-text'
            title={plan.title}
          >
            <div className='card-content'>
              <hr />
              <div className='pricing-info text-center'>
                <h5 className='plan-price'>${plan.pricing}</h5>
                <span className='plan-valid-period'>{plan.validPeriod}</span>
              </div>
              <hr />
              <div className='plan-description mt-4'>
                {plan.planDescription.map((des, idx) => (
                  <p key={idx}>{des}</p>
                ))}
              </div>
            </div>

            <div className='card-action grey darken-2'>
              <Button
                variant={"primary"}
                className='book-service waves-effect waves-light float-end'
              >
                Book Now
              </Button>
            </div>
          </Card>
        ))}
      </>
    );
  };

  return (
    <>
      <Container id='book-now' fluid>
        <div className='book-wrapper'>
          <Row>
            <Col className='text-center'>
              <h1 className='book-now-title'>Choose your pricing plan</h1>
            </Col>
          </Row>

          <Animated
            animationIn='fadeInUp'
            animationOut='fadeOutDown'
            animationInDuration={1000}
            animationOutDuration={1000}
            isVisible={true}
          >
            <Row className='packages-row gap-3'>{renderPlans()}</Row>
          </Animated>
        </div>
      </Container>
    </>
  );
};
