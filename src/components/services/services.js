import React from "react";
import "./css/style.css";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import watch from "./assets/watch.png";

class Services extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="services">
        <div class="serv-head">
          <h1>
            <span class="serv">Services </span>We Provide
          </h1>
          <p class="text5">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipiscing elit Maiores fuga
            provident Libero.
          </p>
        </div>
        <div class="wrap">
          <div class="icons">
            <div class="serv-block-act">
              <img src={icon1} alt="" />
            </div>
            <div class="serv-block">
              <img src={icon2} alt="" />
            </div>
            <div class="serv-block">
              <img src={icon3} alt="" />
            </div>
            <div class="serv-block">
              <img src={icon4} alt="" />
            </div>
          </div>
          <div class="serv-text">
            <h2>Modern App Design</h2>
            <div class="line"></div>
            <p class="one">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              earum totam ad sint error porro. Consectetur, sunt, aperiam. Magni
              rem optio distinctio illum consequuntur delectus nulla illo
              aperiam itaque cumque.
            </p>

            <p class="two">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
              officia vitae eveniet quam rem unde facilis.
            </p>

            <p class="three">vitae eveniet quam rem unde facilis.</p>
            <button>+ Know More</button>
          </div>
          <div class="watch">
            <img src={watch} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
