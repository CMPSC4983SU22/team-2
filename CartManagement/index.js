import React from 'react'
import { useCart } from '../../context';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import CartProduct from './cartProduct';
import './index.css';

function CartManagement() {

    const { cartItems, quantityAdd, quantityRemove, addQuantity, removeFromCart, moveToWishList } = useCart();

    useDocumentTitle('Retro Cart | Cart Management')

    const addTotalAmount = () => {
        const amount = cartItems.reduce((a, b) => {
            return a + parseInt(b.quantity * b.price)
        }, 0);
        return Number.isNaN(amount) ? 0 : amount;
    }

    if (cartItems?.length > 0) {
        return (
            <>
                <h3 className="text_center my-1 py-1">My cart ({cartItems?.length}) </h3>
                <section id="cart_main" className="grid cart_main">
                    <section id="cart_management" className="cart_management">
                        {cartItems?.map(item => {
                            return (
                                <CartProduct
                                    key={item.id}
                                    product={item}
                                    quantityAdd={quantityAdd}
                                    quantityRemove={quantityRemove}
                                    addQuantity={addQuantity}
                                    removeFromCart={removeFromCart}
                                    moveToWishList={moveToWishList}
                                />
                            )
                        })}
                    </section>
                    <section id="cart_price_details" className="cart_price_details flex_column align_start justify_start border cart_gap m-2 p-3">
                        <div className="price_splitup flex flex_dcolumn w-100 cart_gap">
                            <ul className="flex flex_dcolumn cart_gap">
                                <li className="flex justify_spacebtw">
                                    <span>Price ({cartItems.length} items)</span>
                                    <div>
                                        {cartItems?.map(({ quantity, price, id }) => {
                                            return (
                                                <div key={id}>
                                                    <span className='product_price_detail'>{quantity} * {parseInt(price)} = $&nbsp;{quantity * price}</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </li>
                                <li className="flex justify_spacebtw">
                                    <span>Deliver charges</span>
                                    <span>$&nbsp;free</span>
                                </li>
                            </ul>
                            <h5 className="font_bold flex justify_spacebtw total_amt">
                                Total Amount <span>$ {addTotalAmount() + 0} </span>
                            </h5>
                            <button className="btn btn_primary font_bold text_uppercase w-100">Checkout</button>
                        </div>
                    </section>
                </section>
            </>
        )
    }
    return <h4 className='text_center m-2'>No cart items added.</h4>
}

export default CartManagement