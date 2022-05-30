import { useState } from "react";
import ModalImage from "react-modal-image";
import { Container, Row, Col, Nav } from "react-bootstrap";

const Products = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const products = [
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "kitchen-1.jpg",
      categorie: "Ambientes Planejados",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "kitchen-2.jpg",
      categorie: "Ambientes Planejados",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "kitchen-.jpg",
      categorie: "Ambientes Planejados",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "cozinha-1.jpg",
      categorie: "Ambientes Planejados",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "cozinha-1.jpg",
      categorie: "Cozinhas",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "cozinha-2.jpg",
      categorie: "Cozinhas",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "cozinha-3.jpg",
      categorie: "Cozinhas",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "kitchen-.jpg",
      categorie: "Cozinhas",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "quarto-solteiro-1.jpg",
      categorie: "Quartos de Solteiro",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "quarto-solteiro-2.jpg",
      categorie: "Quartos de Solteiro",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "cozinha-3.jpg",
      categorie: "Quartos de Solteiro",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "cozinha-3.jpg",
      categorie: "Quartos de Solteiro",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "quarto-casal-2.jpg",
      categorie: "Quartos de Casal",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "quarto-casal-1.jpg",
      categorie: "Quartos de Casal",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "quarto-casal-2.jpg",
      categorie: "Quartos de Casal",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "quarto-casal-1.jpg",
      categorie: "Quartos de Casal",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "office-1.jpg",
      categorie: "Offices",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "office-2.jpg",
      categorie: "Offices",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "office-1.jpg",
      categorie: "Offices",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "office-1.jpg",
      categorie: "Offices",
    },
  ];

  const categories = [...new Set(products.map((product) => product.categorie))];
  console.log(categories);

  return (
    <>
      <Container id="products">
        <Row>
          <Col>
            <Nav className="d-flex justify-content-between w-100 mb-5">
              {categories.map((categorie, index) => (
                <Nav.Link href={`#${categorie}`}>{categorie}</Nav.Link>
              ))}
            </Nav>
          </Col>
        </Row>
        {categories.map((categorie, index) => (
          <>
            <Row id={categorie}>
              <Col>
                <h3 className="mb-5">{categorie}</h3>
              </Col>
            </Row>
            <Row>
              <Col className="d-inline-flex mb-5">
                {products.map((product) => {
                  if (product.categorie === categorie)
                    return (
                      <>
                        <div className="card">
                          <ModalImage
                            small={require(`../assets/img/${product.imgUrl}`)}
                            large={require(`../assets/img/cozinha-1.jpg`)}
                            alt={product.title}
                          />
                        </div>
                      </>
                    );
                })}
              </Col>
            </Row>
          </>
        ))}
      </Container>
    </>
  );
};

export default Products;
