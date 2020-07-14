import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./JoinChat.css";

const JoinChat = () => {
  const [userName, setUserName] = useState("");
  const [roomName, setRoomName] = useState("");
  const [host, setHost] = useState(false);

  const handleHost = (event) => {
    setHost(event.target.checked);
  };

  const handleSubmit = (event) => {
    if (!userName || !roomName) {
      event.preventDefault();
    }
    localStorage.setItem("host", host);
  };

  console.log(host);

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join Chat</h1>
        <div>
          <input
            placeholder="Your name"
            className="joinInput"
            type="text"
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Chat room name"
            className="joinInput mt-20"
            type="text"
            onChange={(event) => setRoomName(event.target.value)}
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="host"
            name="host"
            onChange={handleHost}
            value={host}
          />
          <label htmlFor="host"> I am the host</label>
        </div>
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
