
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function OperatorProfile() {

  const location = useLocation();
  const navigate = useNavigate();

  const operator = location.state?.operator;

  return (
    <>
      <Navbar />

     <div className="profile-page">

        <div className="profile-card">

          <button
            onClick={() => navigate("/")}
          >
            ← Back
          </button>
          <img
            src={
              operator?.image ||
              "https://via.placeholder.com/200"
            }
            alt="profile"
            className="profile-image"
          />

          <h1>{operator?.name}</h1>

          <div className="rating-box">
            ⭐ {operator?.rating}
          </div>

          <p>
            <strong>DJ ID:</strong>
            {" "}
            {operator?.djId}
          </p>

          <p>
            <strong>Skills:</strong>
            {" "}
            {operator?.skills}
          </p>

          <p>
            <strong>Experience:</strong>
            {" "}
            {operator?.experience} Years
          </p>

          <p>
            <strong>Email:</strong>
            {" "}
            {operator?.email}
          </p>

          <p>
            <strong>Phone:</strong>
            {" "}
            {operator?.phone}
          </p>

          <p>
            {operator?.description}
          </p>

          <button>
            Book Now
          </button>

        </div>

      </div>
    </>
  );
}

export default OperatorProfile;

