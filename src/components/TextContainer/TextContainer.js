import React, { useState } from "react";

import "./TextContainer.css";

const TextContainer = ({ users, startGame, isHost, resetGame }) => {
  return (
    <div className="textContainer">
      <div>
        <h2>Currently online:</h2>
        {users ? (
          <div className="activeContainer">
            <div className="online">
              {users.map(({ name }) => (
                <div key={name} className="activeItem">
                  <span className="onlineMember">
                    <i class="far fa-dot-circle"></i>
                  </span>
                  {name}
                </div>
              ))}
            </div>
          </div>
        ) : null}
        {isHost ? (
          <div>
            <button
              onClick={() => {
                startGame();
              }}
            >
              Start Poker
            </button>
            <button>Flip Cards</button>
            <button
              onClick={() => {
                resetGame();
              }}
            >
              Reset Poker
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TextContainer;
