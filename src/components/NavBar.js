import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Image } from "react-bootstrap"
import Logo from "../img/logo/logo.png"

import { Route, BrowserRouter } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

//import createBrouwserHistory from "history/createBrowserHistory";


//const history = createBrouwserHistory()
class NavBar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() {
        return (


            <div>
                <Navbar expand="lg" className="menu-bg" fixed="top">
                    <Navbar.Brand href="#" onClick={this.scrollToTop}><Image src={Logo} width="110" /></Navbar.Brand>
                    <Navbar.Toggle className="toggle-bg" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="menu" id="basic-navbar-nav" >
                        <Nav defaultActiveKey="/home"  >
                            <Link
                                activeClass="active"
                                className="link_to_section1"
                                to="section1"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                О НАС
                            </Link>
                            <Link
                                activeClass="active"
                                to="section2"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                УСЛУГИ
                            </Link>
                            <Link
                                activeClass="active"
                                to="section3"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                КОСМЕТИКА
                            </Link>
                            {/* <Link
                                activeClass="active"
                                to="section4"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                ЦЕНЫ
                            </Link> */}
                            <Link
                                activeClass="active"
                                to="section5"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                АКЦИИ
                            </Link>
                            <Link
                                activeClass="active"
                                to="section6"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                КОНТАКТЫ
                            </Link>

                            {/* <Link to="section1">О НАС</Link>
                            <Link to="section2">УСЛУГИ</Link>
                            <Link to="section3">КОСМЕТИКА</Link>
                            <Link to="section4">АКЦИИ</Link>
                            <Link to="section5">КОНТАКТЫ</Link> */}

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>



        );
    }
}

export default NavBar;