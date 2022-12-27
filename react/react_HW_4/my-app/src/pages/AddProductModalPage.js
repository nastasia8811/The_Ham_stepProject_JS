import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleAddProduct } from "../state/modal/actionsCreators";
import { addToCart } from "../state/products/actionsCreators";
import Modal from "../components/Modal/Modal";
import Button from "../components/Button/Button";

function AddProductModalPage() {
  const dispatch = useDispatch();
  const isAddProductModalOpen = useSelector((store) => store.modals.isAddProductModalOpen);
  return (
    <>
      {isAddProductModalOpen && (
        <Modal
          header="Do you really want to add product?"
          closeButton={true}
          actions={
            <>
              <Button
                text="add"
                onClick={() => {
                  dispatch(toggleAddProduct());
                  dispatch(addToCart());
                }}
              />
              <Button
                text="cancel"
                onClick={() => {
                  dispatch(toggleAddProduct());
                }}
              />
            </>
          }
          onCloseModal={() => {
            dispatch(toggleAddProduct());
          }}
        />
      )}
    </>
  );
}
export default AddProductModalPage;
