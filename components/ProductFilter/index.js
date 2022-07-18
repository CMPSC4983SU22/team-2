import React from 'react';
import { v4 as uuid } from 'uuid';
import { useProductFilter } from '../../context';

export function ProductFilter() {
    const { state: { price, categories, ratings, sortBy }, dispatch } = useProductFilter();

    const ratingsList = ['1', '2', '3', '4'];
    const sortPrice = ['Low to high', 'High to low'];
    const categoriesList = [
        { id: uuid(), categoryName: "BASEBALL" },
        { id: uuid(), categoryName: "FOOTBALL" },
        { id: uuid(), categoryName: "BASKETBALL" }
    ];

    return (
        <section className="filter_products">
            <div className="p-2 flex align_center justify_spacebtw">
                <h5 className="font_bold filter_title">Filter</h5>
                <button onClick={() => dispatch({filterType: 'CLEAR_FILTERS'})}>Clear</button>
            </div>
            <div className="p-2">
                <h5 className="font_bold filter_title py-1">Price - {price}</h5>
                <input type="range" min="100" max="1000" step="50" className='w_100' onChange={(event) => dispatch({
                    type: 'FILTER_BY_PRICE',
                    payload: parseInt(event.target.value)
                })} value={price} />
                <div className="slider-price-range flex_row justify_spacebtw align_center">
                    <span className="text-sm min-price">
                        $ 100
                    </span>
                    <span className="text-sm min-price">
                        $ 1,000
                    </span>
                </div>
            </div>
            <div className="p-2">
                <h5 className="font_bold filter_title py-1">Categories</h5>
                <ul>
                    {categoriesList?.map(({ id, categoryName }) => {
                        return (
                            <li className="p-1" key={id}>
                                <input type="checkbox" id={`category-${categoryName}`}
                                    name="categories"
                                    onChange={(e) => dispatch({
                                        type: 'FILTER_BY_CATEGORIES',
                                        payload: e.target.value
                                    })}
                                    value={categoryName}
                                    checked={categories[categoryName]}
                                />&ensp;
                                <span>{categoryName}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="p-2">
                <h5 className="font_bold filter_title py-1">Rating</h5>
                <ul>
                    {ratingsList?.map(item => {
                        return (
                            <li className="p-1" key={item}>
                                <input
                                    type="radio" id="ratings"
                                    name="rating"
                                    onChange={() => dispatch({
                                        type: 'FILTER_BY_RATING',
                                        payload: item
                                    })}
                                    value={item} 
                                    checked={ratings === item}

                                /> &ensp;
                                <label htmlFor="ratings">{item} stars & above</label><br />
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="p-2">
                <h5 className="font_bold filter_title py-1">Sort by</h5>
                <ul>
                    {sortPrice?.map(item => {
                        return (
                            <li className="p-1" key={item}>
                                <input type="radio" id="sortprice"
                                    name="sortprice"
                                    onChange={() => dispatch({ type: 'SORT_BY', payload: item })}
                                    value={item}
                                    checked={sortBy === item}
                                />&ensp;
                                <span>{item}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section >
    )
}