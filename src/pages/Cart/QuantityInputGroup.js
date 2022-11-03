import { Button, InputGroup, Form } from "react-bootstrap";
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

export default function QuantityInputGroup({
  quantity,
  onUpdateQuantity,
  onIncreaseQuantity,
  onDecreaseQuantity
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
    <InputGroup className="d-flex">
      <Button variant="outline-secondary" onClick={onIncreaseQuantity}>
        +
      </Button>
      <Form.Control
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
  );
}
