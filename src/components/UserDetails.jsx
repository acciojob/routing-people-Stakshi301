import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
 
function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true); 
 
  useEffect(() => {
    setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setUser(data); 
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setLoading(false);
        });
    }, 1000); 
  }, [id]);
 
  if (loading) {
    return <p>Loading...</p>;
  }
 
  return (
    <div>
      {user ? (
        <>
          <h1>User Details</h1>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
        </>
      ) : (
        <p>User not found.</p>
      )}
    </div>
  );
}
 
export default UserDetails;
