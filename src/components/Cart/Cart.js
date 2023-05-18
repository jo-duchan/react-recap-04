import React from "react";

import Modal from "components/UI/Modal";
import calsses from "./Cart.module.css";

function Cart(props) {
  const cartItems = (
    <ul className={calsses["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={calsses.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={calsses.actions}>
        <button className={calsses["button--alt"]} onClick={props.onClose}>Close</button>
        <button className={calsses.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
