import React from "react";
import { Modal, Button } from "react-bootstrap";

const ProductImageModal = ({ modal, product }) => {
    console.log(product)
  return (
    <Modal show={modal.show} onHide={modal.handleClose}>
      <Modal.Body>
        <img
          className="d-block img-fluid"
          src={product.imgUrl}
          alt={product.title}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={modal.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={modal.handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductImageModal;
