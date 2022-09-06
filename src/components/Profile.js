import React from "react";
import "./profile.css";
import { updateLoggedIn } from "./context/ProtectedRoutes";


const Profile = (handleLogin) => {
  const handleLogout = (e) => {
    e.preventDefault();
    // handleLogin(false)
    updateLoggedIn();
  };
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
