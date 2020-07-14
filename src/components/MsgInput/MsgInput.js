import React from "react";
import "./MsgInput.css";

const MsgInput = ({ message, setMessage, sendMessage, startPoker }) => {
  const cards = [1, 2, 3, 5, 8, 13, 21, 34, 55];
  console.log(cards[0]);
  return (
    <div>
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
              <span>
                <p>{card}</p>
              </span>
            </div>
          ))}
        </div>
      ) : null}
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
