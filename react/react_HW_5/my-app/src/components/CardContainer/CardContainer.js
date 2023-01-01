import React from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import styles from "./CardContainer.module.scss";
import { useDispatch } from "react-redux";
import {favoritesButton} from "../../state/products/actionsCreators";
import {cardsArt} from "../../state/products/actionsCreators";
//import heart from "../../svg/heart.svg"


function CardContainer(props) {
    const dispatch = useDispatch();
    const buttonClickHandler = (art) => {
        dispatch(cardsArt(art));
        dispatch(props.onItemButtonClick());
    };

    return (
        <>
            <div className={styles.mainContainer}>
                {props.prodArr.map((item, id) => {
                    return (
                        <Card
                            key={id} name={item.name} price={item.price} img={item.img} art={item.art}
                            color={item.color}
                            favoriteBtn={
                                <Button
                                    text={<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24"
                                               viewBox="0 0 24 24">
                                        <path fill="#EB0014"
                                              d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
                                    </svg>} className={styles.isInFavorites} onClick={() => {
                                    dispatch(favoritesButton(item.art));
                                }}/>
                            }
                            actionBtn={
                                <Button text={props.buttonText} className={styles.orderBtn} onClick={() => {

                                    buttonClickHandler(item.art);
                                }}/>}
                        />
                    );
                })}
            </div>
        </>
    );
}

CardContainer.propTypes = {
    favorites: PropTypes.array,
    prodArr: PropTypes.array,
    activeFavorite: PropTypes.func,
    activeBuy: PropTypes.func,
    buttonText: PropTypes.string,
};

export default CardContainer;
