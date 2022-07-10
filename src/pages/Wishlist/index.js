import React from 'react';
import { useCart, useWishlist } from '../../context';
import './index.css';

function WishList() {
    const { addedToWishList, addToWishlist } = useWishlist();
    const { addToCart } = useCart();
    return (
        <section className="wishlist_main p-4 flex_row justify_even">
            {addedToWishList.length > 0 ?
                addedToWishList.map(product => {
                    const { image, productName, price, oldPrice, id, rating, discount, quantity = 1 } = product;
                    return (
                        <div className="ecommerce_card wishlist_card flex_column" key={id}>
                            <div className="product_image w-100">
                                <img src={image} className="w-100 block m_auto" alt={`wishlist product-${id}`} />
                                <i className="fa fa-heart product_wishlist pointer" onClick={() => addToWishlist(product, 'remove')}></i>
                            </div>
                            <div className="product_details flex flex_dcolumn w-100">
                                <div className="product_info">
                                    <h5 className="product_title">{productName}</h5>
                                </div>
                                <div className="product_footer flex justify_spacebtw align_center">
                                    <div className="product_price px-2">
                                        <span className="product_discount_price primary_text_color font_bold">Rs. {price}</span>
                                        &nbsp;
                                        <span className="product_original_price">{oldPrice}</span>
                                    </div>
                                </div>
                                <button className="product_add_cart py-2 m-2 move_cart_btn"
                                    onClick={() => {
                                        addToCart({ id, image, productName, price, oldPrice, rating, discount, quantity });
                                        addToWishlist(product, 'remove');
                                    }}
                                >
                                    Move to cart
                                </button>
                            </div>
                        </div>
                    )
                }) : (
                    <>
                        <h4>No wish list items found.</h4>
                    </>
                )
            }
        </section>
    )
}

export default WishList