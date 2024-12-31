import react,  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams(); 
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setUser(data); 
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchUserDetails();
  }, [id]);

  return (
    <>
    <h1>User Details</h1>
      {loading ? (
        <p>Loading user details...</p>
      ) : user ? (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </>
  );
};

export default UserDetails;
