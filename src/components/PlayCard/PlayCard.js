import React from "react";
import "./PlayCard.css";
import pokerCard from "../../files/card.png";

const PlayCard = ({ message, setMessage, sendMessage, startPoker }) => {
  const cards = [1, 2, 3, 5, 8, 13, 21, 34, 55];
  return (
    <div className="cardMain">
      {startPoker ? (
        <div className="cardContainer">
          {cards.map((card) => (
            <div
              key={card}
              className="cards"
              onClick={() => {
                sendMessage(card);
              }}
            >
              <span className="top">{card}</span>
              <p className="middle">{card}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="cardContainer">
          <img src={pokerCard} alt="card" />
        </div>
      )}
    </div>
  );
};

export default PlayCard;
