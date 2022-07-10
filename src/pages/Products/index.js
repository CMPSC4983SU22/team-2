import React from 'react'
import './index.css';
import { Oval } from 'react-loader-spinner';
import { ProductFilter, ProductCard } from '../../components';
import { useProducts } from '../../context';
import { LoadProducts } from './loadProducts';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';



function Products() {
    const { productState: { products, loading, error } } = useProducts();
    const productsList = LoadProducts(products);

    useDocumentTitle('Retor Cart | Products');

    const renderProducts = () => {
        if (error) {
            return <p>{error}</p>
        }
        if (loading) {
            return (
                <Oval
                    ariaLabel="loading-indicator"
                    height={100}
                    width={100}
                    strokeWidth={5}
                    strokeWidthSecondary={1}
                    color="blue"
                    secondaryColor="white"
                />
            )
        }
        return (
            <>
                <h5 className="font_bold my-1 px-4 py-1 show_product_title">showing {productsList.length} Products</h5>
                <section className="p-4 flex_row justify_start product_item_group">
                    {productsList.map(product => {
                        return (
                            <ProductCard product={product} key={product.id} />
                        )
                    })}
                </section>
            </>
        )
    }

    return (
        <section id="product_main" className="flex h_100 w_screen_100 product_main">
            <ProductFilter />
            <section className="products_list">
                {renderProducts()}
            </section>
        </section>
    )
}

export default Products