import React, { useState } from "react";
import api from "../api";


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
    console.log(firstName, lastName, email)
    const resp = await api.RegisterNewUser({
      firstName, lastName, email
    })
    console.log(resp)
  }

  return (
    <div>
      <p>Register</p>

      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <br></br>
      <label htmlFor="lastName">Last Name</label>
      <input
        type='text'
        id="lastName"
        value={lastName}
        onChange={(e) => handleLastNameChange(e)}
      />
      <br></br>
      <label htmlFor="email">Email</label>
      <input
        type='text'
        id="email"
        value={email}
        onChange={(e) => handleEmailChange(e)}
      />
      <br></br>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Register;