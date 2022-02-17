import React from "react";
import "../styles/pages/about.scss";
import { Animated } from "react-animated-css";

export const About = () => {
  const [hoverColor, setHoverColor] = React.useState("");

  const aboutUsSections = [
    {
      description: "Your resume is one of your most important career tools.",
      class: "teal lighten-2"
    },
    {
      description:
        "But many professionals have no idea where to start, what to include, and what to leave off of their resumes.",
      class: "indigo lighten-3"
    },
    {
      description:
        "That’s where Follow the Nerd comes in. We can carefully craft your career story to target the job that you want to land.",
      class: "cyan lighten-5"
    }
  ];
  return (
    <>
      <Animated
        animationIn='fadeIn'
        animationOut='fadeOut'
        animationDuration={1000}
        animationOutDuration={1000}
        isVisible={true}
      >
        <div className='row about-us-heading'>
          <div className='col text-black lighten-6'>
            <h3>About Us</h3>
          </div>
        </div>

        <div className={`container section-wrapper row mt-5 ${hoverColor} `}>
          <div className='col s12 m4 l8'>
            <div className='section-scroller'>
              {aboutUsSections.map((sec, index) => (
                <div
                  key={index}
                  className={`about-us-sec section ${sec.class}`}
                  onMouseEnter={() =>
                    setHoverColor(sec.class + " hoverable pulse")
                  }
                  onMouseLeave={() => setHoverColor(sec.class)}
                >
                  <div className='row'>
                    <div className='col s12'>
                      <h3 className='center-align scale-transition'>
                        {sec.description}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Animated>
    </>
  );
};
