import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {

    const users =
      JSON.parse(
        localStorage.getItem("users")
      ) || [];

    const user =
      users.find(
        (u)=>
          u.email===email &&
          u.password===password
      );

    if(user){

      localStorage.setItem(
        "currentUser",
        JSON.stringify(user)
      );

      navigate("/dashboard");
    }
    else{
      alert("Invalid Login");
      alert("Please Enter Details");
    }
  };

  return (
    <div className="page">

      <h1>Login</h1>

      <input
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
        Login
      </button>

    </div>
  );
}

export default Login;

