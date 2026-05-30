import React from "react";
import Navbar from "../components/Navbar";

function Home() {

  const user = localStorage.getItem("user");

  return (
    <>
      <Navbar />

      <div className="page">
        <h1>Welcome {user} 🎧</h1>

        <div className="card">
          <h2>Become DJ Operator</h2>

          <p>
            Join professional DJ operator team and
            manage live events, weddings and parties.
          </p>
          <button
  onClick={() => navigate("/image")}
>
  Change Profile Image
</button>
          <button>Join Now</button>
          <div className="card">
  <h2>🔥 Become DJ Operator</h2>

  <p>
    Join the best DJ operator network for weddings,
    parties and live events.
  </p>

  <button>Join Now</button>
</div>
        </div>

      </div>
    </>
  );
}

export default Home;