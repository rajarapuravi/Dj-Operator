
import React from "react";
import Navbar from "../components/Navbar";

import OperatorCard from "../components/OperatorCard";

function Dashboard() {

  const operators =
    JSON.parse(
      localStorage.getItem("operators")
    ) || [];

  return (
    <>
      <Navbar />

      <div className="page">

        <h1>
          Available DJ Operators
        </h1>

        <div className="grid">

          {operators.map(
            (operator,index)=>(
              <OperatorCard
                key={index}
                operator={operator}
              />
            )
          )}

        </div>

      </div>
    </>
  );
}

export default Dashboard;
