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
      imgUrl: "/assets/img/kitchen-1.jpg",
      categorie: "Ambientes Planejados",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "/assets/img/kitchen-1.jpg",
      categorie: "Ambientes Planejados",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "/assets/img/kitchen-1.jpg",
      categorie: "Ambientes Planejados",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "/assets/img/kitchen-1.jpg",
      categorie: "Ambientes Planejados",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "/assets/img/kitchen-2.jpg",
      categorie: "Cozinhas",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "/assets/img/kitchen-2.jpg",
      categorie: "Cozinhas",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "/assets/img/kitchen-2.jpg",
      categorie: "Cozinhas",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "/assets/img/kitchen-2.jpg",
      categorie: "Cozinhas",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "/assets/img/kitchen-4.jpg",
      categorie: "Quartos de Solteiro",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "/assets/img/kitchen-4.jpg",
      categorie: "Quartos de Solteiro",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "/assets/img/kitchen-4.jpg",
      categorie: "Quartos de Solteiro",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "/assets/img/kitchen-4.jpg",
      categorie: "Quartos de Solteiro",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "/assets/img/kitchen-.jpg",
      categorie: "Quartos de Casal",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "/assets/img/kitchen-.jpg",
      categorie: "Quartos de Casal",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "/assets/img/kitchen-.jpg",
      categorie: "Quartos de Casal",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "/assets/img/kitchen-.jpg",
      categorie: "Quartos de Casal",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "/assets/img/kitchen-1.jpg",
      categorie: "Offices",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "/assets/img/kitchen-1.jpg",
      categorie: "Offices",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "/assets/img/kitchen-1.jpg",
      categorie: "Offices",
    },
    {
      title: "Product 1",
      text: "Text of product 1",
      imgUrl: "/assets/img/kitchen-1.jpg",
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
                            small={product.imgUrl}
                            large={product.imgUrl}
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
