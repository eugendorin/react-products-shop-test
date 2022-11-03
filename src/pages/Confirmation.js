import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { confirmPurchase } from "store/cart";
import ROUTES from "routes";
import { Container, Card } from "react-bootstrap";
import { useEffect } from "react";
import { formatPrice } from "utils";

export function Confirmation() {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { billingData } = state ?? {};

  useEffect(() => {
    if (!billingData) navigate(ROUTES.root);
  }, [billingData]);

  const totalAmount = cart.reduce((acc, curr) => {
    const { quantity, price, discountedPrice } = curr;
    const productTotal = (discountedPrice ?? price) * quantity;
    return acc + productTotal;
  }, 0);

  const onConfirmPurchase = () => {
    console.log({ billingData });
    dispatch(confirmPurchase());
    navigate(ROUTES.root);
  };

  return (
    <div className="navbar-pt">
      <Container className="py-3">
        <Card className="w-100 rounded-full border-0">
          <h3>Confirm your Purchase, {billingData.name}</h3>
          <p>You have purchased a total of {cart.length} products</p>
          <p>The total amount to pay is {formatPrice(totalAmount)}</p>
          <Button onClick={onConfirmPurchase}>Confirm Purchase</Button>
        </Card>
      </Container>
    </div>
  );
}
