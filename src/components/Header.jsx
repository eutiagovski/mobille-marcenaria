import React from "react";
import { Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Container id='home'>
        <div className="row mt-5">
          <div className="col-12 mt-3">
            <img
              src={require('../assets/img/background.jpg')}
              alt=""
              className=""
              width="100%"
            />
            <div class="jumbotron my-5 text-center">
              <h1 class="display-4">Móbille Design Marcenaria</h1>
              <p class="lead mt-4">
                Transformar sonhos em ambientes personalizados e aconchegantes,
                promovendo plena satisfação ao cliente.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Header;
