import React, {useEffect, useState} from "react";
import api from "../api";
import User from "./User";


const Admin = () => {

  const [users, setUsers] = useState()

  useEffect(() => {
    const getUsers = async () => {
      const response = await api.getAllUsers()
      console.log(response)
      setUsers(response)
    }
    getUsers()
  }, [])  


  return (
    <div>
      <h3>Users</h3>
      {users && users.map(user => {
        return(
          <User
            key={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
            email={user.email}
            state={user.state}
          />
        )
      })}
    </div>
  )
}

export default Admin;