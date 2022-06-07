/* eslint-disable no-unused-vars */
import React from 'react';
import '../styles/pages/successStories.scss';
import axios from 'axios';
import { Animated } from 'react-animated-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

export const SuccessStories = () => {
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

  const renderReviews = () => {
    return (
      <>
        <Swiper
          pagination={{
            clickable: true,
          }}
          navigation={true}
          loop={true}
          modules={[Pagination, Navigation]}
          className='reviews-section'
        >
          {tempReviews.map((rev, idx) => (
            <SwiperSlide key={idx}>
              <div className='row'>
                <div className='col'>
                  <p className='review-ratings'>
                    <span className='em'>"</span>
                    {[...Array(rev.rating)].map((e, i) => (
                      <FontAwesomeIcon
                        key={i}
                        className='review-rating'
                        icon={faStar}
                      />
                    ))}
                    <span className='em'>"</span>
                  </p>

                  <div className='user-review'>
                    <img src={rev.profile_photo_url} alt={rev.author_name} />
                    <p className='review-author text-black'>
                      {rev.author_name}
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
                      {rev.text}
                    </p>
                  </div>
                </div>
              </div>

              <br />
            </SwiperSlide>
          ))}
        </Swiper>
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
