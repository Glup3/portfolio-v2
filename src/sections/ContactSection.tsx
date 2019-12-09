import React from 'react';
import Fade from 'react-reveal/Fade';

import SectionWrapper from '../components/SectionWrapper';
import HighlightText from '../components/HighlightText';

const ContactSection = () => {
  return (
    <SectionWrapper id="contact">
      <Fade clear>
        <h1>You would like to work with me?</h1>
      </Fade>
      <p className="flow-text">
        I would love to hear from you! Just send me an email: <HighlightText text="glup3.tran@gmail.com" />
      </p>
    </SectionWrapper>
  );
};

export default ContactSection;
