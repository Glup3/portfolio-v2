import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import NameInput from './NameInput';
import EmailInput from './EmailInput';
import MessageArea from './MessageArea';
import SubmitButton from './SubmitButton';

class ContactForm extends Component {
  render() {
    return (
      <section>
        <div className="row container block scrollspy" id="contact">
          <form className="col s12">
            <Fade duration={1500}>
              <div className="row">
                <h1>Contact me</h1>
              </div>
              <div className="row">
                <NameInput />
                <EmailInput />
              </div>
              <div className="row">
                <MessageArea />
              </div>
              <SubmitButton />
            </Fade>
          </form>
        </div>
      </section>
    )
  }
}

export default ContactForm
