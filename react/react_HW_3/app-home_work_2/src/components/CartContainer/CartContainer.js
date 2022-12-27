import CartItem from '../CartItem/CartItem';

const CartContainer = ({art, carts, incrementCartItem, dicrementCartItem, toggleModal, newModalProps}) => {

    return (
        <div>
            <ul >
                {carts.map(({title, img, count, art}) => {
                   return <li key={art}>
                        <CartItem newModalProps={newModalProps} toggleModal={() => {
                        toggleModal("deleteCart", art)
                    }} title={title} img={img} count={count} art={art} incrementCartItem={incrementCartItem}
                                         dicrementCartItem={dicrementCartItem}/>
                    </li>
                })}
            </ul>
        </div>
    )
}


export default CartContainer;
