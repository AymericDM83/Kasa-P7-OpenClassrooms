import React, { useContext } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import { AppContext } from "../AppContext";

const Home = () => {
  const data = useContext(AppContext);

  return (
    <div>
      <Header />
      <Banner />
      <div className="card_container">
        {data.map((lodging, index) => (
          <NavLink key={index} to={`/lodging/${lodging.id}`}>
            <Card key={index} lodging={lodging} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Home;
