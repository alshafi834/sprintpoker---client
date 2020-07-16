import React from "react";
import "./Message.css";
import pokerCard from "../../images/card.png";
import ReactEmoji from "react-emoji";

const Message = ({ msg: { text, user }, name, cardFlipped }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    <div className="storyCard">
      {/*  {isSentByCurrentUser ? (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{name}</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
      ) : (
        <div className="messageContainer justifyStart">
          <div className="messageBox backgroundLight">
            <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
          </div>
          <p className="sentText pl-10">{user}</p>
        </div>
      )} */}
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
