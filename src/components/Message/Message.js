import React from "react";
import "./Message.css";
import pokerCard from "../../images/card.png";

const Message = ({ msg: { text, user }, name, cardFlipped }) => {
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

export default Message;
