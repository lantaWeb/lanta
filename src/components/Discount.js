import React, { Component } from "react";
import { Card, CardDeck, Container } from "react-bootstrap";
import DiscountTop from "../img/discountTop.png";
import { Text } from "@eo-locale/react";
import { discountPercents } from "../_constants";

class Discount extends Component {
  render() {
    return (
      <div className="ghost_page discount-page">
        <Container className="discount-container">
          <CardDeck className="discount-deck">
            {/* CARD 1 */}
            <Card className="discount-card">
              <Card.Img
                className="discount-card-image"
                variant="top"
                src={DiscountTop}
                alt=""
              />

              <Card.Body className="discount-card-body">
                <Card.Title className="discount-title">
                  <Text id="discountPage.happyDays" />
                  <br />
                  <span className="discount-subtitle">
                    <Text id="discountPage.sunday" />
                  </span>
                </Card.Title>

                <Card.Text className="discount-text">
                  <span className="discount-line">
                    <Text
                      id="discountPage.discountCosmetics"
                      percent={
                        <span className="discountText">
                          {discountPercents.fifteen}
                        </span>
                      }
                    />
                  </span>
                  <br />

                  <span className="discount-line">
                    <Text
                      id="discountPage.discountSolarium"
                      percent={
                        <span className="discountText">
                          {discountPercents.twenty}
                        </span>
                      }
                    />
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>

            {/* CARD 2 */}
            <Card className="discount-card">
              <Card.Img
                className="discount-card-image"
                variant="top"
                src={DiscountTop}
                alt=""
              />

              <Card.Body className="discount-card-body">
                <Card.Title className="discount-title">
                  <Text id="discountPage.happyHours" />
                  <br />
                  <span className="discount-subtitle">
                    <Text id="discountPage.discountTime" />
                  </span>
                </Card.Title>

                <Card.Text className="discount-text">
                  <span className="discount-line">
                    <Text
                      id="discountPage.discountSolarium"
                      percent={
                        <span className="discountText">
                          {discountPercents.twenty}
                        </span>
                      }
                    />
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>

            {/* CARD 3 */}
            <Card className="discount-card">
              <Card.Img
                className="discount-card-image"
                variant="top"
                src={DiscountTop}
                alt=""
              />

              <Card.Body className="discount-card-body">
                <Card.Title className="discount-title">
                  <Text id="discountPage.subscription" />
                  {/* Чтобы структура была как у остальных (и не прыгали отступы) */}
                  <span className="discount-subtitle">&nbsp;</span>
                </Card.Title>

                <Card.Text className="discount-text">
                  <span className="discount-line">
                    <Text
                      id="discountPage.discountSolarium"
                      percent={
                        <span className="discountText">
                          {discountPercents.twenty}
                        </span>
                      }
                    />
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </div>
    );
  }
}

export default Discount;
