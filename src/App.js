import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lodging from "./pages/Lodging";
import About from "./pages/About";
import Error404 from "./pages/Error404";

const App = () => {
  return (
    // Router configuration
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lodging/" element={<Lodging />} />
        <Route path="/about" element={<About />} />
        {/* path = "*" is for all other url adresses that non exist */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
