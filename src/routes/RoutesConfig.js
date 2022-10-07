import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Lodging from "../pages/Lodging";
import About from "../pages/About";
import Error404 from "../pages/Error404";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/Kasa-P7-OpenClassrooms/" element={<Home />} />
      <Route path="/Kasa-P7-OpenClassrooms/lodging/:id" element={<Lodging />} />
      <Route path="/Kasa-P7-OpenClassrooms/about" element={<About />} />
      {/* path = "*" is for all other url adresses that non exist */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default RoutesConfig;
