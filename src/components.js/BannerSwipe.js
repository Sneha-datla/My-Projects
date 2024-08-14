import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '@fortawesome/fontawesome-free/css/all.min.css';

const BannerSwipe = () => {
    return (
        <div className="background-light-gray-color rts-section-gap bg_light-1 pt_sm--20">
            <div className="rts-banner-area-one mb--30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="category-area-main-wrapper-one">
                                <Swiper
                                    modules={[Navigation, Autoplay]}
                                    spaceBetween={1}
                                    slidesPerView={1}
                                    loop={true}
                                    speed={2000}
                                    autoplay={{
                                        delay: 4000,
                                    }}
                                    navigation={{
                                        nextEl: '.swiper-button-next',
                                        prevEl: '.swiper-button-prev',
                                    }}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            spaceBetween: 0,
                                        },
                                        320: {
                                            slidesPerView: 1,
                                            spaceBetween: 0,
                                        },
                                        480: {
                                            slidesPerView: 1,
                                            spaceBetween: 0,
                                        },
                                        640: {
                                            slidesPerView: 1,
                                            spaceBetween: 0,
                                        },
                                        840: {
                                            slidesPerView: 1,
                                            spaceBetween: 0,
                                        },
                                        1140: {
                                            slidesPerView: 1,
                                            spaceBetween: 0,
                                        },
                                    }}
                                >
                                    <SwiperSlide>
                                        <div className="banner-bg-image bg_image bg_one-banner ptb--120 ptb_md--80 ptb_sm--60">
                                            <div className="banner-one-inner-content">
                                                <span className="pre">Get up to 30% off on your first $150 purchase</span>
                                                <h1 className="title">
                                                    Do not miss our amazing <br />
                                                    grocery deals
                                                </h1>
                                                <a href="shop-grid-sidebar.html" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Shop Now
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-light fa-arrow-right"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-light fa-arrow-right"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="banner-bg-image bg_image bg_one-banner two ptb--120 ptb_md--80 ptb_sm--60">
                                            <div className="banner-one-inner-content">
                                                <span className="pre">Get up to 30% off on your first $150 purchase</span>
                                                <h1 className="title">
                                                    Do not miss our amazing <br />
                                                    grocery deals
                                                </h1>
                                                <a href="shop-grid-sidebar.html" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Shop Now
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-light fa-arrow-right"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-light fa-arrow-right"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div class="swiper-button-prev"><i class=" fa-light-arrow-left"></i></div>
                            <div class="swiper-button-next"><i class="fa-light-arrow-right"></i></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rts-caregory-area-one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="category-area-main-wrapper-one">
                                <Swiper
                                    spaceBetween={12}
                                    slidesPerView={10}
                                    loop={true}
                                    speed={1000}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 2,
                                            spaceBetween: 12,
                                        },
                                        320: {
                                            slidesPerView: 2,
                                            spaceBetween: 12,
                                        },
                                        480: {
                                            slidesPerView: 3,
                                            spaceBetween: 12,
                                        },
                                        640: {
                                            slidesPerView: 4,
                                            spaceBetween: 12,
                                        },
                                        840: {
                                            slidesPerView: 4,
                                            spaceBetween: 12,
                                        },
                                        1140: {
                                            slidesPerView: 10,
                                            spaceBetween: 12,
                                        },
                                    }}
                                >
                                    <SwiperSlide>
                                        <a href="shop-grid-sidebar.html" className="single-category-one">
                                            <img src="images/category/01.png" alt="category"/>
                                            <p>Organic Vegetable</p>
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <a href="shop-grid-sidebar.html" className="single-category-one">
                                            <img src="images/category/02.png" alt="category"/>
                                            <p>Organic Vegetable</p>
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <a href="shop-grid-sidebar.html" className="single-category-one">
                                            <img src="images/category/03.png" alt="category"/>
                                            <p>Organic Vegetable</p>
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <a href="shop-grid-sidebar.html" className="single-category-one">
                                            <img src="images/category/04.png" alt="category"/>
                                            <p>Organic Vegetable</p>
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <a href="shop-grid-sidebar.html" className="single-category-one">
                                            <img src="images/category/05.png" alt="category"/>
                                            <p>Organic Vegetable</p>
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <a href="shop-grid-sidebar.html" className="single-category-one">
                                            <img src="images/category/06.png" alt="category"/>
                                            <p>Organic Vegetable</p>
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <a href="shop-grid-sidebar.html" className="single-category-one">
                                            <img src="images/category/07.png" alt="category"/>
                                            <p>Organic Vegetable</p>
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <a href="shop-grid-sidebar.html" className="single-category-one">
                                            <img src="images/category/08.png" alt="category"/>
                                            <p>Organic Vegetable</p>
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <a href="shop-grid-sidebar.html" className="single-category-one">
                                            <img src="images/category/09.png" alt="category"/>
                                            <p>Organic Vegetable</p>
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <a href="shop-grid-sidebar.html" className="single-category-one">
                                            <img src="images/category/10.png" alt="category"/>
                                            <p>Organic Vegetable</p>
                                        </a>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSwipe;
