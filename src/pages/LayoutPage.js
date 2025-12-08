import React, { Component } from "react";
import Section from "../components/Section";
import Navbar from "../components/NavBar";
import About from "../components/About";
import Services from "../components/Services";
import Preview from "../components/Preview";
import Cosmetics from "../components/Cosmetics";
import Discount from "../components/Discount";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import { languages, locales } from "../_constants";
import { TranslationsProvider } from "@eo-locale/react";

class layoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = { currentLang: languages.LV, langToChange: languages.RU };
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  componentDidMount() {
    const savedLang = localStorage.getItem("lang");
    const currentLang = savedLang ? savedLang.toUpperCase() : languages.LV;
    
    this.setState({
      currentLang,
      langToChange: this.getLangToChange(currentLang),
    });
  }

  getLangToChange = (currentLang) =>
    currentLang === languages.LV ? languages.RU : languages.LV;

  changeLanguage(lang) {
    localStorage.setItem("lang", lang);

    this.setState({
      currentLang: lang,
      langToChange: this.getLangToChange(lang),
    });
  }

  render() {
    const { currentLang, langToChange } = this.state;
    return (
      <TranslationsProvider language={currentLang} locales={locales}>
        <Navbar
          langToChange={langToChange}
          changeLanguage={this.changeLanguage}
        />
        <Preview currentLang={currentLang} />
        <Section component={<About />} id="section1"></Section>
        <Section component={<Services />} id="section2" />
        <Section component={<Cosmetics />} id="section3" />
        {/* <Section
          component={<Prices />}
          id="section4"
        /> */}
        <Section
          component={<Discount currentLang={currentLang} />}
          id="section5"
        />
        <Section component={<Contacts />} id="section6" />
        <Footer></Footer>
      </TranslationsProvider>
    );
  }
}

export default layoutPage;
