import React, { Component } from "react";
import { Card, CardDeck, Container } from "react-bootstrap";
import Hairdrsser from "../img/services_hairdrsser2.jpg"
import Manicure from "../img/services_manicure2.jpg"
import BodyCare from "../img/services_bodyCare2.jpg"
import Solarium from "../img/services_solarium2.jpg"
import Header from "./Header";



class Services extends Component {
  render() {
    return (
      <div className="white_page">
      <Header title="Наши услуги"/>
      <Container>
        {/* <div className="services_card"> */}
          <CardDeck>
            <Card className="bg-dark text-white">
              <Card.Img variant="top" src={Hairdrsser} />
              <Card.ImgOverlay>
                <Card.Title>УСЛУГИ ПАРИКМАХЕРА</Card.Title>
                <Card.Text>
                  Женские стрижки<br />
                  Мужские стрижки<br />
                  Детские стрижки<br />
                  Различные виды окрасок (мелирование, омбре)<br />
                  Укладка<br />
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white">
              <Card.Img variant="top" src={Manicure} />
              <Card.ImgOverlay>
                <Card.Title>МАНИКЮР/ПЕДИКЮР</Card.Title>
                <Card.Text>
                  Классический маникюр<br />
                  Классический педикюр<br />
                  Наращивание ногтей (гел/ акрил)<br />
                  Гелиш<br />
                  Коррекция<br />
                  Лечебный маникюр <br />
                  Лечебный педикюр<br />

                </Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white">
              <Card.Img variant="top" src={BodyCare} />
              <Card.ImgOverlay>
                <Card.Title>УХОД ЗА ТЕЛОМ И ЛИЦОМ</Card.Title>
                <Card.Text>
                  Пирсинг<br />
                  Ваксинг <br />
                  Коррекция бровей<br />
                  Покраска ресниц<br />
                  Наращивание ресниц<br />
                  Завивка ресниц<br />
                  Макияж<br />
                  Чистки и маски для лица<br />

                </Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white">
              <Card.Img variant="top" src={Solarium} />
              <Card.ImgOverlay>
                <Card.Title>СОЛЯРИЙ</Card.Title>
                <Card.Text>
                Горизонтальный солярий (Ergoline Turbo 450)<br />
                Вертикальный солярий (Luxura)<br />
                Крема для загара<br />


                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </CardDeck>
        {/* </div> */}
      </Container>
      </div>
    );
  }
}

export default Services;