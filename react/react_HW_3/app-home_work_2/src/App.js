import styles from './App.module.scss';
import CardContainer from "./components/CardContainer/CardContainer";
import Modal from './components/Modal/Modal';
import CartContainer from "./components/CartContainer/CartContainer";
import FavoriteItemContainer from "./components/FavoriteItemContainer/FavoriteItemContainer";
import {useEffect, useState} from "react";
import Nav from "./components/Nav/Nav";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
    const [cards, setCards] = useState([])
    const [favorites, setFavorites] = useState([])
    const [carts, setCarts] = useState([])
    const [isOpenModal, setIsOpenModal] = useState({modalOpenText: "", isActive: ""})
    const [modalProps, setModalProps] = useState({})
    //const [key, setKey] = useState({})

    const addToCart = (card) => {
        setCarts((current) => {
            const carts = [...current]
const findElement = cards.find((el)=>{
    return el.art === card
})
            const index = carts.findIndex(el => el.art === card)

            if (index === -1) {
                carts.push({...findElement, count: 1})
            } else {
                carts[index].count += 1
            }

            localStorage.setItem("carts", JSON.stringify(carts))
            return carts
        })
    }

    const addToFavorite = (card) => {
        setFavorites((current) => {
            const favorites = [...current]

            const index = favorites.findIndex(el => el.art === card.art)

            if (index === -1) {
                favorites.push({...card, count: 1})
            } else {
                favorites[index].count += 1
            }

            localStorage.setItem("favorites", JSON.stringify(favorites))
            return favorites
        })
    }

    const incrementCartItem = (art) => {
        setCarts((current) => {
            const carts = [...current]

            const index = carts.findIndex(el => el.art === art)

            if (index !== -1) {
                carts[index].count += 1
            }

            localStorage.setItem("carts", JSON.stringify(carts))
            return carts
        })
    }

    const incrementFavoriteItem = (art) => {
        setFavorites((current) => {
            const favorites = [...current]

            const index = favorites.findIndex(el => el.art === art)

            if (index !== -1) {
                favorites[index].count += 1
            }

            localStorage.setItem("favorites", JSON.stringify(favorites))
            return favorites
        })
    }

    const dicrementCartItem = (art) => {
        setCarts((current) => {
            const carts = [...current]

            const index = carts.findIndex(el => el.art === art)

            if (index !== -1 && carts[index].count > 1) {
                carts[index].count -= 1
            }

            localStorage.setItem("carts", JSON.stringify(carts))
            return carts
        })
    }

    const dicrementFavoriteItem = (art) => {
        setFavorites((current) => {
            const favorites = [...current]

            const index = favorites.findIndex(el => el.art === art)

            if (index !== -1 && favorites[index].count > 1) {
                favorites[index].count -= 1
            }

            localStorage.setItem("favorites", JSON.stringify(favorites))
            return favorites
        })
    }

    const deleteCartItem = (art) => {
        setCarts((current) => {
            const carts = [...current]

            const index = carts.findIndex(el => el.art === art)

            if (index !== -1) {
                carts.splice(index, 1);
            }

            localStorage.setItem("carts", JSON.stringify(carts))

            return carts
        })
    }
    const deleteFavoriteItem = (art) => {
        setFavorites((current) => {
            const favorites = [...current]

            const index = favorites.findIndex(el => el.art === art)

            if (index !== -1) {
                favorites.splice(index, 1);
            }

            localStorage.setItem("favorites", JSON.stringify(favorites))

            return favorites
        })
    }
    const toggleModal = (modalText, art) => {
        setIsOpenModal((prev) => {
            return {modalOpenText: modalText, isActive: art}
        })
    }


    const newModalProps = (value) => {
        setModalProps( value)
    }

    useEffect(() => {
        fetch(`./productArray.json`).then(res => res.json())
            .then((cards) => { setCards(cards)})
    }, [])

    //
    // useEffect(() => {
    //     const getData = async () => {
    //         const { data } = await fetch(`./productArray.json`).then(res => res.json());
    //         const carts = localStorage.getItem('carts')
    //         if (carts) {
    //             setCarts(JSON.parse(carts))
    //         }
    //
    //         setCards(data)
    //     }
    //     getData()
    // }, [])


    return (
        <Router>
            <div className="App">
                <Nav carts={carts} favoritesCard={favorites}/>
            <Routes>
                    <Route path="/home" element={
                        <section className={styles.leftContainer}>
                            <h1>Каталог</h1>
                            <CardContainer newModalProps={newModalProps} toggleModal={toggleModal} cards={cards}
                                           addToFavorite={addToFavorite}/>

                        </section>
                    }/>

                    <Route path="/cart" element={
                        <>
                            <h2>Корзина</h2>
                            <CartContainer newModalProps={newModalProps} toggleModal={toggleModal}
                                           incrementCartItem={incrementCartItem} dicrementCartItem={dicrementCartItem}
                                           carts={carts}/>
                        </>
                    }/>
                    <Route path="/favotite" element={
                        <>
                            <h2>Фаворити</h2>
                            <FavoriteItemContainer newModalProps={newModalProps} toggleModal={toggleModal}
                                                   incrementFavoriteItem={incrementFavoriteItem}
                                                   dicrementFavoriteItem={dicrementFavoriteItem} favorites={favorites}/>

                        </>}/>

            </Routes>
                {isOpenModal.modalOpenText === "addToCart" && <Modal modalProps={modalProps} onclick={() => {
                    addToCart(isOpenModal.isActive)
                }} isOpen={isOpenModal} toggleModal={toggleModal}/>}
                {isOpenModal.modalOpenText === "deleteCart" && <Modal modalProps={modalProps} onclick={() => {
                    deleteCartItem(isOpenModal.isActive)
                }} isOpen={isOpenModal} toggleModal={toggleModal}/>}
                {isOpenModal.modalOpenText === "deleteFavorite" &&
                    <Modal modalProps={modalProps} onclick={() => {
                        deleteFavoriteItem(isOpenModal.isActive)
                    }} isOpen={isOpenModal} toggleModal={toggleModal}/>}
                </div>


        </Router>
    );
}


export default App;
