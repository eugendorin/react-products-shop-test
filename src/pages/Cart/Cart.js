import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import EmptyCart from "./EmptyCart";
import ShoppingList from "./ShoppingList";
import BillingForm from "./BillingForm";
import { useNavigate } from "react-router-dom";
import ROUTES from "routes";

export function Cart() {
  const { cart } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate(ROUTES.confirmation, {
      state: { billingData: data }
    });
  };

  return (
    <div className="navbar-pt">
      <Container className="py-3">
        <Card className="w-100 rounded-full border-0">
          {cart.length === 0 ? (
            <EmptyCart />
          ) : (
            <>
              <ShoppingList cart={cart} />
              <BillingForm onSubmit={onSubmit} />
            </>
          )}
        </Card>
      </Container>
    </div>
  );
}
