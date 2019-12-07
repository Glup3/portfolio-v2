import React from 'react';

function NameInput() {
  return (
    <div className="input-field col s12 m6">
      <i className="far fa-address-card prefix light-blue-text text-darken-1"></i>
      <input id="icon_prefix" type="text" className="validate" required />
      <label htmlFor="icon_prefix">Name</label>
      <span className="helper-text" data-error="Please tell me your name" data-success="Nice to meet you!">
        What&apos;s your name?
      </span>
    </div>
  );
}

export default NameInput;
