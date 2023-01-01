import "./App.module.scss";
import React, { useEffect} from "react";
import Nav from "./components/Nav/Nav";
import DeleteProductModal from "./pages/DeleteProductModalPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import styles from "./App.module.scss";
import AddProductModal from "./pages/AddProductModalPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import FavoritesPage from "./pages/FavoritesPage";
import ErrorPage from "./pages/ErrorPage";
import { getCards } from "./state/products/actionsCreators";
import { useDispatch } from "react-redux";
import { useField } from 'formik';
import FormWithFormik from "./components/FormWithFormik";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCards());
  }, []);

  return (
      <BrowserRouter>
        <div className={ styles.App }>
          <AddProductModal/>
          <DeleteProductModal/>
          <Nav/>
          <Routes>
            <Route path="/home" element={ <HomePage/> } />
            <Route path="/cart" element={ <CartPage/> } />
            <Route path="/favotite" element={ <FavoritesPage/> } />
            <Route path="/*" element={ <ErrorPage/> } />
            {/*<Route  path="/formik" element={ <FormWithFormik /> } />*/}

          </Routes>
        </div>
      </BrowserRouter>
  );
}
export default App;
