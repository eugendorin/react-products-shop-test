import { Button, InputGroup, Form } from "react-bootstrap";
import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { AlertModal } from "components";

const getMappedVouchersByNames = (vouchers) => vouchers.map(({ name }) => name);

export default function VoucherInputGroup({ vouchers, onApplyVoucher }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError
  } = useForm();

  const [showModal, setShowModal] = useState(false);

  const voucherNames = useMemo(
    () => getMappedVouchersByNames(vouchers),
    [vouchers]
  );

  const watchVoucher = watch("voucher");

  const onSubmitApplyVoucher = ({ voucher }) => {
    if (voucherNames.includes(voucher)) {
      onApplyVoucher(voucher);
      setShowModal(true);
    } else {
      setError("voucher", {
        type: "custom",
        message: "This voucher does not exist"
      });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmitApplyVoucher)}>
        <InputGroup className="d-flex">
          <Form.Control
            type="text"
            {...register("voucher")}
            isInvalid={!!errors.voucher}
          />

          <Form.Control.Feedback type="invalid" tooltip>
            {errors?.voucher?.message}
          </Form.Control.Feedback>

          <Button variant="outline-secondary" type="submit">
            Add Voucher
          </Button>
        </InputGroup>
      </Form>

      <AlertModal
        title="Voucher applied"
        description={`The ${watchVoucher} voucher was applied with success.`}
        show={showModal}
        onClick={() => setShowModal(false)}
      />
    </>
  );
}
