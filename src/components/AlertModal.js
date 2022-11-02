import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function AlertModal({ show, title, description, onClick = () => {} }) {
  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{description}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClick}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
