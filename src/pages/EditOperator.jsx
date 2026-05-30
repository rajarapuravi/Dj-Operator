
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function EditOperator() {

  const location = useLocation();
  const navigate = useNavigate();

  const operator = location.state?.operator;

  const [name, setName] =
    useState(operator.name);

  const [skills, setSkills] =
    useState(operator.skills);

  const [description, setDescription] =
    useState(operator.description);

  const updateOperator = () => {

    const operators =
      JSON.parse(
        localStorage.getItem("operators")
      ) || [];

    const updatedOperators =
      operators.map((op) =>

        op.djId === operator.djId
          ? {
              ...op,
              name,
              skills,
              description
            }
          : op

      );

    localStorage.setItem(
      "operators",
      JSON.stringify(updatedOperators)
    );

    alert("Updated Successfully");

    navigate("/dashboard");
  };

  return (
    <div className="page">

      <h1>Edit Operator</h1>

      <input
        value={name}
        onChange={(e)=>
          setName(e.target.value)
        }
      />

      <input
        value={skills}
        onChange={(e)=>
          setSkills(e.target.value)
        }
      />

      <textarea
        value={description}
        onChange={(e)=>
          setDescription(e.target.value)
        }
      />

      <button
        onClick={updateOperator}
      >
        Save Changes
      </button>

    </div>
  );
}

export default EditOperator;
