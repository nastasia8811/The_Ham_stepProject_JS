import React from "react";
import styles from "./Modal.module.scss"


class Modal extends React.PureComponent{


    render() {

        const { header, text, actions, closeButton} = this.props;

        return <div className={styles.containerModal}>
            <div type="div" className={styles.modal}> { header } { closeButton } { text } { actions } </div>
        </div>

    }
}

export default Modal;