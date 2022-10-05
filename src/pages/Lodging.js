import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../AppContext";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import TagName from "../components/TagName";

const Lodging = () => {
  const data = useContext(AppContext);
  const urlId = useParams().id;
  const [lodgingData, setLodgingData] = useState({
    cover: "",
    description: "",
    equipments: [],
    host: { name: "", picture: "" },
    id: "",
    location: "",
    pictures: [],
    rating: "",
    tags: [],
    title: "",
  });

  useEffect(() => {
    const pushLodgingData = async () => {
      let found = data.find((o) => o.id === urlId);
      await setLodgingData(found);
    };
    pushLodgingData();
  });

  return (
    <div>
      <Header />

      {lodgingData && (
        <>
          <Slideshow data={lodgingData.pictures} />
          <div className="lodging_block">
            <div className="lodging_block_infos">
              <div className="lodging_block_infos_item title-location">
                <h2>{lodgingData.title}</h2>
                <p>{lodgingData.location}</p>
              </div>
              <div className="lodging_block_infos_item hostInfos">
                <p>{lodgingData.host.name}</p>
                <div className="host_picture">
                  <img src={lodgingData.host.picture} alt="host-pic" />
                </div>
              </div>
            </div>
            <div className="lodging_block_infos">
              <div className="lodging_block_infos_item tagName">
                <TagName />
              </div>
              <div className="lodging_block_infos_item rating">
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Lodging;
