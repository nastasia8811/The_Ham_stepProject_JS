import React from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.scss";

function Modal(props) {
  const ModalOff = (target) => {
    if (target.className === "modalContainer") {
      props.closeModal();
    }
  };
  return (
    <div
      onClick={(e) => {ModalOff(e.target);}} className={styles.modalContainer}>
      <div className={styles.modal}>
        <h2>{props.header}</h2>
        <p>{props.text}</p>
        {props.closeButton ? (<div onClick={props.closeModal} >
          </div>) : null}
        {props.actions && props.actions}
      </div>
    </div>
  );
}

Modal.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
  actions: PropTypes.element,
  closeModal: PropTypes.func,
};

export default Modal;
