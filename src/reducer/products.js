import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from './type';

const productReducer = (state, { type, payload: { products, error, loading } }) => {
    switch (type) {
        case FETCH_PRODUCTS_SUCCESS:
            return { ...state, products, error, loading };
        case FETCH_PRODUCTS_FAILURE:
            return { ...state, error, loading };
        default:
            return { ...state };
    }
}

export { productReducer };