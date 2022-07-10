import React from 'react'
import { Link } from 'react-router-dom'

function Categories({ categories }) {
    return (
        categories.map(({ id, categoryName, image }) => {
            return (
                <div key={id}>
                    <div className="product_box relative_pos transition_3_ease">
                        <div className="option_container absolute_pos top_0 left_0 w-100 h-100 flex_row">
                            <div className="options flex_column">
                                <Link to={`product/${categoryName}`}
                                    className="cta_product py-1 px-2 transition_3_ease rounded_sm text_center">
                                    View Products
                                </Link>
                            </div>
                        </div>
                        <div className="img_box flex_column">
                            <img src={image} alt="Men's shirt" className="transition_3_ease" />
                        </div>
                        <div className="detail_box text_center">
                            <h5 className="font_bold">
                                {categoryName}
                            </h5>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default Categories