import PropTypes from "prop-types";
import styles from "./Card.module.scss";

function Card(props) {
  return (
    <div className={styles.card}>
        <h3  >{props.name}</h3>

      <img src={props.img} alt="item photo" className={styles.photo} />
      <p>{props.color}</p>
      <p>{props.art}</p>
      <p className={styles.price}>{props.price} grn</p>
        {props.actionBtn}
      {props.favoriteBtn}
    </div>
  );
}

Card.propTypes = {
  art: PropTypes.number,
  name: PropTypes.string,
  color: PropTypes.string,
  img: PropTypes.string,
  actionBtn: PropTypes.element,
  favoriteBtn: PropTypes.element,
  price: PropTypes.number,
};

export default Card;
