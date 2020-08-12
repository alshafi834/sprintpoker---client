import React, { useRef, useState } from "react";

import "./LeftBar.css";

const LeftBar = ({ room, users, startGame, isHost, resetGame, flipCards }) => {
  const joinUrl = useRef(null);
  const [isCopied, setIsCopied] = useState(false);
  const [gameState, setGameState] = useState("start");

  const joinLink = "http://" + window.location.hostname + "/join?room=" + room;

  const copyLink = () => {
    const elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = joinUrl.current.childNodes[0].data;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    setIsCopied(true);
  };

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
              disabled={gameState === "started"}
              className="start"
              onClick={() => {
                startGame();
                setGameState("started");
              }}
            >
              Start Poker <i class="far fa-play-circle"></i>
            </button>{" "}
            <br></br>
            <button
              disabled={gameState === "start" || gameState === "flipped"}
              className="flip"
              onClick={() => {
                flipCards();
                setGameState("flipped");
              }}
            >
              Flip Cards <i class="fas fa-exchange-alt"></i>
            </button>{" "}
            <br></br>
            <button
              disabled={gameState === "start"}
              className="reset"
              onClick={() => {
                resetGame();
                setGameState("start");
              }}
            >
              Reset Poker <i class="fas fa-undo-alt"></i>
            </button>
          </div>
        ) : null}
      </div>
      <div className="inviteMember">
        <h2>Invite</h2>
        <p>Share the URL to join</p>
        <p className="inviteUrl" ref={joinUrl} onClick={copyLink}>
          {joinLink}
        </p>
        <button className="copy" onClick={copyLink}>
          {isCopied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default LeftBar;
