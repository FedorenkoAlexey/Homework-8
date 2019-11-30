import React from "react";
import "./css/style.css";
import "./css/fonts.css";

class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="message">
        <h3 className="test">
          <span className="send">Send </span>A Message
        </h3>
        <p className="input">Your Name</p>
        <div className="line"></div>
        <p className="input">Your Email</p>
        <div className="line"></div>
        <p className="mess">Your Message</p>
        <div className="mess-type"></div>
        <a href="#">Send Message</a>
      </div>
    );
  }
}

export default Message;
