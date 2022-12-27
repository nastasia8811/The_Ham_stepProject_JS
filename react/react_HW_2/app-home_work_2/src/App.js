import {Component} from "react";
import styles from './App.module.scss';
import CardContainer from "./components/CardContainer/CardContainer";
import Modal from './components/Modal/Modal';
import CartContainer from "./components/CartContainer/CartContainer";
import FavoriteItemContainer from "./components/FavoriteItemContainer/FavoriteItemContainer";

class App extends Component {
    state = {
        isOpenModal: {modalOpenText: "", isActive: ""},
        modalProps: {},
        isCardsLoading: true,
        favorites:[],
        carts: [],
        cards:[],

    }
    addToCart = (card) => {
        this.setState((current) => {
            const carts = [...current.carts]

            const index = carts.findIndex(el => el.art === card.art)

            if (index === -1) {
                carts.push({ ...card, count: 1 })
            } else {
                carts[index].count += 1
            }

            localStorage.setItem("carts", JSON.stringify(carts))
            return { carts }
        })
    }

    addToFavorite = (card) => {
        this.setState((current) => {
            const favorites = [...current.favorites]

            const index = favorites.findIndex(el => el.art === card.art)

            if (index === -1) {
                favorites.push({ ...card, count: 1 })
            } else {
                favorites[index].count += 1
            }

            localStorage.setItem("favorites", JSON.stringify(favorites))
            return { favorites }
        })
    }

    incrementCartItem = (art) => {
        this.setState((current) => {
            const carts = [...current.carts]

            const index = carts.findIndex(el => el.art === art)

            if (index !== -1) {
                carts[index].count += 1
            }

            localStorage.setItem("carts", JSON.stringify(carts))
            return { carts }
        })
    }

    incrementFavoriteItem = (art) => {
        this.setState((current) => {
            const favorites = [...current.favorites]

            const index = favorites.findIndex(el => el.art === art)

            if (index !== -1) {
                favorites[index].count += 1
            }

            localStorage.setItem("favorites", JSON.stringify(favorites))
            return { favorites }
        })
    }

    dicrementCartItem = (art) => {
        this.setState((current) => {
            const carts = [...current.carts]

            const index = carts.findIndex(el => el.art === art)

            if (index !== -1 && carts[index].count > 1) {
                carts[index].count -= 1
            }

            localStorage.setItem("carts", JSON.stringify(carts))
            return { carts }
        })
    }

    dicrementFavoriteItem = (art) => {
        this.setState((current) => {
            const favorites = [...current.favorites]

            const index = favorites.findIndex(el => el.art === art)

            if (index !== -1 && favorites[index].count > 1) {
                favorites[index].count -= 1
            }

            localStorage.setItem("favorites", JSON.stringify(favorites))
            return { favorites }
        })
    }

    deleteCartItem = (art) => {
        this.setState((current) => {
            const carts = [...current.carts]

            const index = carts.findIndex(el => el.art === art)

            if (index !== -1) {
                carts.splice(index, 1);
            }

            localStorage.setItem("carts", JSON.stringify(carts))

            return { carts }
        })
    }
    deleteFavoriteItem = (art) => {
        this.setState((current) => {
            const favorites = [...current.favorites]

            const index = favorites.findIndex(el => el.art === art)

            if (index !== -1) {
                favorites.splice(index, 1);
            }

            localStorage.setItem("favorites", JSON.stringify(favorites))

            return { favorites }
        })
    }
    toggleModal = (modalText, art) => {
        this.setState((prev)=>{return {...prev, isOpenModal: {modalOpenText: modalText, isActive: art} }})
    }


    setModalProps = (value) => {
        this.setState({ modalProps: value })
    }


    componentDidMount() {
        fetch(`./productArray.json`).then(res => res.json())
            .then((cards) => {
                this.setState((prev)=>{return {...prev,cards:cards }})
            })
    }

    render() {
        const { carts, isOpenModal, modalProps, favorites, cards, addToFavorite} = this.state;

        return (

            <>
                <div className="App">
                    <main>
                        <section className={styles.leftContainer}>
                            <h1>Каталог</h1>
                            <CardContainer setModalProps={this.setModalProps} toggleModal={this.toggleModal} cards={cards} key={this.art} addToFavorite={this.addToFavorite}/>

                        </section>
                        <section className={styles.rightContainer}>
                            <h2>Корзина</h2>
                            <CartContainer  setModalProps={this.setModalProps} toggleModal={this.toggleModal} incrementCartItem={this.incrementCartItem} dicrementCartItem={this.dicrementCartItem} carts={carts} key={this.art}/>
                            <h2>Фаворити</h2>
                            <FavoriteItemContainer setModalProps={this.setModalProps} toggleModal={this.toggleModal} incrementFavoriteItem={this.incrementFavoriteItem} dicrementFavoriteItem={this.dicrementFavoriteItem} favorites={favorites} key={this.art}/>
                        </section>

                    </main>
                    {this.state.isOpenModal.modalOpenText==="addToCart" && <Modal modalProps={modalProps} onclick={()=>{this.addToCart(this.state.isOpenModal.isActive)}} isOpen={isOpenModal} toggleModal={this.toggleModal} key={this.art}/>}
                    {this.state.isOpenModal.modalOpenText==="deleteCart" && <Modal modalProps={modalProps} onclick={()=>{this.deleteCartItem(this.state.isOpenModal.isActive)}} isOpen={isOpenModal} toggleModal={this.toggleModal} />}
                    {this.state.isOpenModal.modalOpenText==="deleteFavorite" && <Modal modalProps={modalProps} onclick={()=>{this.deleteFavoriteItem(this.state.isOpenModal.isActive)}} isOpen={isOpenModal} toggleModal={this.toggleModal} />}
                </div>
            </>
        );
    }
}



export default App;

//{this.state.isOpenModal.modalOpenText==="addToCard" && <Modal modalProps={modalProps} onclick={()=>{this.addToCart(this.state.isOpenModal.isActive)}} isOpen={isOpenModal} toggleModal={this.toggleModal} />}
