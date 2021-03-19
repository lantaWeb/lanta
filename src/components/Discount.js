import React, { Component } from "react";
import { Card, CardDeck, Container, Col, Row } from "react-bootstrap";
import Sales from "../img/sales.jpg";
import Discount from "../img/discount.jpg";
import { Link, animateScroll as scroll } from "react-scroll";



class About extends Component {

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        var src = "../img/sales.jpg"
        return (
            <div className="ghost_page">
                <Container>
                    <CardDeck >
                                <Card className="bg-dark text-white lg">
                                    <Card.Img variant="top" src={Sales} />
                                    <Card.Body style={{minHeight:"225px"}}>
                                        <Card.Title >СЧАСТЛИВЫЙ ДЕНЬ</Card.Title>
                                        <Card.Text >
                                            Воскресенье<br/>
                                            -15% на косметику<br/>
                                                -20% на солярий<br/>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                                <Card className="bg-dark text-white">
                                    <Card.Img variant="top" src={Sales} />
                                    <Card.Body  style={{minHeight:"225px"}}>
                                        <Card.Title >СЧАСТЛИВЫЕ ЧАСЫ<br/> (С 8.00 ДО 10.00)</Card.Title>
                                        <Card.Text>
                                            -20% на солярий
                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                                <Card className="bg-dark text-white">
                                    <Card.Img variant="top" src={Sales}  />
                                    <Card.Body style={{minHeight:"225px"}}>
                                        <Card.Title >АБОНЕМЕНТ</Card.Title>
                                        <Card.Text>
                                            -20% на солярий

                                        </Card.Text>
                                    </Card.Body>
                                </Card>


                                <Card className="bg-dark text-white" onClick={this.scrollToTop} style={{cursor:"pointer"}}>
                                    <Card.Img  src={Discount} />
                                </Card>



                    </CardDeck>
                </Container>
            </div>
        );
    }
}

export default About;