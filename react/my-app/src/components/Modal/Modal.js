import React from "react";
import styles from "./Modal.module.scss"


class Modal extends React.PureComponent{
    render() {
        const { header, closeButton, text, actions } = this.props;
        return < div type="div" className={styles.modal}> { header } { closeButton } { text } { actions } </div>
    }
}

export default Modal;