import React from 'react'

function Featured_Products({ season, image }) {
    return (
        <div className="flex align_start new_arrivals_box">
            <div className="w-100">
                <img src={image} alt="New Arrivals Winter Collection" className="transition_3_ease" />
            </div>
            <div className="w-100 flex flex_dcolumn new_arrivals_content">
                <h3 className="font_bold">Featured Products</h3>
                <div className="season_collection">
                    <h4 className="font_bold my-1">{season}</h4>
                    <p>
                        Check out our best Winter collection to stay smart in style.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Featured_Products