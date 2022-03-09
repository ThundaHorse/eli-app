import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export const Program = () => {
  const location = useLocation();
  const [plan, setPlan] = useState({
    title: "",
    planIntro: "",
    pricing: "",
    validPeriod: "",
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
        <Container>
          <Row className='valign-wrapper plan-row h-100'>
            <Col className='push-l1'>
              <h4 className='plan-title mb-4'>{plan.title}</h4>
              <h5 className='plan-price'>
                ${plan.pricing}{" "}
                <span className='plan-valid-period'>{plan.validPeriod}</span>
              </h5>
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
          </Row>
        </Container>
      </>
    );
  };

  return (
    <Container id='plan-and-pricing' fluid>
      <>{renderPlan()}</>
    </Container>
  );
};
