import React, { useEffect, useState } from "react";
import axios from "axios";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("logements.json").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <Banner />
      <div className="card_container">
        {data.map((lodging, index) => (
          <NavLink key={index}>
            <Card key={index} lodging={lodging} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Home;
