import React from 'react';

import styles from './CardContainer.module.scss';
import CardItem from "../CardItem/CardItem";

const CardContainer=({art, cards, addToFavorite, toggleModal, newModalProps}) =>  {
        return (
            <>
            <ul className={styles.list}>
                {cards.map(({title, img, art,price, isFavorite, color}) => {

                  return   <li key={art}>
                        <CardItem addToFavorite={addToFavorite} newModalProps={newModalProps} toggleModal={()=>{toggleModal("addToCart", art)}} title={title} img={img} art={art}  price={price} isFavorite={isFavorite} color={color}/>
                    </li> })}
            </ul>
            </>
        );

}


// <div>
//     {Array.isArray(obj)
//         ? obj.map(element => {
//             return <h2>{element}</h2>;
//         })
//         : null}
// </div>



export default CardContainer;
