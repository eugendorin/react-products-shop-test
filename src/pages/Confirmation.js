import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "react-bootstrap";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { confirmPurchase } from "store/cart";
import ROUTES from "routes";
import { Container, Card } from "react-bootstrap";
import { formatPrice } from "utils";

export default function Confirmation() {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { billingData } = state ?? {};

  const totalAmount = formatPrice(
    cart.reduce((acc, curr) => {
      const { quantity, price, discountedPrice } = curr;
      const productTotal = (discountedPrice ?? price) * quantity;
      return acc + productTotal;
    }, 0)
  );

  const onConfirmPurchase = () => {
    console.log({ billingData });
    dispatch(confirmPurchase());
    navigate(ROUTES.root);
  };

  if (!billingData) return <Navigate to={ROUTES.root} replace />;

  return (
    <div className="navbar-pt">
      <Container className="py-3">
        <Card className="w-100 rounded-full border-0">
          <h3>Confirm your Purchase, {billingData?.name}</h3>

          <Table className="my-5">
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(
                ({ id, name, quantity, price, discountedPrice }, idx) => {
                  return (
                    <tr key={id}>
                      <td>{idx + 1}</td>
                      <td>{name}</td>
                      <td>{quantity}</td>
                      <td>{formatPrice(discountedPrice ?? price)}</td>
                    </tr>
                  );
                }
              )}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3}>Total Amount</td>
                <td>{totalAmount}</td>
              </tr>
            </tfoot>
          </Table>
          <Button onClick={onConfirmPurchase}>Confirm Purchase</Button>
        </Card>
      </Container>
    </div>
  );
}
