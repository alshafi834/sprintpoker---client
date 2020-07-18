import React, { useState } from "react";

import "./TextContainer.css";

const TextContainer = ({ users, startGame, isHost, resetGame, flipCards }) => {
  return (
    <div className="textContainer">
      <div>
        <h2>Members Joined:</h2>
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
              className="start"
              onClick={() => {
                startGame();
              }}
            >
              Start Poker <i class="far fa-play-circle"></i>
            </button>{" "}
            <br></br>
            <button
              className="flip"
              onClick={() => {
                flipCards();
              }}
            >
              Flip Cards <i class="fas fa-exchange-alt"></i>
            </button>{" "}
            <br></br>
            <button
              className="reset"
              onClick={() => {
                resetGame();
              }}
            >
              Reset Poker <i class="fas fa-undo-alt"></i>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TextContainer;
