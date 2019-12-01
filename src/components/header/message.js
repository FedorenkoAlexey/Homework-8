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
        <input className="input" placeholder="Your Name" />
        <div className="line"></div>
        <input className="input" placeholder="Your Email" />
        <div className="line"></div>
        {/* <p className="mess">Your Message</p> */}
        <input className="input input_mess" placeholder="Your Message" />
        <div className="mess-type"></div>
        <a href="#">Send Message</a>
      </div>
    );
  }
}

export default Message;
