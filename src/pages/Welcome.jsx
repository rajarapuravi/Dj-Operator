
import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {

  const navigate = useNavigate();

  return (
    <div className="page">

      <h1>🎧 DJ Operator Connect</h1>

      <p>
        Find & Join Professional DJ Operators
      </p>

      <div>

        <button
          onClick={() => navigate("/login")}
        >
          Login
        </button>

        <button
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>

      </div>

    </div>
  );
}

export default Welcome;

