import React, { PureComponent } from 'react';

import styles from './CardContainer.module.scss';
import CardItem from "../CardItem/CardItem";

class CardContainer extends PureComponent {
    render() {
        const { art, cards, addToFavorite, toggleModal, setModalProps} = this.props;
        return (
            <ul className={styles.list} key={art} >
                {cards.map(({title, img, art,price, isFavorite, color}) => {
                    return <CardItem addToFavorite={addToFavorite} setModalProps={setModalProps} toggleModal={()=>{toggleModal("addToCart", art)}} title={title} img={img} art={art} key={art} price={price} isFavorite={isFavorite} color={color}/>
                })}
            </ul>
        );
    }
}

export default CardContainer;
