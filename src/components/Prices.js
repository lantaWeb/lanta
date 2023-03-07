import React, { Component } from "react";
import { Card, CardDeck, Container } from "react-bootstrap";
import Header from "./Header";

class Prices extends Component {
  render() {
    return (
      <div className="white_page">
        <Header title="Цены" />
        <Container></Container>
      </div>
    );
  }
}

export default Prices;
