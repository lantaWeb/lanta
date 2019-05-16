import React, { Component } from "react";
import Section from "../components/Section";
import Navbar from "../components/NavBar";
import About from "../components/About";
import Services from "../components/Services";
import Preview from "../components/Preview";
import Cosmetics from "../components/Cosmetics";
import Prices from "../components/Prices";
import Discount from "../components/Discount";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";




class layoutPage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Preview />
        <Section
          component={<About />}
          id="section1"
        >
        </Section>
        <Section
          component={<Services />}
          id="section2"
        />
        <Section
          component={<Cosmetics />}
          id="section3"
        />
        {/* <Section
          component={<Prices />}
          id="section4"
        /> */}
        <Section
          component={<Discount />}
          id="section5"
        />
        <Section
          component={<Contacts />}
          id="section6"
        />
        <Footer>

        </Footer>
      </>
    );
  }
}

export default layoutPage;