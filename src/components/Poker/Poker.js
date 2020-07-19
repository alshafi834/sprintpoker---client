import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import "./Poker.css";
import InfoBar from "../Infobar/InfoBar";
import PlayCard from "../MsgInput/PlayCard";
import Cards from "../Cards/Cards";
import LeftBar from "../LeftBar/LeftBar";

import soundtrack from "../../files/sound.mp3";
import cardstrack from "../../files/cards.mp3";
import fliptrack from "../../files/magic.mp3";

let socket;

const Poker = ({ location }) => {
  const [userName, setUserName] = useState("");
  const [roomName, setRoomName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState("");
  const [startPoker, setStartPoker] = useState(false);
  const [cardFlipped, setCardFlipped] = useState(false);
  const [storyPoint, setStoryPoint] = useState(null);
  const socketEndPoint = process.env.REACT_APP_BACKEND_URL;

  const [isHost, setIsHost] = useState(false);

  const cards = [1, 2, 3, 5, 8, 13, 21, 34, 55];

  const startGame = () => {
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
    let cardSound = new Audio(cardstrack);
    socket.on("message", (message) => {
      cardSound.play();
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });

    socket.on("gameStarting", () => {
      let startSound = new Audio(soundtrack);
      startSound.play();
      setStartPoker(true);
      setCardFlipped(false);
      setMessages([]);
      setStoryPoint(null);
    });

    socket.on("flippingCards", (point) => {
      let magicSound = new Audio(fliptrack);
      magicSound.play();
      cardSound.play();
      setCardFlipped(true);
      let closest = cards.reduce((prev, curr) => {
        return Math.abs(curr - point) < Math.abs(prev - point) ? curr : prev;
      });
      setStoryPoint(closest);
    });

    socket.on("gameResetting", () => {
      cardSound.play();
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

  return (
    <div className="outerContainer">
      <LeftBar
        room={roomName}
        users={users}
        startGame={startGame}
        isHost={isHost}
        resetGame={resetGame}
        flipCards={flipCards}
      />
      <div className="container">
        <InfoBar room={roomName} />

        <Cards
          messages={messages}
          userName={userName}
          cardFlipped={cardFlipped}
          storyPoint={storyPoint}
        />

        <PlayCard
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
          startPoker={startPoker}
        />
      </div>
    </div>
  );
};

export default Poker;
