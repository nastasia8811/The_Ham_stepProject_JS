import {PureComponent} from 'react';
import FavoriteItem from "../FavoriteItem/FavoriteItem";


class FavoriteItemContainer extends PureComponent {

    render(){

        const { favorites, incrementFavoriteItem, dicrementFavoriteItem, toggleModal, newModalProps } = this.props

        return(
            <ul>
                {favorites.map(({title, img, count, art }) => {

                    return <FavoriteItem newModalProps={newModalProps} toggleModal={()=>{toggleModal("deleteFavorite", art)}} title={title} img={img} count={count} art={art} incrementFavoriteItem={incrementFavoriteItem} dicrementFavoriteItem={dicrementFavoriteItem} key={art} />
                })}
            </ul>
        )
    }

}



export default FavoriteItemContainer;
