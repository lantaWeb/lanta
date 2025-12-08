import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";
import { Text } from "@eo-locale/react";
import Logo from "../img/logo/logo.png";

const sections = [
  { sectionNumber: 1, sectionNameId: "aboutUs" },
  { sectionNumber: 2, sectionNameId: "services" },
  { sectionNumber: 3, sectionNameId: "cosmetics" },
  { sectionNumber: 5, sectionNameId: "promotions" },
  { sectionNumber: 6, sectionNameId: "contacts" },
];

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.openCloseNavBar = this.openCloseNavBar.bind(this);
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  openCloseNavBar(expanded) {
    this.setState({ ...this.state, expanded: expanded });
  }

  render() {
    const { changeLanguage, langToChange } = this.props;
    const { expanded } = this.state;
    return (
      <div>
        <Navbar expanded={expanded} expand="lg" className="menu-bg" fixed="top">
          <Navbar.Brand
            href="#"
            onClick={() => {
              this.openCloseNavBar(false);
              this.scrollToTop();
            }}
          >
            <Image src={Logo} width="90" />
          </Navbar.Brand>
          <Navbar.Toggle
            className="my_navbar_toggle"
            onClick={() => this.openCloseNavBar(!expanded)}
            children={
              <label className="navBarToggle" for="check">
                <input
                  checked={expanded}
                  onClick={() => this.openCloseNavBar(!expanded)}
                  type="checkbox"
                  id="check"
                />
                <span></span>
                <span></span>
                <span></span>
              </label>
            }
          />

          <Navbar.Collapse className="menu" id="basic-navbar-nav">
            <Nav defaultActiveKey="/home">
              {sections.map((section, i) => (
                <Link
                  key={`${section.sectionNameId}_${i}`}
                  activeClass="active"
                  className={section.sectionNumber === 1 && "link_to_section1"}
                  to={`section${section.sectionNumber}`}
                  spy
                  smooth
                  offset={40}
                  duration={1000}
                  onClick={() => this.openCloseNavBar(false)}
                  isDynamic
                >
                  <Text id={section.sectionNameId} />
                </Link>
              ))}
            </Nav>
            <span onClick={() => changeLanguage(langToChange)}>
              {langToChange}
            </span>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
