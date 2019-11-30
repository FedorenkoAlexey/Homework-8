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
        <div class="process">
          <h1>
            <span class="work">Working </span>Process
          </h1>
          <p class="text2">
            Lorem ipsum dolor sit amet consectet ur adipiscing elit Vestibulum
            bibend um vestibulum.
          </p>
        </div>
        <div class="group">
          <div class="card1">
            {" "}
            <button>+ Know More</button>{" "}
          </div>
          <div class="card2">
            <button>+ Know More</button>
          </div>
          <div class="card3">
            {" "}
            <button>+ Know More</button>
          </div>
          <div class="card4">
            <button>+ Know More</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Working;
