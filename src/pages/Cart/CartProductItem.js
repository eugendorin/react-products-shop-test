import {
  Button,
  Container,
  Col,
  InputGroup,
  Row,
  Stack,
  Form
} from "react-bootstrap";
import { ImageWrapper } from "../../components/ImageWrapper";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";

const schema = yup
  .object({
    quantity: yup
      .number()
      .positive("Must be more than 0")
      .integer("Must be more than 0")
      .typeError("You must specify a number")
      .required("This field is required")
  })
  .required();

export function CartProductItem({
  image,
  name,
  id,
  quantity,
  price,
  discountPrice,
  onRemoveProduct,
  onUpdateQuantity,
  onIncreaseQuantity,
  onDecreaseQuantity
  // onApplyCoupon,
}) {
  const {
    register,
    clearErrors,
    setValue,
    formState: { errors }
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    setValue("quantity", quantity);
    if (!isNaN(quantity)) clearErrors("quantity");
  }, [quantity, setValue]);

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
          <Stack gap={3}>
            <Stack direction="horizontal" gap={3}>
              <InputGroup className="d-flex">
                <Button
                  variant="outline-secondary"
                  onClick={onIncreaseQuantity}
                >
                  +
                </Button>
                <Form.Control
                  className="form-control"
                  placeholder="quantity"
                  {...register("quantity", {
                    value: quantity,
                    valueAsNumber: true,
                    onChange: (ev) => {
                      const newValue = parseInt(ev.target.value, 10);
                      if (!isNaN(newValue)) {
                        onUpdateQuantity(newValue);
                      }
                    }
                  })}
                  isInvalid={!!errors.quantity}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors?.quantity?.message}
                </Form.Control.Feedback>
                <Button
                  variant="outline-secondary"
                  onClick={onDecreaseQuantity}
                  disabled={quantity === 1}
                >
                  -
                </Button>
              </InputGroup>

              <Button variant="danger" onClick={onRemoveProduct}>
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
