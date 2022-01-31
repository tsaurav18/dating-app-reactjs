import React, { useState, useEffect } from "react";
import DatingCard from "react-tinder-card";
import "./DatingCard.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import axios from "../axios";
import SwipeButtons from "./SwipeButtons";

function DatingCards() {
  const [people, setPeople] = useState([]);

  const fetchData = async () => {
    const req = await axios.get("/dating/cards");
    if (req) {
      console.log(req);
      setPeople(req.data);
    } else {
      alert("data is not found");
    }
  };
  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("receiving", nameToDelete);
  };
  const outToFrame = (name) => {
    console.log(name + "left to screen");
  };

  const cardRef = React.useRef();
  return (
    <div className="datingCards">
      <div className="datingCards_container">
        {people.map((person) => (
          <DatingCard
            ref={cardRef}
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onCardLeftScreen={() => outToFrame(person.name)}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.imgUrl})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </DatingCard>
        ))}
      </div>
      <div className="swipeButtons">
        <SwipeButtons
          icon={<ReplayIcon fontSize="large" />}
          classname={"swipeButtons_repeat"}
          buttonPressed={() => {}}
        />
        <SwipeButtons
          icon={<CloseIcon fontSize="large" />}
          classname={"swipeButtons_left"}
          buttonPressed={() => {}}
        />
        <SwipeButtons
          icon={<StarRateIcon fontSize="large" />}
          classname={"swipeButtons_star"}
          buttonPressed={() => {}}
        />
        <SwipeButtons
          icon={<FavoriteIcon fontSize="large" />}
          classname={"swipeButtons_right"}
          buttonPressed={() => console.log("hello fav")}
        />
        <SwipeButtons
          icon={<FlashOnIcon fontSize="large" />}
          classname={"swipeButtons_lightning"}
          buttonPressed={() => console.log("hello flash")}
        />
      </div>
    </div>
  );
}

export default DatingCards;
