import React from "react";



const User = ({ firstName, lastName, email, state }) => {

  return (
    <div>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{email}</p>
      <p>{state}</p>
    </div>
  )
}

export default User;