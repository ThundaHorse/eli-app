import React, { useState } from "react";
import "../styles/pages/about.scss";
import { Parallax } from "react-materialize";

export const About = () => {
  const [hoverState, setHoverState] = React.useState();

  const hoverClasses = {
    mouseEntered: "row hoverable teal lighten-3 pulse",
    mouseLeft: "row hoverable teal lighten-2"
  };

  return (
    <>
      <div className='row'>
        <div className='col'>
          <h3>About Us</h3>
        </div>
      </div>

      <Parallax
        image={<img alt='about-parallax-1' src='/assets/images/hero2.png' />}
        options={{
          responsiveThreshold: 0
        }}
      />
      <div className='section teal lighten-2'>
        <div className='row container'>
          <div
            className={`${hoverClasses[hoverState]}`}
            onMouseEnter={() => setHoverState("mouseEntered")}
            onMouseLeave={() => setHoverState("mouseLeft")}
          >
            <div className='col s12'>
              <h2 className='center-align scale-transition'>
                Your resume is one of your most important career tools.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Parallax
        image={<img alt='about-parallax-1' src='/assets/images/hero1.png' />}
        options={{
          responsiveThreshold: 0
        }}
      />

      <div className='row container'>
        <div className='col'>
          <h4>
            But many professionals have no idea where to start, what to include,
            and what to leave off of their resumes.
          </h4>
        </div>
      </div>

      <div className='row container'>
        <div className='col'>
          <h3>That’s where Follow the Nerd comes in.</h3>

          <br />

          <h4>
            We can carefully craft your career story to target the job that you
            want to land.
          </h4>
        </div>
      </div>
    </>
  );
};
