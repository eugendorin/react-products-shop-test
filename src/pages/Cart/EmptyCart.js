import { Link } from "react-router-dom";
import ROUTES from "routes";

export default function EmptyCart() {
  return (
    <h3>
      <p>Your cart is empty.</p>
      <p>
        Go back to <Link to={ROUTES.root}>shopping</Link>
      </p>
    </h3>
  );
}
