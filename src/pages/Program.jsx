import React, { useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import '../styles/pages/program.scss';

export const Program = () => {
  const location = useLocation();
  const [plan, setPlan] = useState({
    title: '',
    planIntro: '',
    pricing: '',
    validPeriod: '',
    planDescription: [],
  });

  useEffect(() => {
    const loadPlan = () => {
      setPlan(location.state);
    };

    loadPlan();
  });

  const renderPlan = () => {
    return (
      <>
        <Row className='plan-title-and-price'>
          <Col className='text-center'>
            <h4 className='plan-title'>{plan.title}</h4>
            <h5 className='plan-price'>
              ${plan.pricing}{' '}
              <span className='plan-valid-period'>{plan.validPeriod}</span>
            </h5>
          </Col>
        </Row>

        <Row className='plan-row'>
          <Col>
            <h6 className='plan-intro text-center flow-text'>
              {plan.planIntro}
            </h6>
          </Col>

          <Col>
            <blockquote>
              <div className='plan-description'>
                <ul className='plan-features'>
                  {plan.planDescription.map((des, idx) => (
                    <li key={idx}>{des}</li>
                  ))}
                </ul>
              </div>
            </blockquote>
          </Col>
        </Row>
      </>
    );
  };

  return (
    <Container id='plan-page'>
      <div className='plan-wrapper'>{renderPlan()}</div>
    </Container>
  );
};
