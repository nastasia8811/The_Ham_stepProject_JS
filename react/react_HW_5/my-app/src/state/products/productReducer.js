import {GET_CARDS, GET_CARDS_ERR, GET_CARDS_SUCCESS, CARDS_ART,
    ADD_TO_CART, DEL_FROM_CART, FAVORITES_BUTTON} from "./actions";


const initialState = {
    items: [],
    isLoading: false,
    isError: false,
    error: null,
    currentCardArt: null,
    cart: localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [],
    favorites: localStorage.getItem("favorites")
        ? JSON.parse(localStorage.getItem("favorites"))
        : [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CARDS:
            return { ...state, isLoading: true };
        case GET_CARDS_ERR:
            return { ...state, isLoading: false, items: action.payload };
        case GET_CARDS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                items: action.payload,
            };
        case CARDS_ART:
            return {
                ...state,
                currentCardArt: action.payload,
            };

        case ADD_TO_CART:
            if (!state.cart.includes(action.payload)) {
                localStorage.setItem(
                    "cart",
                    JSON.stringify([...state.cart, action.payload])
                );
                return {
                    ...state,
                    cart: [...state.cart, action.payload],
                };
            } else {
                return state;
            }

        case DEL_FROM_CART:
            localStorage.setItem(
                "cart",
                JSON.stringify(state.cart.filter((el) => el !== action.payload))
            );
            return {
                ...state,
                cart: state.cart.filter((el) => el !== action.payload),
            };
        case FAVORITES_BUTTON:
            if (!state.favorites.includes(action.payload)) {
                localStorage.setItem(
                    "favorites",
                    JSON.stringify([...state.favorites, action.payload])
                );
                return {
                    ...state,
                    favorites: [...state.favorites, action.payload],
                };
            } else {
                localStorage.setItem(
                    "favorites",
                    JSON.stringify(state.favorites.filter((id) => id !== action.payload))
                );
                return {
                    ...state,
                    favorites: state.favorites.filter((id) => id !== action.payload),
                };
            }
        default:
            return state;
    }
};