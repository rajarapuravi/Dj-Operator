
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import RegisterOperator from "./pages/RegisterOperator";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import EditOperator from "./pages/EditOperator";
import Image from "./pages/Image";

import Booking from "./pages/Booking";
import OperatorProfile from "./pages/OperatorProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Welcome Page */}
        <Route
          path="/"
          element={<Welcome />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Signup */}
        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* Register DJ Operator */}
        <Route
          path="/register"
          element={<RegisterOperator />}
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={<Profile />}
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/booking"
          element={<Booking />}
       />

        <Route
          path="/operator-profile"
          element={<OperatorProfile />}
        />
       <Route
         path="/edit-operator"
         element={<EditOperator />}
        />
        <Route
         path="/image"
         element={<Image />}
        />

      </Routes>
    </BrowserRouter>
  );
}




export default App;