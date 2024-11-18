import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import StateCitySelector from "./components/StateCitySelector";
import FetchJson from "./components/FetchJson";
function App() {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/fetchjson" element={<FetchJson />} />
        <Route
          path="/state-city"
          element={isAuthenticated ? <StateCitySelector /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
