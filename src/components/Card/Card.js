import React from "react";
import "./Card.css";
import pokerCard from "../../files/card.png";

const Card = ({ msg: { text, user }, name, cardFlipped }) => {
  return (
    <div className="storyCard">
      {cardFlipped ? (
        <div className="storyPoint">
          <span>{text}</span>
          <p>{text}</p>
        </div>
      ) : null}
      {!cardFlipped ? (
        <div className="storyPoint_card">
          <img src={pokerCard} alt="card" />
        </div>
      ) : null}
      <p>{user}</p>
    </div>
  );
};

export default Card;
