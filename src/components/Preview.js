import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Image } from "react-bootstrap";
import Discount from "../img/discount.png";
import { languages } from "../_constants";
import { Text } from "@eo-locale/react";

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconUp: "down",
    };
  }
  render() {
    const { currentLang } = this.props;
    return (
      <>
        <div className="spot">
          <div className="spot_text">
            <div className="darkspottext">
              <Text id="preview.spotText" />
            </div>
            <div className="darksmallspottext">
              <Text id="preview.spotTextMall" />
            </div>
          </div>
          {/* {currentLang === languages.RU && (
            <div className="spot_img">
              <Image src={Discount} fluid />
            </div>
          )} */}
          <div className="down_icon">
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <i
                className={`fas fa-chevron-${this.state.iconUp}`}
                onMouseLeave={() => this.setState({ iconUp: "down" })}
                onMouseEnter={() => this.setState({ iconUp: "up" })}
              ></i>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Preview;
