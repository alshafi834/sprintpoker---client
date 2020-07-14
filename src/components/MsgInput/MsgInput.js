import React from "react";
import "./MsgInput.css";

const MsgInput = ({ message, setMessage, sendMessage, startPoker }) => {
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
          <div className="cards">
            <span className="top">0</span>
            <p className="middle">0</p>
          </div>
        </div>
      )}
      {/* <form className="form">
      <input
        type="text"
        className="input"
        placeholder="Type your message..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      <button className="sendButton" onClick={(event) => sendMessage(event)}>
        Send
      </button>
    </form> */}
    </div>
  );
};

export default MsgInput;
