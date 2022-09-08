import React from "react";
import { useEffect, useState } from "react";
import "./profile.css";
import { updateLoggedIn } from "./context/ProtectedRoutes";
import Avatar, { genConfig } from "react-nice-avatar";



const Profile = (handleLogin) => {
  const [images, setImages] = useState([]);
  const configMan = genConfig({
    sex: "man",
    mouthStyle: "laugh",

  });
  const configManHair = genConfig({
    sex: "man",
    mouthStyle: "laugh",
    hairStyle: "thick"
  });
  const configWoman = genConfig({
    sex: "woman",
    mouthStyle: "smile",
  });
  const configWomanHair = genConfig({
    sex: "woman",
    mouthStyle: "smile",
    hairStyle: "mohawk"
  });

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
        setImages(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchImages();
  }, []);

  return (
    <div className="content">
      <div className="profile">
        <h1>Choose Profile picture</h1>
        <form>
          <Avatar
            style={{
              width: "5rem",
              height: "5rem",
              float: "left",
            }}
            {...configManHair}
          />

          <Avatar
            style={{
              width: "5rem",
              height: "5rem",
              float: "left",
            }}
            {...configMan}
          />
          <Avatar
            style={{
              width: "5rem",
              height: "5rem",
              float: "left",
            }}
            {...configWomanHair}
          />
          <Avatar
            style={{
              width: "5rem",
              height: "5rem",
              float: "left",
            }}
            {...configWoman}
          />

          <button className="submit-btn" type="submit" onSubmit={handleLogout}>
            Logout
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
