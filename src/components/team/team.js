import React from "react";
import "./css/style.css";
import "./css/fonts.css";
import block2 from "./assets/block2.png";

class Team extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="team">
        <div className="team-head">
          <h1>
            <span className="team_h1">Team </span>Chinen & Skills
          </h1>
          <p className="text5">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Maiores fuga
            provident Libero.
          </p>
        </div>
        <div className="team_block">
          <div className="block1">
            <div className="name1">
              <h5>Bedi Manos</h5>
              <br></br>
              <h6>UI/UX Parena</h6>
            </div>
          </div>
          <div className="block2">
            <img src={block2} alt="" />{" "}
          </div>
          <div className="block3">
            <div className="name3">
              <h5>Ali Sayed</h5>
              <br></br>
              <h6>UI/UX Designer</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
