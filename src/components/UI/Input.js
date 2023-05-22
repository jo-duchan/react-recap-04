import React, { forwardRef } from "react";

import classes from "./Input.module.css";

function Input(props, ref) {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} id={props.input.id} {...props.input} />
    </div>
  );
}

export default forwardRef(Input);
