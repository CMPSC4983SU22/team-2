import React, { useState, useEffect } from 'react';
import './index.css';
import FreeShippingIcon from '../../assets/images/free.svg';
import DeliveryIcon from '../../assets/images/delivery.svg';
import QualityIcon from '../../assets/images/quality.svg';
import NewArrivalsImage from '../../assets/images/image_1.jpg';
import Featured_ProductsImage from '../../assets/images/image_2.jpg';
import axios from 'axios';
import Categories from '../../components/categories';
import Footer from '../../components/footer';
import NewArrivals from './NewArrivals';
import Featured_Products from './Featured_Products';
import { Link } from 'react-router-dom';

function Home() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const { status, data: { categories = [] } } = await axios.get('/api/categories');
                if (status === 200) {
                    setCategories(categories);
                } else {
                    throw new Error('Unable to fetch categories, Please try again');
                }
            } catch (error) {
                console.warn('error:', error)
            }
        })();
    }, [])
    return (
        <section id="home_main">
            <section className="header_group">
                <div className="w3-display-container w-100 relative_pos">
                    <img className="header_image_slides w-100 block" alt="shopping"
                        src="https://images.unsplash.com/photo-1550898363-97b48aa83ebe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />

                    <div className="absolute_pos header_content">
                        <div className="row">
                            <div>
                                <div className="detail_box">
                                    <h1 className="header_h1 font_bold my-2">
                                        <span className="header_off font_bold my-2">
                                            Sale 20% Off
                                        </span> <br /> On Everything
                                    </h1>
                                    <div className="btn_box">
                                        <Link to='/products' className="btn1 cta_product py-1 px-2 transition_3_ease rounded_sm text_center">
                                            Shop Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="why_section layout_padding">
                <div className="container_group w-100 flex_column">
                    <div className="heading_container heading_center text_center flex_column">
                        <h2>
                            Why Shop With Us
                        </h2>
                    </div>
                    <div className="section_row flex flex_col">
                        {/* <div> */}
                            <div className="why_item text_center rounded_sm">
                                <div className="img_box">
                                    <img src={DeliveryIcon} alt="delivery faster" className="shop_icons m_auto" />
                                </div>
                                <div className="detail_box">
                                    <h5 className="my-1">
                                        Fast Delivery
                                    </h5>
                                    <p className="m-2">
                                        variations of passages of Lorem Ipsum available
                                    </p>
                                </div>
                            </div>
                        {/* </div>
                        
                        <div> */}
                            <div className="why_item text_center rounded_sm">
                                <div className="img_box">
                                    <img src={FreeShippingIcon} alt="free shipping" className="shop_icons m_auto" />
                                </div>
                                <div className="detail_box">
                                    <h5 className="my-1">
                                        Free Shiping
                                    </h5>
                                    <p className="m-2">
                                        variations of passages of Lorem Ipsum available
                                    </p>
                                </div>
                            </div>
                        {/* </div> */}
                        {/* <div> */}
                            <div className="why_item text_center rounded_sm">
                                <div className="img_box">
                                    <img src={QualityIcon} alt="Best quality" className="shop_icons m_auto" />
                                </div>
                                <div className="detail_box">
                                    <h5 className="my-1">
                                        Best Quality
                                    </h5>
                                    <p className="m-2">
                                        variations of passages of Lorem Ipsum available
                                    </p>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </section>
            <section className="new_arrivals_section flex justify_even">
                <NewArrivals season='Summer Collection' image={NewArrivalsImage} />
                <Featured_Products season='Winter Collection' image={Featured_ProductsImage} />
            </section>
            <section className="product_section layout_padding">
                <div className="container_group flex_column m_auto">
                    <div className="heading_container heading_center text_center flex_column">
                        <h2> Our products </h2>
                    </div>
                    <div className="section_row flex flex_wrap">
                        <Categories categories={categories} />
                    </div>
                </div>
            </section>
            <Footer />
        </section>
    )
}

export default Home