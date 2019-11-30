import React from "react";
import "./css/style.css";
import "./css/fonts.css";

class Featured extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="featured">
        <div class="feat-head">
          <h1>
            <span class="feat">Feautured </span>Works
          </h1>
          <p class="text3">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Maiores fuga
            provident Libero.
          </p>
        </div>
        <div class="feat-group">
          <div class="block"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block"></div>
        </div>
      </div>
    );
  }
}

export default Featured;
