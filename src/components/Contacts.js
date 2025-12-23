import React, { Component } from "react";
import { Carousel, Container, Card, CardDeck, ListGroupItem } from "react-bootstrap";
import Header from "./Header";
import SalonValkas from "../img/salon/1_edited.jpg";
import SalonTaller from "../img/salon/2_edited.jpg";
import SalonDitton from "../img/salon/11_edited.jpg";
import { Text } from "@eo-locale/react";

const lantaCont = [
  {
    lanta: {
      name: "Lanta",
      address: "Viestura iela 68, Daugavpils",
      addressLink: "https://goo.gl/maps/VB6f5AqCEnHsVgZy8",
      tel: ["65427599", "+371 22333266"],
      workTime: [
        <Text id="contactsPage.mon_fri" time="8:00–20:00" />,
        <Text id="contactsPage.sat" time="8:00–18:00" />,
        <Text id="contactsPage.sun" time="10:00-16:00" />,
      ],
      email: "lanta98@inbox.lv",
    },
    lantaDit: {
      name: "Lanta Ditton",
      address: "Cietokšņa iela 60, Daugavpils",
      addressLink: "https://goo.gl/maps/yyCVL5RrqzJhuuE2A",
      tel: ["65420135"],
      workTime: [
        <Text id="contactsPage.mon" time="9:00-17:00" />,
        <Text id="contactsPage.tue_fri" time="9:00–19:00" />,
        <Text id="contactsPage.sat" time="8:00-17:00" />,
        <Text id="contactsPage.sun" time="8:00-16:00" />,
      ],
      email: "lanta98@inbox.lv",
    },
    lantaM: {
      name: "Lanta-M",
      address: "Valkas iela 5-40, Daugavpils",
      addressLink: "https://goo.gl/maps/dyCqRqss9NsHca2eA",
      tel: ["65449006", "+371 24500900"],
      workTime: [
        <Text id="contactsPage.mon_fri" time="8:00-20:00" />,
        <Text id="contactsPage.sat" time="8:00-18:00" />,
        <Text id="contactsPage.sun" time="10:00-16:00" />,
      ],
      email: "lanta98@inbox.lv",
    },
  },
];

class Contacts extends Component {
  render() {
    return (
      <div className="white_page contacts-page">
        <Header title={<Text id="contactsPage.contacts" />} />
        <Container>
          <CardDeck className="contacts-deck" style={{ margin: "auto" }}>
            {lantaCont.map((item) =>
              Object.keys(item).map((key) => (
                <div className="contacts-col" style={{ minWidth: "33%" }} key={key}>
                  <Card className="contacts-card">
                    <Card.Body className="contacts-card-body">
                      <Card.Title className="contacts-title">{item[key].name}</Card.Title>

                      <Card.Text className="contacts-label">
                        <Text id="contactsPage.address" />:
                      </Card.Text>
                      <ListGroupItem className="contacts-item">
                        <a href={item[key].addressLink} target="_blank" rel="noreferrer">
                          <i className="fas fa-map-marker-alt"></i>
                          {"  "}
                          {item[key].address}
                        </a>
                      </ListGroupItem>

                      <Card.Text className="contacts-label">
                        <Text id="contactsPage.tell" />:
                      </Card.Text>
                      {item[key].tel.map((t) => (
                        <ListGroupItem className="contacts-item" key={t}>
                          <a href={"tel:" + t}>{t}</a>
                        </ListGroupItem>
                      ))}

                      <Card.Text className="contacts-label">
                        <Text id="contactsPage.workTime" />:
                      </Card.Text>
                      {item[key].workTime.map((wt, idx) => (
                        <ListGroupItem className="contacts-item" key={idx}>
                          {wt}
                        </ListGroupItem>
                      ))}

                      <Card.Text className="contacts-label">
                        <Text id="contactsPage.email" />:
                      </Card.Text>
                      <ListGroupItem className="contacts-item">
                        <a href={"mailto:" + item[key].email}>
                          <i className="fas fa-envelope"></i>
                          {"  "}
                          {item[key].email}
                        </a>
                      </ListGroupItem>
                    </Card.Body>
                  </Card>
                </div>
              ))
            )}
          </CardDeck>

          <div className="contacts-carousel">
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100 contacts-carousel-img" src={SalonValkas} alt="Salon" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 contacts-carousel-img" src={SalonTaller} alt="Salon" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 contacts-carousel-img" src={SalonDitton} alt="Salon" />
              </Carousel.Item>
            </Carousel>
          </div>
        </Container>
      </div>
    );
  }
}

export default Contacts;
