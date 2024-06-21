// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Banner1 from '../assets/banner.jpg';
import Banner2 from '../assets/banner2.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Home.css';

function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className='home'>
            <Slider {...settings}>
                <div>
                    <div className='banner' style={{ backgroundImage: `url(${Banner1})` }}>
                        <div className='headerContainer'>
                            <h1>Food Website</h1>
                            <p>Best Food In Egypt</p>
                            <Link to='/menu'>
                                <button className='order-button'>ORDER NOW</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='banner' style={{ backgroundImage: `url(${Banner2})` }}>
                        <div className='headerContainer'>
                            <h1>Delicious Pizza</h1>
                            <p>Best Pizza In Town</p>
                            <Link to='/menu'>
                                <button className='order-button'>ORDER NOW</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default Home;
