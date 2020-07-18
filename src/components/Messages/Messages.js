import React from "react";
import "./Messages.css";
import Message from "../Message/Message";

const Messages = ({ messages, userName, cardFlipped, storyPoint }) => {
  return (
    <div className="messages">
      {messages.map((msg, index) => (
        <div key={index} className="msgCards">
          <Message msg={msg} name={userName} cardFlipped={cardFlipped} />
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

export default Messages;
