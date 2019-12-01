import React from "react";
import "./css/style.css";
import social1 from "./assets/social1.png";
import social2 from "./assets/social2.png";
import social3 from "./assets/social3.png";
import social4 from "./assets/social4.png";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer">
        <div className="contact">
          <button>Contact Us</button>{" "}
        </div>
        <div className="social">
          <img src={social1} alt="" />
          <img src={social2} alt="" className="soc_icon" />
          <img src={social3} alt="" className="soc_icon" />
          <img src={social4} alt="" className="soc_icon" />
          <p className="foot_test">© 2015 - 2016 Deviserweb Ltd.</p>
        </div>
      </div>
    );
  }
}

export default Footer;
