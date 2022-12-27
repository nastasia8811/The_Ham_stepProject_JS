import FavoriteItem from "../FavoriteItem/FavoriteItem";

const FavoriteItemContainer =({favorites, incrementFavoriteItem, dicrementFavoriteItem, toggleModal, newModalProps})=>{
        return(
            <ul>
                {favorites.map(({title, img, count, art }) => {
                    return<li key={art}>
                     <FavoriteItem newModalProps={newModalProps} toggleModal={()=>{toggleModal("deleteFavorite", art)}} title={title} img={img} count={count} art={art} incrementFavoriteItem={incrementFavoriteItem} dicrementFavoriteItem={dicrementFavoriteItem}  />
                    </li>
                })
                }

            </ul>
        )
}


export default FavoriteItemContainer;
