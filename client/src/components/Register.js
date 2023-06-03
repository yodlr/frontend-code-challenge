import React, { useState } from "react";
import api from "../api";
import '../styles/Register.css'

const Register = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  }
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handleSubmit = async () => {
    const resp = await api.registerNewUser({
      firstName, lastName, email
    })
    console.log(resp)
    setFirstName('')
    setLastName('')
    setEmail('')
  }

  return (
    <div className="register-container">
      <p>Register</p>
      <br></br>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        required
        onChange={handleFirstNameChange}
      />
      <br></br>
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        required
        onChange={(e) => handleLastNameChange(e)}
      />
      <br></br>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        value={email}
        required
        onChange={(e) => handleEmailChange(e)}
      />
      <br></br>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );

}

export default Register;