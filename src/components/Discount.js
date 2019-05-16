import React, { Component } from "react";
import { Card, CardDeck, Container, Col, Row } from "react-bootstrap";
import Sales from "../img/sales.jpg";



class About extends Component {
    render() {
        var src = "../img/sales.jpg"
        return (
            <div className="ghost_page">
                <Container>
                    <CardDeck >
                        <Row>
                            <Col sm >
                                <Card className="bg-dark text-white lg" >
                                    <Card.Img variant="top" src={Sales} />
                                    <Card.Body>
                                        <Card.Title >СЧАСТЛИВЫЙ ДЕНЬ</Card.Title>
                                        <Card.Text >
                                            Воскресенье<br/>
                                            -15% на косметику<br/>
                                                -20% на солярий<br/>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                            </Col>
                            <Col sm >
                                <Card className="bg-dark text-white">
                                    <Card.Img variant="top" src={Sales} />
                                    <Card.Body>
                                        <Card.Title >СЧАСТЛИВЫЕ ЧАСЫ<br/> (С 8.00 ДО 10.00)</Card.Title>
                                        <Card.Text>
                                            -20% на солярий
                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                            </Col>
                            <Col sm >
                                <Card className="bg-dark text-white">
                                    <Card.Img variant="top" src={Sales} />
                                    <Card.Body>
                                        <Card.Title >АБОНЕМЕНТ</Card.Title>
                                        <Card.Text>
                                            -20% на солярий

                                        </Card.Text>
                                    </Card.Body>
                                </Card>



                            </Col>
                        </Row>



                    </CardDeck>
                </Container>
            </div>
        );
    }
}

export default About;