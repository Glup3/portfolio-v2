import React from 'react'

function EmailInput() {
  return (
    <div className="input-field col s12 m6">
      <i className="material-icons prefix light-blue-text text-darken-1">email</i>
      <input id="email" type="email" className="validate" required/>
      <label htmlFor="email">Email</label>
      <span className="helper-text" data-error="Invalid email adress" data-success="Looks good"></span>
    </div>
  )
}

export default EmailInput
