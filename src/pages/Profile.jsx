
import React from "react";
import Navbar from "../components/Navbar";

function Profile() {

  const user =
    JSON.parse(
      localStorage.getItem(
        "currentUser"
      )
    );

  return (
    <>
      <Navbar />

      
        <div className="profile-card">

        <h1>Profile</h1>

        <h2>
          {user?.name}
        </h2>

        <p>
          {user?.email}
        </p>

      </div>
    </>
  );
}

export default Profile;
