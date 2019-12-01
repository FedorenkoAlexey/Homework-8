import React from "react";
import "./css/style.css";
import "./css/fonts.css";

class Featured extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="featured">
        <div className="feat-head">
          <h1>
            <span className="feat">Feautured </span>Works
          </h1>
          <p className="text3">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Maiores fuga
            provident Libero.
          </p>
        </div>
        <div className="feat-group">
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
        </div>
      </div>
    );
  }
}

export default Featured;
