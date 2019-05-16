import React, { Component } from "react";
import { Carousel, Container, Card, CardDeck, ListGroup, ListGroupItem } from "react-bootstrap";
import Header from "./Header";
import SalonValkas from "../img/salon/1_edited.jpg"
import SalonTaller from "../img/salon/2_edited.jpg"
import SalonDitton from "../img/salon/11_edited.jpg"

const lantaCont = [{
    lanta: {
        name: "Lanta",
        adress: "Viestura iela 68, Daugavpils",
        adressLink: "https://goo.gl/maps/VB6f5AqCEnHsVgZy8",
        tel: [
            "65427599",
            "+371 22333266"
        ],
        workTime: [
            "Пн.-Пт. 8:00 – 20:00",
            "Сб. 8:00 – 18:00",
            "Вс. 10:00-16:00",
        ],
        email: "lanta98@inbox.lv"

    },
    lantaDit: {
        name: "Lanta Ditton",
        adress: "Cietokšņa iela 60, Daugavpils",
        adressLink: "https://goo.gl/maps/yyCVL5RrqzJhuuE2A",
        tel: [
            "65420135"
        ],
        workTime: [
            "Пн. 9:00-17:00",
            "Вт.-Пт. 9:00 – 19:00",
            "Сб. 8:00 – 17:00",
            "Вс. 8:00-16:00",
        ],
        email: "lanta98@inbox.lv"
    },
    lantaM: {
        name: "Lanta-M",
        adress: "Valkas iela 5-40, Daugavpils",
        adressLink: "https://goo.gl/maps/dyCqRqss9NsHca2eA",
        tel: [
            "65449006",
            "+371 24500900"
        ],
        workTime: [
            "Пн.-Пт. 8:00 – 20:00",
            "Сб. 8:00 – 18:00",
            "Вс. 10:00-16:00",
        ],
        email: "lanta98@inbox.lv"
    }
}]


class Contacts extends Component {
    render() {
        return (
            <div className="white_page">
                <Header title="Наши контакты" />
                <Container >
                    <CardDeck style={{ margin: 'auto' }}>
                        {
                            lantaCont.map((item =>
                                Object.keys(item).map((key) =>
                                    <div style={{ minWidth: '33%' }}>
                                        <Card >
                                            <Card.Body>
                                                <Card.Title style={{ fontWeight: '600', marginTop: '20px', marginBottom: '0px' }}>{item[key].name}</Card.Title>
                                                <Card.Text style={{ fontWeight: '600', marginTop: '20px', marginBottom: '0px' }}>Адресс:</Card.Text>
                                                <ListGroupItem><a target='_blank' href={item[key].adressLink}><i className="fas fa-map-marker-alt"></i>{"  "}{item[key].adress}</a></ListGroupItem>
                                                <Card.Text style={{ fontWeight: '600', marginTop: '20px', marginBottom: '0px' }}>Телефон:</Card.Text>
                                                {item[key].tel.map(time =>
                                                    <ListGroupItem>{time}</ListGroupItem>
                                                )}
                                                <Card.Text style={{ fontWeight: '600', marginTop: '20px', marginBottom: '0px' }}>Время работы:</Card.Text>
                                                {item[key].workTime.map(tel =>
                                                    <ListGroupItem>{tel}</ListGroupItem>
                                                )}
                                                <Card.Text style={{ fontWeight: '600', marginTop: '20px', marginBottom: '0px' }}>Э-почта:</Card.Text>
                                                <ListGroupItem><a href={"mailto:" + item[key].email}><i class="fas fa-envelope"></i>{"  "}{item[key].email}</a></ListGroupItem>
                                            </Card.Body>
                                        </Card>
                                    </div>



                                )

                            )
                            )



                        }

                    </CardDeck>

                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={SalonValkas}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={SalonTaller}
                                alt="Third slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={SalonDitton}
                                alt="Third slide"
                            />

                        </Carousel.Item>
                    </Carousel>


                </Container>

            </div>
        );
    }
}

export default Contacts;