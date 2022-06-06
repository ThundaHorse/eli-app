/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import '../styles/pages/about.scss';
import { Row, Col, Container, Card } from 'react-bootstrap';
import axios from 'axios';
import { Animated } from 'react-animated-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const About = () => {
  const getGoogleReviews = async () => {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${process.env.REACT_APP_LOCATION_ID}&key=${process.env.REACT_APP_CALENDAR_API_KEY}`;

    await axios.get(url).then((res) => {
      console.log(res.data);

      if (res.data.status === 'OK') {
        const reviews = res.data.result.reviews;

        reviews.forEach((rev) => {
          console.log(rev.testimonial);
        });
      }
    });
  };

  // useEffect(() => {
  //   getGoogleReviews();
  // }, []);

  const tempReviews = [
    {
      author_name: 'daniel226',
      author_url:
        'https://www.google.com/maps/contrib/112385172239805799680/reviews',
      language: 'en',
      profile_photo_url:
        'https://lh3.googleusercontent.com/a-/AOh14GhaJdlPYxQHO9zJURy26Q9Zl_tbs7O3vN8WE26BjQ=s128-c0x00000000-cc-rp-mo',
      rating: 5,
      relative_time_description: '3 weeks ago',
      text: 'Follow The Nerd has helped me land my dream job! I was able to receive offers from Microsoft and Amazon for a Software Engineering Position!',
      time: 1652413751,
    },
    {
      author_name: 'John Yang',
      author_url:
        'https://www.google.com/maps/contrib/113510864273756076239/reviews',
      language: 'en',
      profile_photo_url:
        'https://lh3.googleusercontent.com/a/AATXAJzWRhuNR3t8ymAfGo6mW_5mZH76drIZZ7mTMJhl=s128-c0x00000000-cc-rp-mo-ba3',
      rating: 5,
      relative_time_description: 'in the last week',
      text: "Where do I begin?!? Follow the Nerd, and more specifically Elliote Baek, has been extremely helpful in my drive and understanding of how effective resumes are written. From pointers to how to dress and speak in interviews all the way to writing resumes and finding confidence in my career path Follow the Nerd has been instrumental in helping me understand the jump from being a university student to entering the corporate world. I couldn't be more grateful for the help I received and Elliote was very kind and understanding of my situation all while being super informative and effective at helping me understand the corporate workspace. If I could I would definitely award more than 5 stars!",
      time: 1654031719,
    },
    {
      author_name: 'Alin Wu',
      author_url:
        'https://www.google.com/maps/contrib/104348166098842390714/reviews',
      language: 'en',
      profile_photo_url:
        'https://lh3.googleusercontent.com/a/AATXAJyKjI6u3dd8nhbFOs-_2JBDt6_RgLIZfdY1haHQ=s128-c0x00000000-cc-rp-mo',
      rating: 5,
      relative_time_description: '2 months ago',
      text: 'Elliot assisted me in beefing up my resume to apply for jobs and I have been receiving a lot of messages on Linked In from recruiters ever since!',
      time: 1648480361,
    },
    {
      author_name: 'Isaac Kim',
      author_url:
        'https://www.google.com/maps/contrib/103832479109085270971/reviews',
      language: 'en',
      profile_photo_url:
        'https://lh3.googleusercontent.com/a-/AOh14GivbQ7XH0V9zRKWVpiWPJZPcNeL6Ic9Lj4NNJd0eg=s128-c0x00000000-cc-rp-mo',
      rating: 5,
      relative_time_description: '2 months ago',
      text: 'Follow the Nerd has elevated me into the professional world. They really care about your future success, and are passionate about helping people who want to help themselves. I highly recommend using them!',
      time: 1648273442,
    },
    {
      author_name: 'atlboi101',
      author_url:
        'https://www.google.com/maps/contrib/108154853721390308928/reviews',
      language: 'en',
      profile_photo_url:
        'https://lh3.googleusercontent.com/a/AATXAJyxT8kb07lEC38HqCEsDPQbfo4iQmPKfjj6r62t=s128-c0x00000000-cc-rp-mo',
      rating: 5,
      relative_time_description: '4 months ago',
      text: 'Excellent service, attention to detail and professional acumen second to none. Looking to go to the next level? look no further. Glass ceilings require nerds to smash.',
      time: 1642607101,
    },
    {
      author_name: 'abe kim',
      author_url:
        'https://www.google.com/maps/contrib/114427396051288301004?hl=en-US&sa=X&ved=2ahUKEwiFtorB6Jn4AhXjdd8KHZ8TBOgQvvQBegQIARAt',
      language: 'en',
      profile_photo_url:
        'https://lh3.googleusercontent.com/ogw/ADea4I7YmjHtQxt_EAhtFdQZQhQ_Q9sTtnnG9ZiCxjLi=s32-c-mo',
      rating: 5,
      relative_time_description: 'a year ago',
      text: 'Top notch coaching, they were able to help me identify weaknesses with my resume and get me interviews and a very gracious raise',
      time: 1642607101,
    },
  ];

  const renderReviewCards = () => {
    return (
      <>
        <Row>
          {tempReviews.map((rev, idx) => (
            <Col
              md='4'
              lg='4'
              className='reviews-desc-cards text-center'
              key={idx}
            >
              <div className='card blue-grey review-card'>
                <div className='card-content white-text'>
                  <img
                    src={rev.profile_photo_url}
                    className='review-avatar'
                    alt={rev.author_name}
                  />
                  <span className='review-author'>{rev.author_name}</span>
                  <p className='review-ratings'>
                    {[...Array(rev.rating)].map((e, i) => (
                      <FontAwesomeIcon
                        key={i}
                        className='review-rating'
                        icon={faStar}
                      />
                    ))}
                  </p>
                  <p className='review-body'>{rev.text}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Row>
          <a
            href='https://www.google.com/search?q=follow+the+nerd&oq=follow+&aqs=chrome.0.69i59j69i57j46i131i199i433i465i512j69i59j69i65j69i61l2j69i60.1173j0j7&sourceid=chrome&ie=UTF-8#lrd=0x88f50359cfa935ff:0xfd78f7cd046e346e,1,,,'
            target='_blank'
            rel='noreferrer'
            className='text-center mt-2'
          >
            See all reviews
          </a>
        </Row>
      </>
    );
  };

  return (
    <>
      <Animated
        animationIn='fadeIn'
        animationOut='fadeOut'
        animationDuration={1000}
        animationOutDuration={1000}
        isVisible={true}
      >
        <Container id='about-us-page' fluid>
          <div className='about-us-sec grey lighten-4'>
            <Container>
              <Row className='about-us-sec-row-1'>
                <Col className='about-sec-1'>
                  <img
                    className='about-us-intro-tools'
                    src='/assets/images/about-us-clipboard.webp'
                    alt='about-us-intro-tools'
                  />
                </Col>

                <Col className='about-sec-2'>
                  <h3 className='about-us-call-to-action'>
                    FTN is a philosophy our company stands by to enable and
                    teach clients who may not be experts or experienced in their
                    professional career.
                  </h3>
                </Col>
              </Row>
            </Container>
          </div>

          <div className='section-wrapper'>
            <Container>
              <Row className='about-us-sub-sec sub-1 center-align'>
                <Col>
                  <h3 className='about-us-call-to-action-sub center-align'>
                    Our mission is to support and guide individuals who possess
                    a hunger and passion to grow their careers. We wanted to
                    help those from non-target schools and non-traditional
                    backgrounds by leveraging our background and experience to
                    be the Nerds they could follow and learn from
                  </h3>
                </Col>
              </Row>
            </Container>
          </div>

          <Row className='about-us-end grey lighten-4'>
            <Col className='about-us-end-sec-1'>
              <h3 className='about-us-call-end flow-text'>
                We've helped thousands secure offers from top companies
                including Salesforce, Microsoft, Deloitte, Slalom, and many
                more!
              </h3>
            </Col>

            <Col className='about-us-end-sec-2'>
              <img
                className='end-image'
                src='/assets/images/superhero-about-us.svg'
                alt='about-us-end-1'
              />
            </Col>
          </Row>

          <div className='reviews-section'>{renderReviewCards()}</div>
        </Container>
      </Animated>
    </>
  );
};
