import styles from './Modal.module.scss';
import Button from '../Button/Button';

const Modal =({toggleModal, modalProps, onclick})=> {

        return (
            <div className={styles.root}>
                <div onClick={() => toggleModal("","")} className={styles.background}/>
                <div className={styles.content}>
                    <div className={styles.closeWrapper}>
                        <Button onClick={() => toggleModal("","")} className={styles.btn} color="red">X</Button>
                    </div>
                    <h2>Do you really want to add/delete {modalProps.title}?</h2>
                    <div className={styles.buttonContainer}>
                        <Button onClick={()=>{onclick();toggleModal("","")}}>Yes</Button>
                        <Button onClick={() => toggleModal("","")} color="red">No</Button>
                    </div>
                </div>
            </div>
        );
    }

export default Modal;
