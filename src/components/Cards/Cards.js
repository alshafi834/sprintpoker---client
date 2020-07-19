import React from "react";
import "./Cards.css";
import Card from "../Card/Card";

const Cards = ({ messages, userName, cardFlipped, storyPoint }) => {
  return (
    <div className="messages">
      {messages.map((msg, index) => (
        <div key={index} className="msgCards">
          <Card msg={msg} name={userName} cardFlipped={cardFlipped} />
        </div>
      ))}
      {storyPoint ? (
        <div className="msgCards finalstory">
          <div className="finalPoint">
            <span>{storyPoint}</span>
            <p>{storyPoint}</p>
          </div>
          <h3>Story Point</h3>
        </div>
      ) : null}
    </div>
  );
};

export default Cards;
