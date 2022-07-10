import { createContext, useContext, useReducer } from 'react';
import { initialFilterState, productFilterReducer } from '../reducer/productsFilter';

const ProductFilterContext = createContext(initialFilterState);

const ProductFilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productFilterReducer, initialFilterState);
    return (
        <ProductFilterContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductFilterContext.Provider>
    )
}

const useProductFilter = () => useContext(ProductFilterContext);

export { useProductFilter, ProductFilterProvider };