import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import EmptyCart from "./EmptyCart";
import ShoppingList from "./ShoppingList";
import BillingForm from "./BillingForm";

export function Cart() {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className="navbar-pt">
      <Container className="py-3">
        <Card
          className="w-100 rounded-full border-0"
          // style={{ margin: "auto", background: "#f3f3f3" }}
        >
          {cart.length === 0 ? (
            <EmptyCart />
          ) : (
            <>
              <ShoppingList cart={cart} />
              <BillingForm />
            </>
          )}
        </Card>
      </Container>
    </div>
  );
}
