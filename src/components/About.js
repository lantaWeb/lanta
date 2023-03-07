import React, { Component } from "react";
import Header from "./Header";
import { Carousel } from "react-bootstrap";
import SalonValkas from "../img/salon/1_edited.jpg";
import { Text } from "@eo-locale/react";

class About extends Component {
  render() {
    function importAll(r) {
      let images = {};
      r.keys().forEach((item, index) => {
        images[index] = r(item);
      });
      return images;
    }
    const images = importAll(
      require.context("../img/salon/about", false, /\.(png|jpe?g|svg)$/)
    );
    return (
      <>
        <div className="ghost_page">
          <div className="ghost_page_content">
            <h2>
              <Text id="aboutPage.header" />
            </h2>
            <p>
              <Text id="aboutPage.paragraph1" />
            </p>
            <p>
              <Text id="aboutPage.paragraph2" />
            </p>
            <p>
              <Text id="aboutPage.paragraph3" />
            </p>
            <p>
              <Text id="aboutPage.paragraph4" />
            </p>
            <p>
              <Text id="aboutPage.paragraph5" />
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default About;
