
import styles from './CardItem.module.scss';
import Button from '../Button/Button';
import heartSvg from '../../svg/heart.svg';
import outlineHeartSvg from '../../svg/heart-outline.svg';
import PropTypes from "prop-types";

const CardItem =({title, img, art, price, isFavorite, color, addToFavorite, toggleModal, newModalProps}) => {
    return (<div className={styles.card} key={art}>
            <button type="button" className={styles.likeButton} onClick={() => {
                addToFavorite({title, img, art})
            }}>
                <img src={isFavorite ? heartSvg : outlineHeartSvg} key={art} alt="Favourite"/>
            </button>
            <span className={styles.title}>{title}</span>
            <img className={styles.itemAvatar} src={img}
                 alt={title}/>
            <span className={styles.color}>{color}</span>
            <span className={styles.art}>{art}</span>
            <span className={styles.price}>{price}</span>
            <div className={styles.btnContainer}>
                <Button onClick={() => {
                    newModalProps({ art, title });
                    toggleModal(true);
                }} >В корзину</Button>
            </div>
        </div>)

}
CardItem.propTypes = {
    title:PropTypes.string.isRequired,
    img:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
    isFavorite:PropTypes.bool.isRequired,
    color:PropTypes.string.isRequired
}


export default CardItem;
