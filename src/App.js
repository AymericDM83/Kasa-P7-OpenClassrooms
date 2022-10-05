import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from "./AppContext";
import axios from "axios";
import Home from "./pages/Home";
import Lodging from "./pages/Lodging";
import About from "./pages/About";
import Error404 from "./pages/Error404";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("../logements.json")
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err + "erreur"));
    };
    fetchData();
  }, []);

  return (
    // Router configuration
    <BrowserRouter>
      <AppContext.Provider value={data}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lodging/:id" element={<Lodging />} />
          <Route path="/about" element={<About />} />
          {/* path = "*" is for all other url adresses that non exist */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  );
};

export default App;
