import React from "react";
import { useSelector } from "react-redux";
import CardContainer from "../components/CardContainer/CardContainer";
import { toggleAddProduct } from "../state/modal/actionsCreators";

function FavoritesPage() {
  const cardsItems = useSelector((store) => store.items.items);
  const favoritesId = useSelector((store) => store.items.favorites);

  return (
      <CardContainer
        prodArr={cardsItems.filter((el) => {
          return favoritesId.includes(el.art);
        })}
        onItemButtonClick={toggleAddProduct}
        buttonText="add to cart"
      />
  );
}
export default FavoritesPage;
