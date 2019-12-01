import React from "react";
import "./css/style.css";
import "./css/fonts.css";

class Working extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="working">
        <div className="process">
          <h1>
            <span className="work">Working </span>Process
          </h1>
          <p className="text2">
            Lorem ipsum dolor sit amet consectet ur adipiscing elit Vestibulum
            bibend um vestibulum.
          </p>
        </div>
        <div className="group">
          <div class="card1">
            {" "}
            <button>+ Know More</button>{" "}
          </div>
          <div className="card2">
            <button>+ Know More</button>
          </div>
          <div className="card3">
            {" "}
            <button>+ Know More</button>
          </div>
          <div className="card4">
            <button>+ Know More</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Working;
