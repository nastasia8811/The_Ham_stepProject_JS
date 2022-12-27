import {TOGGLE_ADD_PRODUCT_MODAL, TOGGLE_DELETE_PRODUCT_MODAL} from "./actions";

export const toggleAddProduct = () => {
    return (dispatch) => {
        dispatch({ type: TOGGLE_ADD_PRODUCT_MODAL });
    };
};

export const toggleDeleteProduct = () => {
    return (dispatch) => dispatch({ type: TOGGLE_DELETE_PRODUCT_MODAL });
};
