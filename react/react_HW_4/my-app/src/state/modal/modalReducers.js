import {TOGGLE_ADD_PRODUCT_MODAL, TOGGLE_DELETE_PRODUCT_MODAL,} from "./actions";

const initialState = {
    isAddProductModalOpen: false,
    isDeleteModalOpen: false,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_ADD_PRODUCT_MODAL:
            return { ...state, isAddProductModalOpen: !state.isAddProductModalOpen };
        case TOGGLE_DELETE_PRODUCT_MODAL:
            return { ...state, isDeleteModalOpen: !state.isDeleteModalOpen };

        default:
            return state;
    }
};
