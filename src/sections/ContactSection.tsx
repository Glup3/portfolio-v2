import React from 'react';
import Fade from 'react-reveal/Fade';

import SectionWrapper from '../components/SectionWrapper';
import HighlightText from '../components/HighlightText';

const duration = 1500;

const ContactSection = () => {
  return (
    <SectionWrapper id="contact">
      <Fade left duration={duration}>
        <h1>You would like to work with me?</h1>
      </Fade>
      <Fade right duration={duration}>
        <p className="flow-text">
          I would love to hear from you! Just send me an email: <HighlightText text="glup3.tran@gmail.com" />
        </p>
      </Fade>
    </SectionWrapper>
  );
};

export default ContactSection;
