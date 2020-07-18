import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";

import card from "../../images/card.png";

import "./JoinChat.css";

const JoinChat = ({ location }) => {
  const [userName, setUserName] = useState("");
  const [roomName, setRoomName] = useState("");
  const [host, setHost] = useState(false);

  const { room } = queryString.parse(location.search);

  const handleHost = (event) => {
    setHost(event.target.checked);
  };

  const handleSubmit = (event) => {
    if (!userName || !roomName) {
      event.preventDefault();
    }
    localStorage.setItem("host", host);
  };

  useEffect(() => {
    if (room) {
      setRoomName(room);
    }
  }, []);

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <img src={card} alt="sprint poker" />
        <h1 className="heading">SPRINT POKER</h1>
        <div>
          <input
            placeholder="Your name"
            className="joinInput"
            type="text"
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>
        {!room ? (
          <div>
            <input
              placeholder="Room name"
              className="joinInput mt-20"
              type="text"
              onChange={(event) => setRoomName(event.target.value)}
            />
          </div>
        ) : null}
        {!room ? (
          <div className="hostCheck">
            <input
              type="checkbox"
              id="host"
              name="host"
              onChange={handleHost}
              value={host}
            />
            <label htmlFor="host"> I am the host</label>
          </div>
        ) : null}
        <Link
          onClick={handleSubmit}
          to={`/chat?name=${userName}&room=${roomName}`}
        >
          <button className="button mt-20" type="submit">
            Join
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JoinChat;
