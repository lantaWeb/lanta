import React, { Component } from "react";
import { Card, CardDeck, Container } from "react-bootstrap";
import Hairdrsser from "../img/services_hairdrsser2.jpg";
import Manicure from "../img/services_manicure2.jpg";
import BodyCare from "../img/services_bodyCare2.jpg";
import Solarium from "../img/services_solarium2.jpg";
import Header from "./Header";
import { Text } from "@eo-locale/react";

class Services extends Component {
  render() {
    return (
      <div className="white_page services-page">
        <Header title={<Text id="servicesPage.pageName" />} />
        <Container>
          <CardDeck className="services-deck">
            <Card className="services-card text-white">
              <Card.Img className="services-img mob-fit" variant="top" src={Hairdrsser} />
              <Card.ImgOverlay className="services-overlay">
                <Card.Title className="services-title">
                  <Text id="servicesPage.hairdresserServices" />
                </Card.Title>
                <Card.Text className="services-text">
                  <Text id="servicesPage.newHaircuts" />
                  <br />
                  <Text id="servicesPage.newHairmake" />
                  <br />
                  <Text id="servicesPage.newHairproc" />
                  <br />
                  <Text id="servicesPage.newHairnight" />
                  <br />
                  <Text id="servicesPage.coloring" />
                  <br />
                  <Text id="servicesPage.newcoloringremove" />
                  <br />
                  <Text id="servicesPage.newHairwawing" />
                  <br />
                  <Text id="servicesPage.manHaircuts" />
                  <br />
                  <Text id="servicesPage.childsHaircuts" />
                </Card.Text>
              </Card.ImgOverlay>
            </Card>

            <Card className="services-card text-white">
              <Card.Img className="services-img mob-fit" variant="top" src={Manicure} />
              <Card.ImgOverlay className="services-overlay">
                <Card.Title className="services-title">
                  <Text id="servicesPage.manicurePedicure" />
                </Card.Title>
                <Card.Text className="services-text">
                  <Text id="servicesPage.manicure" />
                  <br />
                  <Text id="servicesPage.newgelishmanicure" />
                  <br />
                  <Text id="servicesPage.newgelishremoce" />
                  <br />
                  <Text id="servicesPage.newmanicuredesign" />
                  <br />
                  <Text id="servicesPage.pedicure" />
                  <br />
                  <Text id="servicesPage.newfootnail" />
                  <br />
                  <Text id="servicesPage.newfootnailgelish" />
                  <br />
                  <Text id="servicesPage.newnailgel" />
                  <br />
                  <Text id="servicesPage.nailExtension" />
                  <br />
                  <Text id="servicesPage.correction" />
                  <br />
                  <Text id="servicesPage.newnailacril" />
                  <br />
                  <Text id="servicesPage.newgelgelishremove" />
                </Card.Text>
              </Card.ImgOverlay>
            </Card>

            <Card className="services-card text-white">
              <Card.Img className="services-img mob-fit" variant="top" src={BodyCare} />
              <Card.ImgOverlay className="services-overlay">
                <Card.Title className="services-title">
                  <Text id="servicesPage.bodyAndFaceCare" />
                </Card.Title>
                <Card.Text className="services-text">
                  <Text id="servicesPage.newvask" />
                  <br />
                  <Text id="servicesPage.newears" />
                  <br />
                  <Text id="servicesPage.piercing" />
                  <br />
                  <Text id="servicesPage.eyebrowCorrection" />
                  <br />
                  <Text id="servicesPage.eyelashes" />
                  <br />
                  <Text id="servicesPage.eyelashPerm" />
                  <br />
                  <Text id="servicesPage.makeup" />
                  <br />
                  <Text id="servicesPage.cleansesAndFaceMasks" />
                </Card.Text>
              </Card.ImgOverlay>
            </Card>

            <Card className="services-card text-white">
              <Card.Img className="services-img mob-fit" variant="top" src={Solarium} />
              <Card.ImgOverlay className="services-overlay">
                <Card.Title className="services-title">
                  <Text id="servicesPage.solarium" />
                </Card.Title>
                <Card.Text className="services-text">
                  <Text id="servicesPage.horizontal" />
                  <br />
                  <Text id="servicesPage.vertical" />
                  <br />
                  <Text id="servicesPage.sunCream" />
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </CardDeck>
        </Container>
      </div>
    );
  }
}

export default Services;
