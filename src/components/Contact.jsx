import { Container, Row, Col, Form, Button } from "react-bootstrap";
import React from "react";

const Contact = () => {
  return (
    <>
      <Container id="contact" className="pb-5">
        <Row>
          <Col className="mb-3">
            <h3>Entre em Contato e Solicite Já seu Orçamento!</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="mb-4">Aonde Estamos:</h5>
            <div className="my-4 iframe-maps">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58772.668601412755!2d-43.51858472140608!3d-22.976295353831176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdd7fb7fd02e9%3A0x8d206948f1f0b551!2sVargem%20Grande%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1653946311257!5m2!1spt-BR!2sbr"
                width="350"
                height="300"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
          <Col>
            <h5 className="mb-4">Solicite Um Orçamento:</h5>
            <Form>
              <Row>
                <Col sm={12}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Informe seu nome e sobrenome"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Informe o seu melhor e-mail"
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Informe o seu melhor telefone"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col className="d-flex justify-content-end mt-3">
                  <Button>Solicitar Orçamento</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
