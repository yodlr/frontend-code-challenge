import React from "react";
import api from "../api";
import '../styles/User.css'


const User = ({ firstName, lastName, email, state, id, handleDelete, handleApproveUser }) => {

  const handleApproveClick = () => {
    handleApproveUser(firstName, lastName, email, id)
  }

  return (
    <div id="single-user-item">
      <div id="info">
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{email}</p>
        <p>{state}</p>
      </div>
      {state === 'active' 
        ?
        <div id="buttons">
          <button onClick={() => handleDelete(id)}>delete</button>
        </div>
        :
        <div id="buttons">
          <button onClick={() => handleDelete(id)}>delete</button>
          <button onClick={() => handleApproveClick()}>approve</button>
        </div>
      }
    </div>
  )
}

export default User;