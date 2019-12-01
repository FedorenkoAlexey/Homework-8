import React from "react";
import "./css/style.css";
import "./css/fonts.css";
import stars from "./assets/stars.png";
import progress from "./assets/progress.png";

class Client extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="client">
        <div className="client-head">
          <h1>
            <span className="client_h1">Clients </span>Said
          </h1>
          <p className="text6">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Maiores fuga
            provident Libero.
          </p>
        </div>
        <div className="review">
          <div className="rev">
            <div className="circle"></div>
            <p className="comment">
              "This was my first time renting from car rental. The service rep
              help me find the best rental to suit my needs. I will definitely
              rent with this company again”
            </p>
            <img src={stars} alt="" />
            <p className="sign">
              <span>Kita Say,</span> HK Director
            </p>
          </div>
          <div className="rev">
            <div className="circle"></div>
            <p className="comment">
              "This was my first time renting from car rental. The service rep
              help me find the best rental to suit my needs. I will definitely
              rent with this company again”
            </p>
            <img src={stars} alt="" />
            <p className="sign">
              <span>Al Rayhan,</span> UX Director
            </p>
          </div>
        </div>
        <div className="progress">
          <img src={progress} alt="" />
        </div>
        <div className="dots"></div>
      </div>
    );
  }
}

export default Client;
