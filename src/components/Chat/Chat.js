import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import "./Chat.css";
import InfoBar from "../Infobar/InfoBar";
import MsgInput from "../MsgInput/MsgInput";
import Messages from "../Messages/Messages";
import TextContainer from "../TextContainer/TextContainer";

let socket;

const Chat = ({ location }) => {
  const [userName, setUserName] = useState("");
  const [roomName, setRoomName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState("");
  const [startPoker, setStartPoker] = useState(false);
  const socketEndPoint = "http://localhost:5000/";

  const startGame = () => {
    console.log("starter btn");
    socket.emit("startGame");
  };

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(socketEndPoint);

    setUserName(name);
    setRoomName(room);

    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [location.search, socketEndPoint]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });

    socket.on("gameStarting", () => {
      setStartPoker(true);
      console.log("game started");
    });
  }, []);

  //function for sending msgs
  const sendMessage = (cardnmbr) => {
    if (cardnmbr) {
      socket.emit("sendMessage", cardnmbr, () => setMessage(""));
    }
  };

  console.log(message, messages);

  return (
    <div className="outerContainer">
      <TextContainer users={users} startGame={startGame} />
      <div className="container">
        <InfoBar room={roomName} />

        <Messages messages={messages} userName={userName} />

        <MsgInput
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
          startPoker={startPoker}
        />
      </div>
    </div>
  );
};

export default Chat;
