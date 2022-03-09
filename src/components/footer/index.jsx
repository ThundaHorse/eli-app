import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./footer.scss";

export const PageFooter = () => {
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
              <div className='footer-link'>
                <a href='/help-me' alt='Help Me'>
                  Help me Package
                </a>
              </div>
              <div className='footer-link'>
                <a href='/resume-package' alt='Resume Package'>
                  Resume Package
                </a>
              </div>
              <div className='footer-link'>
                <a href='/find-me-a-job' alt='Find me a Job'>
                  Find me a Job
                </a>
              </div>
              <div className='footer-link'>
                <a href='/mock-interview' alt='Mock Interview'>
                  Mock Interview
                </a>
              </div>
              <div className='footer-link'>
                <a href='/portfolio-revamp' alt='Portfolio Revamp'>
                  Portfolio Revamp
                </a>
              </div>
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
