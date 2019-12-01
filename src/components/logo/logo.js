import React from "react";
import "./css/style.css";
import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
// import progress from "./assets/progress.png";

class Logo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="logo">
        <img src={logo1} alt="" className="partners" />
        <img src={logo2} alt="" className="partners" />
        <img src={logo3} alt="" className="partners" />
        <img src={logo1} alt="" className="partners" />
        <img src={logo2} alt="" className="partners" />
        <img src={logo3} alt="" className="partners" />
      </div>
    );
  }
}

export default Logo;
