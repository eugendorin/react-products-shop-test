import { Button, Container, Col, Row, Stack } from "react-bootstrap";
import { ImageWrapper } from "components/ImageWrapper";
import QuantityInputGroup from "./QuantityInputGroup";
import VoucherInputGroup from "./VoucherInputGroup";
import { formatPrice } from "utils";

export function CartProductItem({
  image,
  name,
  id,
  quantity,
  price,
  vouchers,
  discountPrice,
  onRemoveProduct,
  onUpdateQuantity,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onApplyVoucher
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
            <div
              style={discountPrice ? { textDecoration: "line-through" } : {}}
            >
              {formatPrice(price)}
            </div>
            {discountPrice && (
              <div className="text-danger">{formatPrice(discountPrice)}</div>
            )}
          </Stack>
        </Col>
        <Col sm={5}>
          <Stack gap={3}>
            <Stack direction="horizontal" gap={3}>
              <QuantityInputGroup
                onUpdateQuantity={onUpdateQuantity}
                onIncreaseQuantity={onIncreaseQuantity}
                onDecreaseQuantity={onDecreaseQuantity}
                quantity={quantity}
              />

              <Button variant="danger" onClick={onRemoveProduct}>
                <i className="fa fa-trash" />
              </Button>
            </Stack>

            {vouchers.length > 0 && (
              <VoucherInputGroup
                onApplyVoucher={onApplyVoucher}
                vouchers={vouchers}
              />
            )}
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}
