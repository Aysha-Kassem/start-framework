import Modal from "react-bootstrap/Modal";

const Model = ({ show, onHide, imageSrc }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Body className="text-center">
        <img
          src={imageSrc}
          alt="Portfolio enlarged"
          className="img-fluid rounded"
        />
      </Modal.Body>
    </Modal>
  );
};

export default Model;
