
import React from "react";
import { useNavigate } from "react-router-dom";

function OperatorCard({ operator }) {

  const navigate = useNavigate();

  return (
    
    <div className="operator-card">
        <img
  src={operator.image}
  alt="DJ"
  className="card-image"
/>

      <div className="card-header">
        <h2>{operator.name}</h2>

        <span className="rating">
          ⭐ {operator.rating}
        </span>
      </div>

      <p>
        <strong>DJ ID:</strong> {operator.djId}
      </p>

      <p>
        <strong>Phone:</strong> {operator.phone}
      </p>

      <p>
        <strong>Email:</strong> {operator.email}
      </p>

      <p>
        <strong>Skills:</strong> {operator.skills}
      </p>

      <p>
        <strong>Experience:</strong>
        {" "}
        {operator.experience} Years
      </p>

      <p className="description">
        {operator.description}
      </p>


<div className="card-buttons">

  <button
    className="book-btn"
    onClick={() =>
      navigate("/booking", {
        state: { operator }
      })
    }
  >
    Book Now
  </button>

  <button
    className="view-btn"
    onClick={() =>
      navigate("/operator-profile", {
        state: { operator }
      })
    }
  >
    View Profile
  </button>

  <button
    className="edit-btn"
    onClick={() =>
      navigate("/edit-operator", {
        state: { operator }
      })
    }
  >
    Edit
  </button>




      </div>

    </div>
  );
}

export default OperatorCard;
