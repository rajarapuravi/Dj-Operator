
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function RegisterOperator() {

  const navigate = useNavigate();
  const [image, setImage] = useState("");

  const [form,setForm] =
    useState({
      name:"",
      email:"",
      phone:"",
      skills:"",
      experience:"",
      description:""
    });

  const handleSubmit = () => {

  const operators =
    JSON.parse(
      localStorage.getItem("operators")
    ) || [];

  const operator = {
  ...form,
  image: image,
  djId:
  "DJ" +
  Math.floor(
    1000 +
    Math.random()*9000
  ),
  rating:5
};

  operators.push(operator);

  localStorage.setItem(
    "operators",
    JSON.stringify(operators)
  );

  alert("Operator Added");

  navigate("/dashboard");
};

  return (
    <>
      <Navbar />

      <div className="page">

        <h1>
          Join As Operator
        </h1>

        <input
          placeholder="Name"
          onChange={(e)=>
          setForm({
            ...form,
            name:e.target.value
          })}
        />

        <input
          placeholder="Email"
          onChange={(e)=>
          setForm({
            ...form,
            email:e.target.value
          })}
        />

        <input
          placeholder="Phone"
          onChange={(e)=>
          setForm({
            ...form,
            phone:e.target.value
          })}
        />

        <input
          placeholder="Skills"
          onChange={(e)=>
          setForm({
            ...form,
            skills:e.target.value
          })}
        />

        <input
          placeholder="Experience"
          onChange={(e)=>
          setForm({
            ...form,
            experience:e.target.value
          })}
        />

       <textarea
         placeholder="Description"
         onChange={(e)=>
         setForm({
           ...form,
           description:e.target.value
         })}
        />


        <input
  type="file"
  accept="image/*"
  onChange={(e) => {

    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }

  }}
/>

{image && (
  <>
    <p>Preview</p>

    <img
      src={image}
      alt="Preview"
      className="profile-image"
    />
  </>
)}



<button
  onClick={handleSubmit}
>
  Register
</button>
      </div>
    </>
  );
}

export default RegisterOperator;

