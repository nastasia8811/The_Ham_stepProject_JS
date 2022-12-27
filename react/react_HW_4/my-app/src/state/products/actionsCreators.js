import {ADD_TO_CART, CARDS_ART, DEL_FROM_CART, FAVORITES_BUTTON, GET_CARDS, GET_CARDS_ERR, GET_CARDS_SUCCESS} from "./actions";

export const getCardsBegin = () => {
    return (dispatch) => dispatch({ type: GET_CARDS });
};
export const getCardsSuccess = (data) => {
    return (dispatch) => dispatch({ type: GET_CARDS_SUCCESS, payload: data });
};
export const getCardsFailure = (error) => {
    return (dispatch) => dispatch({ type: GET_CARDS_ERR, payload: error });
};

export const getCards = () => {
    return (dispatch) => {
        dispatch(getCardsBegin());
        fetch("./productArray.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("SERVER ERROR");
                } else {
                    return response;
                }
            })
            .then((resp) => resp.json())
            .then((data) => dispatch(getCardsSuccess(data)))
            .catch((err) => dispatch(getCardsFailure(err)));
    };
};
export const cardsArt = (id) => {
    return (dispatch) => dispatch({ type: CARDS_ART, payload: id });
};
export const addToCart = () => {
    return (dispatch, getState) => {
        const currentCardArt = getState().items.currentCardArt;
        dispatch({ type: ADD_TO_CART, payload: currentCardArt });
    };
};
export const delFromCart = () => {
    return (dispatch, getState) => {
        const currentCardArt = getState().items.currentCardArt;
        dispatch({ type: DEL_FROM_CART, payload: currentCardArt });
    };
};
export const favoritesButton = (id) => {
    return (dispatch) => {
        dispatch({
            type: FAVORITES_BUTTON,
            payload: id,
        });
    };
};
