import React from "react";
import "./css/style.css";
import "./css/fonts.css";
import Message from "./message";
import menu from "./assets/menu.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <div className="top">
          <div className="smart">
            <div className="logo_head">
              <span className="upper">S</span>mart
            </div>
          </div>
          <div className="menu">
            <img src={menu} alt="menu"></img>
          </div>
        </div>
        <div className="center">
          <h1>
            <span className="smart">Smart </span>Agency Landing Page
          </h1>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
            fuga provident. Libero magni quibusdam labore ad iste saepe hic,
            maxime qui ipsum tempore beatae, volu tomi ptates doloremque rerum
            aspernatur dolorum at!
          </p>
        </div>
        <div className="bottom">
          <Message></Message>
        </div>
      </div>
    );
  }
}

export default Header;
