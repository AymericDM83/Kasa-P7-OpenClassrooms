import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { AppContext } from "../AppContext";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import TagName from "../components/TagName";
import starFull from "../img/starFull.svg";
import starEmpty from "../img/starEmpty.svg";
import Collapse from "../components/Collapse";

const Lodging = () => {
  const data = useContext(AppContext);

  const path = useLocation().pathname;
  const location = path.split("/")[1];

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

  if (!lodgingData) {
    return (
      <div>
        <i className="fas fa-spinner fa-spin"></i>
      </div>
    );
  }

  let name = lodgingData.host.name.split(" ");

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
              <div className="lodging_block_infos_item tagName">
                {lodgingData.tags.map((tag, index) => {
                  return <TagName tag={tag} key={index} />;
                })}
              </div>
            </div>
            <div className="lodging_block_infos flexBlock">
              <div className="lodging_block_infos_item hostInfos">
                <div className="hostInfos_name">
                  <p>{name[0]}</p>
                  <p>{name[1]}</p>
                </div>
                <div className="host_picture">
                  <img src={lodgingData.host.picture} alt="host-pic" />
                </div>
              </div>
              <div className="lodging_block_infos_item rating">
                {lodgingData.rating == 1 && (
                  <>
                    <img src={starFull} alt="rating-stars" />
                    <img src={starEmpty} alt="rating-stars" />
                    <img src={starEmpty} alt="rating-stars" />
                    <img src={starEmpty} alt="rating-stars" />
                    <img src={starEmpty} alt="rating-stars" />
                  </>
                )}
                {lodgingData.rating == 2 && (
                  <>
                    <img src={starFull} alt="rating-stars" />
                    <img src={starFull} alt="rating-stars" />
                    <img src={starEmpty} alt="rating-stars" />
                    <img src={starEmpty} alt="rating-stars" />
                    <img src={starEmpty} alt="rating-stars" />
                  </>
                )}
                {lodgingData.rating == 3 && (
                  <>
                    <img src={starFull} alt="rating-stars" />
                    <img src={starFull} alt="rating-stars" />
                    <img src={starFull} alt="rating-stars" />
                    <img src={starEmpty} alt="rating-stars" />
                    <img src={starEmpty} alt="rating-stars" />
                  </>
                )}
                {lodgingData.rating == 4 && (
                  <>
                    <img src={starFull} alt="rating-stars" />
                    <img src={starFull} alt="rating-stars" />
                    <img src={starFull} alt="rating-stars" />
                    <img src={starFull} alt="rating-stars" />
                    <img src={starEmpty} alt="rating-stars" />
                  </>
                )}
                {lodgingData.rating == 5 && (
                  <>
                    <img src={starFull} alt="rating-stars" />
                    <img src={starFull} alt="rating-stars" />
                    <img src={starFull} alt="rating-stars" />
                    <img src={starFull} alt="rating-stars" />
                    <img src={starFull} alt="rating-stars" />
                  </>
                )}
              </div>
            </div>
          </div>
          <div className={"collapse_box" + location}>
            <Collapse label="Description" content={lodgingData.description} />
            <Collapse
              label="Équipements"
              content={
                <ul>
                  {lodgingData.equipments.map((equipement, index) => {
                    return <li key={index}>{equipement}</li>;
                  })}
                </ul>
              }
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Lodging;
