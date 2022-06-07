/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import '../styles/pages/successStories.scss';
import axios from 'axios';
import { Animated } from 'react-animated-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Container, Spinner } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

// SwiperJs Styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

export const SuccessStories = () => {
  const [reviews, setReviews] = useState({ reviews: [] });

  useEffect(() => {
    const fetchGoogleReviews = async () => {
      const url = process.env.REACT_APP_REVIEW_URL;

      const cachedReviews = JSON.parse(localStorage.getItem('reviews'));
      let result;

      if (cachedReviews) {
        result = cachedReviews;
      } else {
        result = await axios(url);
        localStorage.setItem('reviews', JSON.stringify(result));
      }
      setReviews(result.data.reviews);
    };

    fetchGoogleReviews();
  }, []);

  const renderReviews = () => {
    return (
      <>
        {reviews.length ? (
          <Swiper
            pagination={{
              clickable: true,
            }}
            navigation={true}
            loop={true}
            modules={[Pagination, Navigation]}
            className='reviews-section'
          >
            {reviews.map((rev, idx) => (
              <SwiperSlide key={idx}>
                <div className='row'>
                  <div className='col'>
                    <p className='review-ratings'>
                      <span className='em'>"</span>
                      {[...Array(rev.reviewRating)].map((e, i) => (
                        <FontAwesomeIcon
                          key={i}
                          className='review-rating'
                          icon={faStar}
                        />
                      ))}
                      <span className='em'>"</span>
                    </p>

                    <div className='user-review'>
                      <img src={rev.reviewAuthorImage} alt={rev.reviewAuthor} />
                      <p className='review-author text-black'>
                        {rev.reviewAuthor}
                      </p>
                    </div>
                  </div>
                </div>

                <div className='row'>
                  <div className='col'>
                    <div className='review-wrapper'>
                      <p className='review-body'>
                        <FontAwesomeIcon
                          icon={faQuoteLeft}
                          className='review-body-splash'
                        />
                        {rev.reviewText}
                      </p>
                    </div>
                  </div>
                </div>

                <br />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <>
            <SwiperSlide>
              <div className='row'>
                <div className='col'>
                  <Spinner
                    className='mx-2'
                    animation='grow'
                    variant='primary'
                  />
                  <Spinner
                    className='mx-2'
                    animation='grow'
                    variant='secondary'
                  />
                  <Spinner
                    className='mx-2'
                    animation='grow'
                    variant='success'
                  />
                  <Spinner className='mx-2' animation='grow' variant='danger' />
                </div>
              </div>

              <div className='row'>
                <div className='col text-center'>
                  <p>Loading...</p>
                </div>
              </div>

              <br />
            </SwiperSlide>
          </>
        )}
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
        <Container id='success-stories-page' fluid>
          <Row className='success-stories-hero blue lighten-5'>
            <Col className='text-center'>
              <div className='intro-wrapper'>
                <h2 className='intro'>
                  <img
                    className='splash-1'
                    src='/assets/images/success.png'
                    alt='header-splash'
                  />
                  Follow the Nerd Reviews
                  <img
                    className='splash-2'
                    src='/assets/images/success.png'
                    alt='header-splash'
                  />
                </h2>
                <h5 className='sub'>Success Stories</h5>
                <p className='outro'>Proven results and testimonials.</p>
              </div>
            </Col>
          </Row>

          <div className='reviews-section'>
            <Container>{renderReviews()}</Container>
          </div>
        </Container>
      </Animated>
    </>
  );
};
