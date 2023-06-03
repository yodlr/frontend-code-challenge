import React, {useEffect, useState} from "react";
import api from "../api";
import User from "./User";


const Admin = () => {

  const [users, setUsers] = useState()

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    const response = await api.getAllUsers()
    console.log(response)
    setUsers(response)
  }

  const handleDelete = async (id) => {
    const resp = await api.deleteUser(id)
    getUsers()
  }

  const handleApproveUser = async (firstName, lastName, email, id) => {
    const resp = await api.approveUser({
      firstName, lastName, email, id
    })
    getUsers()
  }


  return (
    <div id="users-container">
      <h3>Users</h3>
      <br></br>
      <hr></hr>
      {users && users.map(user => {
        return(
          <div key={user.id}>
            <User
              key={user.id}
              firstName={user.firstName}
              lastName={user.lastName}
              email={user.email}
              state={user.state}
              id={user.id}
              handleDelete={handleDelete}
              handleApproveUser={handleApproveUser}
            />
          <hr></hr>
          </div>
        )
      })}
    </div>
  )
}

export default Admin;