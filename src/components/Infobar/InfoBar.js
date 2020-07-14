import React from "react";
import "./InfoBar.css";

const InfoBar = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <span className="onlineIcon">
          <i class="far fa-dot-circle"></i>
        </span>
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <span className="cancelChat">
            <i class="fas fa-times"></i>
          </span>
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
