import { Link } from "react-router-dom";
import ROUTES from "routes";

export default function EmptyCart() {
  return (
    <div>
      <h3>Your cart is empty.</h3>
      <p>
        Go back to <Link to={ROUTES.root}>shopping</Link>
      </p>
    </div>
  );
}
