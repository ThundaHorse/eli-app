import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import "./footer.scss";

export const PageFooter = () => {
  const renderPlanLinks = () => {
    return (
      <>
        <div className='footer-link'>
          <Link
            to={"/help-me"}
            state={{
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
            }}
          >
            Help me Package
          </Link>
        </div>
        <div className='footer-link'>
          <Link
            to={"/resume-package"}
            state={{
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
            }}
          >
            Resume Package
          </Link>
        </div>
        <div className='footer-link'>
          <Link
            to={"/find-me-a-job"}
            state={{
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
            }}
          >
            Find me a Job!
          </Link>
        </div>
        <div className='footer-link'>
          <Link
            to={"/mock-interview"}
            state={{
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
            }}
          >
            Mock Interview
          </Link>
        </div>
        <div className='footer-link'>
          <Link
            to={"/portfolio-revamp"}
            state={{
              title: "Portfolio Revamp",
              pricing: "800",
              validPeriod: "Until completion",
              planIntro: "Lorem Ipsum",
              planDescription: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
            }}
          >
            Portfolio Revamp
          </Link>
        </div>
      </>
    );
  };

  return (
    <>
      <div className='footer'>
        <Container>
          <div className='footer-flex'>
            <div className='footer-column first'>
              <div className='logo-footer'>
                <img
                  src='https://assets-global.website-files.com/6107d4b379e3293a0c62f588/612a374d9b510908b06271a9_wonsulting%20logo%20footer.png'
                  loading='lazy'
                  alt='Wonsulting'
                ></img>
              </div>
              First
            </div>
            <div className='footer-column'>
              <div className='footer-title'>Information</div>
              <div className='footer-link'>Something</div>
              <div className='footer-link'>Something</div>
              <div className='footer-link'>Something</div>
            </div>
            <div className='footer-column'>
              <div className='footer-title'>Programs</div>
              {renderPlanLinks()}
            </div>
            <div className='footer-column last'>
              <h3 className='footer-title'>CONTACT</h3>
              <div className='footer-body'>
                <FontAwesomeIcon icon={faEnvelope} />
                <a
                  href='mailto:followthenerd1@gmail.com'
                  className='footer-mail'
                >
                  followthenerd1@gmail.com
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
