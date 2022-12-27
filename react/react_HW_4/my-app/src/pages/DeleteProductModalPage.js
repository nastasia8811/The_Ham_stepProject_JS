import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDeleteProduct } from "../state/modal/actionsCreators";
import { delFromCart } from "../state/products/actionsCreators";
import Modal from "../components/Modal/Modal";
import Button from "../components/Button/Button";

function DeleteProductModalPage() {
  const dispatch = useDispatch();
  const isDeleteModalOpen = useSelector(
    (store) => store.modals.isDeleteModalOpen
  );
  return (
    <>
      {isDeleteModalOpen && (
        <Modal
          header="Do you want to delete this product?"
          closeButton={false}
          actions={
            <>
              <Button
                text="delete"
                onClick={() => {
                  dispatch(toggleDeleteProduct());
                  dispatch(delFromCart());
                }}
              />
              <Button
                text="cancel"
                onClick={() => {
                  dispatch(toggleDeleteProduct());
                }}
              />
            </>
          }
          onCloseModal={() => {
            dispatch(toggleDeleteProduct());
          }}
        />
      )}
    </>
  );
}
export default DeleteProductModalPage;
