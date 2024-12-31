import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
 
const userList = () => {
  const [users, setUsers] = useState([]);
 
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=> response.json())
    .then((data)=> setUsers(data))
    .then((error)=>console.error("Error fetching users:", error));
  }, []);
  return (
    <div>
    <h1>User List</h1>
    <ul>
      {users.map((user)=>(
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
    </div>
  )
}
 
export default userList
