import { Container, Row, Col, Carousel } from "react-bootstrap";
import React from "react";

const Footer = () => {
  return (
    <>
      <section id="footer">
        <Container>
          <Row >
            <Col sm={6} className="py-5">
              <h5>Móbille Design Marcenaria</h5>
              <p></p>
              <ul>
                <li>mobilledesignmarcenaria@gmail.com</li>
                <li>(21) 3502-4167 | +55 21 99580-1641</li>
                <li>Rua Manhuaçu, 303 - Vargem Grande, Rio de Janeiro, RJ</li>
              </ul>
            </Col>
            <Col className="py-5">
              <h5>Serviços</h5>
              <p></p>
              <ul>
                <li>Ambientes Planejados</li>
                <li>Quartos de Casal</li>
                <li>Quartos de Solteiro</li>
                <li>Cozinhas</li>
                <li>Home Offices</li>
              </ul>
            </Col>
            <Col className="py-5">
                <h5>Redes Sociais</h5>
                <p></p>

            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Footer;
