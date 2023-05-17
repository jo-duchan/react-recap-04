import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

function Backdrop(props) {
  return <div className={classes.backdrop}></div>;
}

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

function Modal(props) {
  const portalElement = document.getElementById("overlays");

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
