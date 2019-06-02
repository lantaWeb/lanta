import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Image } from "react-bootstrap";
import Discount from "../img/discount.jpg";



class Preview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iconUp: "down"
        };
      }
    render() {
        return (
            <>
                <div className="spot">
                    <div className="spot_text">
                        <div className="darkspottext">
                            Будь красивой

                        </div>
                        <div className="darksmallspottext">
                            Салоны красоты в даугавпилсе

                        </div>
                    </div>
                    <div className="spot_img">
                    <Image src={Discount} style={{height:"450px"}} fluid/>
                    </div>
                    <div className="down_icon">
                    <Link
                                activeClass="active"
                                to="section1"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                    <i  className={`fas fa-chevron-${this.state.iconUp}`} onMouseLeave={() => this.setState({iconUp:"down"})} onMouseEnter={() => this.setState({iconUp:"up"})}></i>
                    </Link>
                    </div>
                 </div>   

                
            </>
        );
    }
}

export default Preview;