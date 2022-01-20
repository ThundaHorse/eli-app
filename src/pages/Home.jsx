import React from 'react';
import '../styles/pages/home.scss';
import { Row, Col } from 'react-bootstrap';

export const Home = () => {
  return (
    <>
      <Row>
        <Col className='text-center p-0'>
          <img
            className='home-image'
            src='https://static.wixstatic.com/media/11062b_6743da5900054f1f8e69f53302930a6af000.jpg/v1/fill/w_953,h_844,al_c,q_85,usm_0.33_1.00_0.00/11062b_6743da5900054f1f8e69f53302930a6af000.webp'
            alt='intro'
          />
        </Col>
        <Col className='text-center p-0 my-auto'>
          <h1>FOLLOW THE NERD</h1>
          <br />
          <p>With our professional coaching services, you’ll have access to:</p>
          <ul>
            <li>
              One-on-one personal session with a career professional with
              industry experience.
            </li>
            <li>A custom tailored resume that tells your career story.</li>
            <li>Double the interviews, guaranteed!</li>
          </ul>
        </Col>
      </Row>

      <Row>
        <Col className='text-center p-0 my-auto'>
          <h1>YOU ARE IN GOOD HANDS</h1>
          <p>
            Atlanta's leading career consulting service. You’ll be in good hands
            with our professional writers. Our team of writers has expertise in
            more than 65 industries and includes certified career coaches,
            recruiters, and experienced hiring professionals.
          </p>
        </Col>
        <Col className='text-center p-0'>
          <img
            className='home-image'
            src='https://static.wixstatic.com/media/nsplsh_666145665743644f4b4967~mv2_d_6016_4016_s_4_2.jpg/v1/fill/w_1906,h_1760,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01/nsplsh_666145665743644f4b4967~mv2_d_6016_4016_s_4_2.webp'
            alt='intro-2'
          />
        </Col>
      </Row>

      <Row>
        <Col className='text-center p-0 mt-4'>
          <h1>WE HAVE CONSULTANTS FROM ALL INDUSTRIES</h1>
        </Col>
      </Row>
    </>
  );
};
