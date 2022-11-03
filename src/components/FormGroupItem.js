import Form from "react-bootstrap/Form";

export const FormGroupItem = (props) => {
  const { label, errorMessage, children } = props;
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      {children}
      <Form.Control.Feedback type="invalid">
        {errorMessage}
      </Form.Control.Feedback>
    </Form.Group>
  );
};
