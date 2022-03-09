import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { Container, Col, Button, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

export const Program = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const [plan, setPlan] = useState({
    title: "",
    pricing: "",
    validPeriod: "",
    planIntro: "",
    planDescription: [],
  });

  const plans = {
    helpMe: {
      title: "Help me Package",
      pricing: "50",
      validPeriod: "Every month",
      planIntro:
        "Join our FTN community where you can grow with our Nerds and previous clients",
      planDescription: [
        "Assistance with navigating corporate bureaucracy",
        "24/7 access to all Nerds to guide you through any escalations or issues you may face on a day to day basis",
        "Guidance on key deliverables to ensure your quality of work reflects your professional brand",
        "Assistance on basic technical needs",
      ],
    },
    resumePackage: {
      title: "Resume Package",
      pricing: "500",
      validPeriod: "Valid for one month",
      planIntro:
        "Receive a FTN certified resume to land you the job of your dreams",
      planDescription: [
        "Understand and learn how to phrase and document key points needed for resumes for future knowledge",
        "In-depth review of current resume",
        "1 on 1 sessions with your personal Nerd to do an in depth review of your resume and roadmap a strategy for success on your desired role or industry",
      ],
    },
    findMeAJob: {
      title: "Find me a Job!",
      pricing: "700",
      validPeriod: "Valid for one month",
      planIntro:
        "A personal Nerd to be by your side through the start to end process of your job search",
      planDescription: [
        "1 on 1 sessions with your personal Nerd to do an in depth review of your resume and roadmap a strategy for success on your desired role or industry",
        "Bi-weekly interview prep sessions to ensure your on top of all potential behavioral questions that could be asked ",
        "Consultation on navigating offers and identify your best fit",
      ],
    },
    mockInterview: {
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
    portfolioRevamp: {
      title: "Portfolio Revamp",
      pricing: "800",
      validPeriod: "Until completion",
      planIntro: "Lorem Ipsum",
      planDescription: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
  };

  const fetchPlan = () => {
    switch (location) {
      case "/help-me":
        setPlan(plans.helpMe);
        break;
      case "/resume-package":
        setPlan(plans.resumePackage);
        break;
      case "/find-me-a-job":
        setPlan(plans.findMeAJob);
        break;
      case "/mock-interview":
        setPlan(plans.mockInterview);
        break;
      case "/portfolio-revamp":
        setPlan(plans.portfolioRevamp);
        break;
      default:
        navigate("/plans-pricing");
    }
  };

  useEffect(() => {
    fetchPlan();
  }, []);

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
