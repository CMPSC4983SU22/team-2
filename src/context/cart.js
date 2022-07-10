import { createContext, useContext, useEffect, useState } from "react";
import { useWishlist } from "./wishlist";

const CartContext = createContext([]);

function fetchCartItems() {
    const cartItems = localStorage.getItem("retro-cart");
    if (JSON.parse(cartItems)?.length) {
        return JSON.parse(cartItems);
    }
    return [];
}

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(fetchCartItems());

    const { addToWishlist } = useWishlist();

    useEffect(() => {
        localStorage.setItem("retro-cart", JSON.stringify(cartItems));
      }, [cartItems]);

    const moveToWishList = (product) => {
        addToWishlist(product);
        removeFromCart(product.id);
    }

    const quantityAdd = (addProductId, addProductPrice, addProductQuantity) => {
        const filterProduct = cartItems.map(item => {
            if (item.id === addProductId) {
                item.quantity += 1;
            }
            return item;
        });
        setCartItems(filterProduct);
    }

    const quantityRemove = (id, price, quantity) => {
        if (quantity === 1) {
            removeFromCart(id);
        } else {
            const filterProduct = cartItems.map(item => {
                if (item.id === id && item.quantity > 1) {
                    item.quantity -= 1;
                }
                if (item.id === id && item.quantity <= 1) {
                    removeFromCart(id);
                }
                return item;
            });
            setCartItems(filterProduct);
        }
    }

    const addToCart = ({ id, image, productName, price, oldPrice, rating, discount, quantity }) => {
        setCartItems([
            ...cartItems,
            {
                id, image, productName, price, oldPrice, rating, discount, quantity
            }
        ])
    }

    const removeFromCart = (id) => {
        const removeProduct = cartItems.filter(item => item.id !== id);
        setCartItems(removeProduct);
    }

    return (
        <CartContext.Provider value={{ addToCart, cartItems, removeFromCart, quantityAdd, quantityRemove, moveToWishList }}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };