import { Button, Container, Col, InputGroup, Row, Stack } from "react-bootstrap";
import { ImageWrapper } from "./ImageWrapper";

export function CartProductItem({
  image,
  name,
  id,
  price,
  discountPrice
  // onApplyCoupon,
  // onUpdateQuantity,
  // onRemoveProduct,
}) {
  return (
    <Container fluid="md" className="p-2">
      <Row>
        <Col sm={2}>
          <ImageWrapper>
            <img className="img-fluid" alt={name} src={image} />
          </ImageWrapper>
        </Col>
        <Col sm={3}>
          <Stack gap={2}>
            <h4>{name}</h4>
            <div>Prodcut code:</div>
            <div>{id}</div>
          </Stack>
        </Col>
        <Col sm={2}>
          <Stack gap={2}>
            <div>Price</div>
            <div>{price}</div>
            <div>{discountPrice}</div>
          </Stack>
        </Col>
        <Col sm={5}>
          <Stack gap={2}>
            <Stack direction="horizontal" gap={2}>
              <InputGroup class="mb-3 d-flex">
                <Button variant="outline-secondary">+</Button>
                <input type="text" className="form-control" />
                <Button variant="outline-secondary">-</Button>
              </InputGroup>

              <Button variant="danger">
                <i className="fa fa-trash" />
              </Button>
            </Stack>

            <InputGroup className="d-flex">
              <input type="text" className="form-control" />
              <Button variant="outline-secondary">Add Voucher</Button>
            </InputGroup>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}
