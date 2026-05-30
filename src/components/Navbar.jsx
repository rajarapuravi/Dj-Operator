
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <nav className="navbar">

      <div className="logo">
        🎧 DJ Connect
      </div>

      <div className="nav-links">

        <Link to="/dashboard">
          Home
        </Link>

        <Link to="/register">
          Join As Operator
        </Link>

        <Link to="/profile">
          Profile
        </Link>

        <Link to="/contact">
          Contact
        </Link>

        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;
