import React from "react";

import CartIcon from "components/Cart/CartIcon";
import classes from "components/Layout/HeaderCartButton.module.css";

function HeaderCartButton(props) {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
}

export default HeaderCartButton;
