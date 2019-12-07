import React from 'react';

function MessageArea() {
  return (
    <div className="input-field col s12">
      <i className="far fa-comment prefix light-blue-text text-darken-1"></i>
      <textarea id="messageArea" className="materialize-textarea" rows={5}></textarea>
      <label htmlFor="messageArea">Message</label>
    </div>
  );
}

export default MessageArea;
