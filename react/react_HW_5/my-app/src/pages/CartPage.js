import React from "react";
import { useSelector } from "react-redux";
import CardContainer from "../components/CardContainer/CardContainer";
import {toggleDeleteProduct} from "../state/modal/actionsCreators";
import FormWithFormik from "../components/FormWithFormik";

function CartPage() {
  const cardsItems = useSelector((store) => store.items.items);
  const cartItemsArt = useSelector((store) => store.items.cart);

  return (
      <>
      <CardContainer
        prodArr={cardsItems.filter((el) => {
          return cartItemsArt.includes(el.art);
        })}
        onItemButtonClick={toggleDeleteProduct}
        buttonText="delete from cart"
      />
          <FormWithFormik />
          </>
  );
}
export default CartPage;
