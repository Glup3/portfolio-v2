import React, { Component } from 'react';
import NameInput from './NameInput';
import EmailInput from './EmailInput';
import MessageArea from './MessageArea';
import SubmitButton from './SubmitButton';

class ContactForm extends Component {
  render() {
    return (
      <div className="row container block">
        <form className="col s12">
          <div className="row">
            <NameInput />
            <EmailInput />
          </div>
          <div className="row">
            <MessageArea />
          </div>
          <SubmitButton />
        </form>
      </div>
    )
  }
}

export default ContactForm
