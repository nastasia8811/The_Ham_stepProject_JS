import {PureComponent} from 'react';
import CartItem from '../CartItem/CartItem';

class CartContainer extends PureComponent {

    render(){

        const { art, carts, incrementCartItem, dicrementCartItem, toggleModal, setModalProps } = this.props

        return(
            <ul >
                {carts.map(({title, img, count, art}) => {

                    return <CartItem setModalProps={setModalProps} toggleModal={()=>{toggleModal("deleteCart", art)}} title={title} img={img} count={count} art={art} incrementCartItem={incrementCartItem} dicrementCartItem={dicrementCartItem} key={art} />
                })}
            </ul>
        )
    }

}



export default CartContainer;
