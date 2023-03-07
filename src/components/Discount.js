import React, { Component } from "react";
import { Card, CardDeck, Container } from "react-bootstrap";
import Sales from "../img/sales.jpg";
import DiscountTop from "../img/discountTop.png";
import DiscountImg from "../img/discount.png";
import { animateScroll as scroll } from "react-scroll";
import { Text } from "@eo-locale/react";
import { discountPercents, languages } from "../_constants";

class Discount extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    const { currentLang } = this.props;
    return (
      <div className="ghost_page">
        <Container>
          <CardDeck>
            <Card>
              <Card.Img variant="top" src={DiscountTop} />
              <Card.Body style={{ minHeight: "225px" }}>
                <Card.Title>
                  <Text id="discountPage.happyDays" />
                </Card.Title>
                <Card.Text>
                  <Text id="discountPage.sunday" />
                  <br />
                  <Text
                    id="discountPage.discountCosmetics"
                    percent={
                      <span className="discountText">
                        {discountPercents.fifteen}
                      </span>
                    }
                  />
                  <br />
                  <Text
                    id="discountPage.discountSolarium"
                    percent={
                      <span className="discountText">
                        {discountPercents.twenty}
                      </span>
                    }
                  />
                  <br />
                </Card.Text>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img variant="top" src={DiscountTop} />
              <Card.Body style={{ minHeight: "225px" }}>
                <Card.Title>
                  <Text id="discountPage.happyHours" />
                  <br /> <Text id="discountPage.discountTime" />
                </Card.Title>
                <Card.Text>
                  <Text
                    id="discountPage.discountSolarium"
                    percent={
                      <span className="discountText">
                        {discountPercents.twenty}
                      </span>
                    }
                  />
                </Card.Text>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img variant="top" src={DiscountTop} />
              <Card.Body style={{ minHeight: "225px" }}>
                <Card.Title>
                  <Text id="discountPage.subscription" />
                </Card.Title>
                <Card.Text>
                  <Text
                    id="discountPage.discountSolarium"
                    percent={
                      <span className="discountText">
                        {discountPercents.twenty}
                      </span>
                    }
                  />
                </Card.Text>
              </Card.Body>
            </Card>
            {currentLang === languages.RU && (
              <Card
                className="bg-dark"
                onClick={this.scrollToTop}
                style={{ cursor: "pointer" }}
              >
                <Card.Img bsPrefix="discountImg" src={DiscountImg} />
              </Card>
            )}
          </CardDeck>
        </Container>
      </div>
    );
  }
}

export default Discount;
