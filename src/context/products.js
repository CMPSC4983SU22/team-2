import { createContext, useContext, useReducer, useEffect } from 'react';
import { productReducer } from '../reducer/products';
import axios from 'axios';

const initalState = {
    products: [],
    loading: true,
    error: null
}
const ProductsContext = createContext(initalState);

const ProductsProvider = ({ children }) => {
    const [productState, productDispatch] = useReducer(productReducer, initalState);

    useEffect(() => {
        (async () => {
            try {
                const { status, data: { products = [] } } = await axios.get("/api/products");
                if (status === 200 && products) {
                    productDispatch({
                        type: 'FETCH_PRODUCTS_SUCCESS',
                        payload: {
                            products,
                            error: null,
                            loading: false
                        }
                    });
                } else {
                    throw new Error('Error occurred while loading products, Please try again');
                }
            } catch (error) {
                productDispatch({
                    type: 'FETCH_PRODUCTS_FAILURE',
                    payload: {
                        products: [],
                        error: error?.message,
                        loading: false
                    }
                });
                console.warn('error:', error)
            }
        })()
    }, [])

    return (
        <ProductsContext.Provider value={{ productState, productDispatch }}>
            {children}
        </ProductsContext.Provider>
    )
}

const useProducts = () => useContext(ProductsContext);

export { useProducts, ProductsProvider }; 