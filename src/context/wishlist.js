import { createContext, useContext, useEffect, useState } from 'react';

const WishListContext = createContext([]);

function fetchWishListItems() {
    const wishlistitems = localStorage.getItem("retro-wishlist");
    if (JSON.parse(wishlistitems)?.length) {
        return JSON.parse(wishlistitems);
    }
    return [];
}

const WishListProvider = ({ children }) => {
    const [addedToWishList, setAddedToWishList] = useState(fetchWishListItems());

    useEffect(() => {
        localStorage.setItem("retro-wishlist", JSON.stringify(addedToWishList));
      }, [addedToWishList]);

    const addToWishlist = (product, type) => {
        const { image, productName, discount, price, oldPrice, rating, id } = product;
        if (type === 'remove') {
            const removeFromWishList = addedToWishList.filter(item => item.id !== id);
            setAddedToWishList(removeFromWishList);
        } else {
            const wishListItemsAdd = [
                ...addedToWishList,
                {
                    id, image, productName, price, oldPrice, rating, discount
                }
            ]
            setAddedToWishList(wishListItemsAdd);
        }
    }

    return (
        <WishListContext.Provider value={{ addedToWishList, addToWishlist }}>
            {children}
        </WishListContext.Provider>
    )
}

const useWishlist = () => useContext(WishListContext);

export { useWishlist, WishListProvider }