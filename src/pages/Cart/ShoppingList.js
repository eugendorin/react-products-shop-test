import { useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { CartProductItem } from "./CartProductItem";
import {
  removeProduct,
  updateQuantity,
  increaseQuantity,
  decreaseQuantity
} from "store/cart";

export default function ShoppingList({ cart }) {
  const dispatch = useDispatch();

  const onRemoveProduct = (product) => dispatch(removeProduct(product));

  const onUpdateQuantity = (product, newQuantity) => {
    dispatch(updateQuantity({ ...product, newQuantity }));
  };
  const onIncreaseQuantity = (product) =>
    dispatch(increaseQuantity({ ...product }));

  const onDecreaseQuantity = (product) =>
    dispatch(decreaseQuantity({ ...product }));

  return (
    <Card.Body className="p-5">
      <Card.Title as="h2">Shopping cart</Card.Title>

      <ListGroup as="ol" className="mt-1 p-0">
        {cart.map((product) => {
          const { name, id, image, price, discountPrice, quantity } = product;
          return (
            <ListGroup.Item
              key={id}
              as="li"
              className="d-flex justify-content-between align-items-start border-0 p-0"
            >
              <CartProductItem
                name={name}
                id={id}
                image={image}
                price={price}
                discountPrice={discountPrice}
                quantity={quantity}
                // onApplyCoupon={onApplyCoupon}
                onUpdateQuantity={(newQuantity) =>
                  onUpdateQuantity(product, newQuantity)
                }
                onIncreaseQuantity={() => onIncreaseQuantity(product)}
                onDecreaseQuantity={() => onDecreaseQuantity(product)}
                onRemoveProduct={() => onRemoveProduct(product)}
              />
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Card.Body>
  );
}
