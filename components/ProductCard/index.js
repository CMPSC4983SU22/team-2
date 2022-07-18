import React from 'react';
import { useCart, useWishlist } from '../../context';

export function ProductCard({ product }) {
    const { image, alt, productName, discount, price, oldPrice, rating, id } = product;

    const { addToWishlist, addedToWishList } = useWishlist();

    const { cartItems, addToCart, removeFromCart } = useCart();

    return (
        <div className="ecommerce_card flex_column product_item">
            <div className="product_image w-100 my-1">
                <img src={image} className="w-100 block m_auto" alt={alt} />
                {addedToWishList.find(item => item.id === id) ?
                    <i
                        className='fa fa-heart product_wishlist pointer'
                        style={{ color: 'red' }}
                        onClick={() => addToWishlist(product, 'remove')}
                    ></i>
                    :
                    <i
                        className='fa fa-heart-o product_wishlist pointer'
                        onClick={() => addToWishlist(product)}
                    ></i>
                }
            </div>
            <div className="product_details flex flex_dcolumn w-100">
                <h5 className="flex justify_spacebtw">
                    <span className="product_review">
                        <i className="fa fa-star"></i>&nbsp;
                        <span>{rating}</span>
                    </span>
                    <span className="product_offer font_bold">{discount}%</span>
                </h5>
                <div className="product_info">
                    <h4 className="product_title">{productName}</h4>
                </div>
                <div className="product_price">
                    <span className="product_discount_price primary_text_color font_bold">$. {price}</span>
                    &ensp;
                    <span className="product_original_price">$. {oldPrice}</span>
                </div>
                {cartItems.find(item => item.id === id) ?

                    <button className="product_remove_cart btn btn_primary p-2" onClick={() => removeFromCart(id)}>
                        Remove from cart
                    </button>
                    :
                    <button className="product_add_cart btn btn_primary p-2" onClick={() => addToCart(product)}>
                        Add to cart
                    </button>
                }
            </div>
        </div>
    )
}