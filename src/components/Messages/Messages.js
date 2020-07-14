import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import "./Messages.css";
import Message from "../Message/Message";

const Messages = ({ messages, userName }) => {
  return (
    <div className="messages">
      {messages.map((msg, index) => (
        <div key={index} className="msgCards">
          <Message msg={msg} name={userName} />
        </div>
      ))}
    </div>
  );
};

export default Messages;
