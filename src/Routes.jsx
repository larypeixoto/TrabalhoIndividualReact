import React from "react";
import {HomePage} from "./Pages/homepage/home";
import {Profile} from "./Pages/Profile/profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};