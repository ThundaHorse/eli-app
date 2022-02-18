import React from "react";
import "../styles/pages/plansAndPricing.scss";
import { Container, Col, Button, Row } from "react-bootstrap";
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
        "Assistance on basic technical needs"
      ],
      bgColor: "cyan lighten-5"
    },
    {
      title: "Resume Package",
      pricing: "99",
      validPeriod: "Valid for one month",
      planIntro: "Perfect to get started on your career journey!",
      planDescription: [
        "1-on-1 guidance with a career professional",
        "In-depth review of current resume",
        "Highlight key strengths catered towards desired industry"
      ],
      bgColor: "grey darken-4 text-white"
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
        "Counsels on how to strengthen areas of weakness"
      ],
      bgColor: "grey darken-4 text-white"
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
        "Resume review"
      ],
      bgColor: "cyan lighten-5"
    }
  ];

  const renderSections = () => {
    return (
      <>
        {plans.map((plan, index) => (
          <Container className={`plan-section ${plan.bgColor}`} fluid>
            <Row className='plan-section-row container valign-wrapper h-100'>
              {index % 2 === 0 ? (
                <>
                  <Col className='push-l1'>
                    <h4 className='plan-title mb-4'>{plan.title}</h4>
                    <h5 className='plan-price'>
                      ${plan.pricing}{" "}
                      <span className='plan-valid-period'>
                        {plan.validPeriod}
                      </span>
                    </h5>

                    <Button variant='primary' className='mt-4'>
                      Book now
                    </Button>
                  </Col>

                  <Col className='mt-3'>
                    <h6 className='plan-intro'>{plan.planIntro}</h6>
                    <hr />
                    <div className='plan-description'>
                      <ul className='plan-features'>
                        {plan.planDescription.map((des, idx) => (
                          <li key={idx}>{des}</li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                </>
              ) : (
                <>
                  <Col className='mt-3'>
                    <h6 className='plan-intro'>{plan.planIntro}</h6>
                    <hr />
                    <div className='plan-description'>
                      <ul className='plan-features'>
                        {plan.planDescription.map((des, idx) => (
                          <li key={idx}>{des}</li>
                        ))}
                      </ul>
                    </div>
                  </Col>

                  <Col className='push-l1'>
                    <h4 className='plan-title mb-4'>{plan.title}</h4>
                    <h5 className='plan-price'>
                      ${plan.pricing}{" "}
                      <span className='plan-valid-period'>
                        {plan.validPeriod}
                      </span>
                    </h5>

                    <Button variant='primary' className='mt-4'>
                      Book now
                    </Button>
                  </Col>
                </>
              )}
            </Row>
          </Container>
        ))}
      </>
    );
  };

  return (
    <>
      <Container id='plan-and-pricing' fluid>
        <div className='plan-and-pricing-wrapper cyan lighten-5'>
          <Row>
            <Col className='text-center'>
              <h1 className='plan-and-pricing-title'>
                Choose your pricing plan
              </h1>
            </Col>
          </Row>

          <Animated
            animationIn='fadeInUp'
            animationOut='fadeOutDown'
            animationInDuration={1000}
            animationOutDuration={1000}
            isVisible={true}
          >
            {renderSections()}
          </Animated>
        </div>
      </Container>
    </>
  );
};
