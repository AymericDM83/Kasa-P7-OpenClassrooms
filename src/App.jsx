import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppContext } from "./AppContext";
import RoutesConfig from "./routes/RoutesConfig";
import dataJson from "./data/logements.json";

const App = () => {
  const [data, setData] = useState([]);

  // Catch and store datas
  useEffect(() => {
    const fetchData = async () => {
      setData(dataJson);
    };
    fetchData();
  }, []);

  return (
    // Router configuration
    <BrowserRouter>
      {/* Sharing datas with other components and pages using useContext*/}
      <AppContext.Provider value={data}>
        <RoutesConfig />
      </AppContext.Provider>
    </BrowserRouter>
  );
};

export default App;
