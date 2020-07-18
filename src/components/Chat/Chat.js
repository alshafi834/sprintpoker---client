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
  const [cardFlipped, setCardFlipped] = useState(false);
  const [storyPoint, setStoryPoint] = useState(null);
  const socketEndPoint = "http://localhost:5000/";

  const [isHost, setIsHost] = useState(false);

  const cards = [1, 2, 3, 5, 8, 13, 21, 34, 55];

  const startGame = () => {
    console.log("starter btn");
    socket.emit("startGame");
  };

  const resetGame = () => {
    socket.emit("resetGame");
  };

  const flipCards = () => {
    socket.emit("flip-cards", messages, () => {});
  };

  useEffect(() => {
    if (localStorage.getItem("host") === "true") {
      setIsHost(true);
    }

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
      setCardFlipped(false);
      setMessages([]);
      setStoryPoint(null);
    });

    socket.on("flippingCards", (point) => {
      setCardFlipped(true);
      let closest = cards.reduce((prev, curr) => {
        return Math.abs(curr - point) < Math.abs(prev - point) ? curr : prev;
      });
      setStoryPoint(closest);
      /* for (let i = 0; i <= messages.length; i++) {
        //setStoryPoint(storyPoint + messages[i].text);
        //console.log(messages);
      } */
    });

    socket.on("gameResetting", () => {
      setStartPoker(false);
      setCardFlipped(false);
      setMessages([]);
      setStoryPoint(null);
    });
  }, []);

  //function for sending msgs
  const sendMessage = (cardnmbr) => {
    if (cardnmbr) {
      socket.emit("sendMessage", cardnmbr, () => setMessage(""));
      setStartPoker(false);
    }
  };

  console.log(storyPoint);

  return (
    <div className="outerContainer">
      <TextContainer
        users={users}
        startGame={startGame}
        isHost={isHost}
        resetGame={resetGame}
        flipCards={flipCards}
      />
      <div className="container">
        <InfoBar room={roomName} />

        <Messages
          messages={messages}
          userName={userName}
          cardFlipped={cardFlipped}
          storyPoint={storyPoint}
        />

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
