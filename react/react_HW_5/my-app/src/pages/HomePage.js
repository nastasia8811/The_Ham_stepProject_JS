import React from "react";
import { useSelector } from "react-redux";
import CardContainer from "../components/CardContainer/CardContainer";
import { toggleAddProduct } from "../state/modal/actionsCreators";

function HomePage() {
  const cardsItems = useSelector((store) => store.items.items);

  return (
      <CardContainer
        prodArr={cardsItems}
        onItemButtonClick={toggleAddProduct}
        buttonText="add to cart"
      />
  );
}
export default HomePage;

