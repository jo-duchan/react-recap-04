import React, { useContext } from "react";

import CartContext from "store/cart-context";
import Modal from "components/UI/Modal";
import CartItem from "./CartItem";
import calsses from "./Cart.module.css";

function Cart(props) {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {};
  const cartItemAddHandler = (item) => {};

  const cartItems = (
    <ul className={calsses["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={calsses.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={calsses.actions}>
        <button className={calsses["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={calsses.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
