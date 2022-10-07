import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppContext } from "./AppContext";
import axios from "axios";
import RoutesConfig from "./routes/RoutesConfig";

const App = () => {
  const [data, setData] = useState([]);

  // Catch and store datas
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("logements.json")
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
      {/* Sharing datas with other components and pages using useContext*/}
      <AppContext.Provider value={data}>
        <RoutesConfig />
      </AppContext.Provider>
    </BrowserRouter>
  );
};

export default App;
