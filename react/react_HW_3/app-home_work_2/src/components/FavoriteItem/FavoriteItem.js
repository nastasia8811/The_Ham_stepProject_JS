
import styles from "../FavoriteItemContainer/FavoriteItem.module.scss";
import Button from '../Button/Button'

const FavoriteItem =({title, img, count, art, incrementFavoriteItem, dicrementFavoriteItem, toggleModal, newModalProps})=> {

        return (
            <div className={styles.cartItem} key={art}>
                <div className={styles.contentContainer}>
                    <div className={styles.imgWrapper}>
                        <img className={styles.itemAvatar} src={img}
                             alt={title}/>
                    </div>
                </div>

                <span className={styles.quantity}>{count}</span>

                <div className={styles.btnContainer}>
                    <Button onClick={() => incrementFavoriteItem(art)} className={styles.btn}>+</Button>
                    <Button onClick={() => dicrementFavoriteItem(art)} className={styles.btn}>-</Button>
                    <Button onClick={() => {
                        newModalProps({ art, title });
                        toggleModal(true);
                    }} color="red" className={styles.btn}>DEL</Button>
                </div>

            </div>
        )
}



export default FavoriteItem;