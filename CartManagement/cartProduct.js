import React from 'react'

function CartProduct({ product: { id, image, productName, price, oldPrice, discount, quantity }, product, quantityAdd,
    quantityRemove, removeFromCart, moveToWishList, addQuantity }) {
    return (
        <section className="cart_list my-2" key={id}>
            <div className="cart_item border flex_row cart_gap justify_spacebtw">
                <div className="cart_image">
                    <img src={image} alt="Clothes" className="block w-100 m_auto" />
                </div>
                <div className="flex_column align_start cart_item_info cart_gap">
                    <h5 className='product_name'>{productName}</h5>
                    <div className="product_price">
                        <span className="product_discount_price">$&nbsp;{price}</span>&nbsp;
                        <span className="product_original_price">$&nbsp;{oldPrice}</span>
                    </div>
                    <p className="cart_offer font_bold">{discount}% Off</p>
                    {/* added */}
                    {/* Size */}
                    <label>Size:</label>
                        <select>
                            <option value="volvo">S</option>
                            <option value="saab">M</option>
                            <option value="opel">L</option>
                            <option value="audi">XL</option>
                            <option value="opel">2XL</option>
                            <option value="audi">3XL</option>
                        </select>
                        <br/><br/>
                    
                    {/* Gender */}
                    <label>Gender:</label>
                        <select>
                            <option value="volvo">Male</option>
                            <option value="saab">Female</option>
                        </select>
                        <br/><br/>
                    {/* Front-Team Number */}
                    <label>Front-T No:</label><br/>
                        <select>
                            <option value="volvo">1</option>
                            <option value="saab">2</option>
                            <option value="opel">3</option>
                            <option value="audi">4</option>
                        </select>
                        <br/>
                    {/* Front-Number */}
                    <label>Front-No:</label>
                        <select>
                            <option value="volvo">5</option>
                            <option value="saab">7</option>
                            <option value="opel">9</option>
                            <option value="audi">11</option>
                        </select>
                        <br/><br/>
                    {/* Back-Number */}
                    <label>Back-No:</label>
                        <select>
                            <option value="volvo">5</option>
                            <option value="saab">7</option>
                            <option value="opel">9</option>
                            <option value="audi">11</option>
                        </select>
                        <br/><br/><br/><br/><br/><br/>
                    {/* Name */}
                    <form class="form-inline">
                    <label for="staticEmail2" class="sr-only">Email</label>
                    <div class="form-group mb-2">
    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" placeholder='Enter Your name'/>
  </div></form>
                    {/* added */}
                    <div className="flex align_center cart_quantity cart_gap">
                        <span>Quantity :</span>
                        <div className="flex align_center cart_count cart_gap">
                            <i className='fa fa-minus-circle' onClick={() => quantityRemove(id, price, quantity)}></i>
                            <span>{quantity}</span>
                            <i className='fa fa-plus-circle' onClick={() => quantityAdd(id, price, 1)}></i>
                        </div>
                    </div>
                    <div className="cart_btns flex flex_dcolumn w-100">
                        <button className="btn btn_outlined w-100" onClick={() => removeFromCart(id)}>Remove from cart</button>
                        <button className="btn btn_primary w-100" onClick={() => moveToWishList(product)}>
                            Move to wishlist
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartProduct