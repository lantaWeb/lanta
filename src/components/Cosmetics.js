import React, { Component } from "react";
import { Card, CardColumns, Container } from "react-bootstrap";
import Header from "./Header";




class Cosmetics extends Component {
  render() {
    function importAll(r) {
      let images = {};
      r.keys().map((item, index) => { images[index] = r(item); });
      return images;
    }
    const images = importAll(require.context('../img/cosmetics', false, /\.(png|jpe?g|svg)$/));
    return (
      <div className="white_page">
        <Header title="Наша косметика" />
        <Container>
          <CardColumns>
            {
              Object.keys(images).map((key, i) => {
                return <Card className="text-white">
                  <Card.Img variant="top" src={images[key]} />
                </Card>
              }
              )}

          </CardColumns>
        </Container>
      </div>
    );
  }
}

export default Cosmetics;