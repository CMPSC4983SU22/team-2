import { useProductFilter } from '../../context';

const LoadProducts = (productsList) => {

    const { state: { sortBy, ratings, price, categories } } = useProductFilter();

    const filterByRating = (productsList, selectedRating) => {
        return [...productsList].filter(({ rating }) => rating >= parseInt(selectedRating));
    }

    const filterByCategories = (productsList, categoryName) => {
        let filteredProducts = [];
        const isCategoriesSelected = Object.values(categoryName).every(categoryIsChecked => !categoryIsChecked);
        if (isCategoriesSelected) return productsList;
        for (const value in categoryName) {
            const isCategoryChecked = categoryName[value];
            // eslint-disable-next-line no-loop-func
            const productsWithCategory = productsList.filter(({ id, type }) => {
                const isProductsAvailable = filteredProducts.find(item => item.id === id)
                return isCategoryChecked && !isProductsAvailable ? type.includes(value) : false
            });
            filteredProducts = [...filteredProducts, ...productsWithCategory];
        }

        return filteredProducts;
    }

    const sortProductsByRange = (productsList, type) => {
        const sortProducts = [...productsList].sort((a, b) => {
            const priceA = parseInt(a.price);
            const priceB = parseInt(b.price);
            return type === 'Low to high' ? priceA - priceB : priceB - priceA
        });
        return sortProducts;
    }

    const filterByPrice = (productsList, priceValue) => {
        return [...productsList].filter(({ price }) => parseInt(price) <= priceValue);
    }

    const productsFilteredByCategory = filterByCategories(productsList, categories);
    const ProductsFilteredByPrice = filterByPrice(productsFilteredByCategory, price);
    const productsFilterRatings = filterByRating(ProductsFilteredByPrice, ratings);
    return sortProductsByRange(productsFilterRatings, sortBy);
}

export { LoadProducts };