import React from "react";
import { useEffect, useState } from "react";
import "./profile.css";
import { updateLoggedIn } from "./context/ProtectedRoutes";


const Profile = (handleLogin) => {
    const [image, setImage] = useState([]);

  const handleLogout = (e) => {
    e.preventDefault();
    // handleLogin(false)
    updateLoggedIn();
  };
useEffect(() => {
  const fetchImages = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/images");
      const data = await response.json();
      setImage(data);
    } catch (e) {
      console.log(e);
    }
  };
  fetchImages();
}, []);


  return (
    <div className="content">
      <div className="profile">
        <h1>Choose Profile and select background picture</h1>
        <form>
          <button className="submit-btn" type="submit" onSubmit={handleLogout}>
            Logout
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
