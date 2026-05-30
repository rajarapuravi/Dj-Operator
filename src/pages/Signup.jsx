
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = () => {

    const users =
      JSON.parse(
        localStorage.getItem("users")
      ) || [];

    users.push({
      name,
      email,
      password
    });

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    alert("Account Created");

    navigate("/login");
  };

  return (
    <div className="page">

      <h1>Sign Up</h1>

      <input
        placeholder="Name"
        onChange={(e)=>setName(e.target.value)}
      />

      <input
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button onClick={handleSignup}>
        Create Account
      </button>

    </div>
  );
}

export default Signup;

