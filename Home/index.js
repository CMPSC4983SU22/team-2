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
                        src="https://drscdn.500px.org/photo/1051200177/m%3D900/v2?sig=1f908c41bba67648e07734f1472b9f19e03f79b01bdcb96fdb15d19e458070b3" />

                    <div className="absolute_pos header_content">
                        <div className="row">
                            <div>
                                <div className="detail_box">
                                    <h1 className="header_h1 font_bold my-2">
                                        <span className="header_off font_bold my-2">
                                             20% to 50% Off
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
                                         Fastest company to deliver our product door to door of our customers.
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
                                        Free Shipping
                                    </h5>
                                    <p className="m-2">
                                        Provide free shipping all over country.
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
                                        Guaranted and certified in providing best quality.
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