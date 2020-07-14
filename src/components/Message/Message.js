import React from "react";
import "./Message.css";
import ReactEmoji from "react-emoji";

const Message = ({ msg: { text, user }, name }) => {
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
      <div className="storyPoint">
        <span>{text}</span>
        <p>{text}</p>
      </div>
      <p>{name}</p>
    </div>
  );
};

export default Message;
