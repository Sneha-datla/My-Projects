import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // Import Navigation module
import 'swiper/css';
import 'swiper/css/navigation';

const FeaturedGrocery = () => {
  return (
    <div className="rts-grocery-feature-area rts-section-gapBottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-area-between">
              <h2 className="title-left">Featured Grocery</h2>
              <div className="next-prev-swiper-wrapper">
                <div className="swiper-button-prevs">
                  <i className="fa-light fa-chevron-left"></i>
                </div>
                <div className="swiper-button-nexts">
                  <i className="fa-light fa-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="category-area-main-wrapper-one">
              <Swiper
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={6}
                loop={true}
                speed={700}
                navigation={{
                  nextEl: '.swiper-button-nexts',
                  prevEl: '.swiper-button-prevs',
                }}
                breakpoints={{
                  0: { slidesPerView: 1, spaceBetween: 12 },
                  320: { slidesPerView: 1, spaceBetween: 12 },
                  480: { slidesPerView: 2, spaceBetween: 12 },
                  640: { slidesPerView: 2, spaceBetween: 16 },
                  840: { slidesPerView: 3, spaceBetween: 16 },
                  1140: { slidesPerView: 5, spaceBetween: 16 },
                  1540: { slidesPerView: 5, spaceBetween: 16 },
                  1840: { slidesPerView: 6, spaceBetween: 16 },
                }}
                className="mySwiper-category-1 swiper-data"
              >
                <SwiperSlide>
                  <div className="single-shopping-card-one">
                    <div className="image-and-action-area-wrapper">
                      <a href="shop-details.html" className="thumbnail-preview">
                        <div className="badge">
                          <span>
                            25% <br />
                            Off
                          </span>
                          <i className="fa-solid fa-bookmark"></i>
                        </div>
                        <img src="images/grocery/01.jpg" alt="grocery" />
                      </a>
                      <div className="action-share-option">
                        <div
                          className="single-action openuptip message-show-action"
                          data-flow="up"
                          title="Add To Wishlist"
                        >
                          <i className="fa-light fa-heart"></i>
                        </div>
                        <div
                          className="single-action openuptip"
                          data-flow="up"
                          title="Compare"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          <i className="fa-light fa-arrows-retweet"></i>
                        </div>
                        <div
                          className="single-action openuptip cta-quickview product-details-popup-btn"
                          data-flow="up"
                          title="Quick View"
                        >
                          <i className="fa-regular fa-eye"></i>
                        </div>
                      </div>
                    </div>
                    <div className="body-content">
                      <a href="shop-details.html">
                        <h4 className="title">
                          Nestle Cerelac Mixed Fruits & Wheat with Milk
                        </h4>
                      </a>
                      <span className="availability">500g Pack</span>
                      <div className="price-area">
                        <span className="current">$36.00</span>
                        <div className="previous">$36.00</div>
                      </div>
                      <div className="cart-counter-action">
                        <div className="quantity-edit">
                          <input type="text" className="input" value="1" readOnly />
                          <div className="button-wrapper-action">
                            <button className="button">
                              <i className="fa-solid fa-chevron-down"></i>
                            </button>
                            <button className="button plus">
                              +<i className="fa-solid fa-chevron-up"></i>
                            </button>
                          </div>
                        </div>
                        <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                          <div className="btn-text">Add</div>
                          <div className="arrow-icon">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single-shopping-card-one">
                    <div className="image-and-action-area-wrapper">
                      <a href="shop-details.html" className="thumbnail-preview">
                        <div className="badge">
                          <span>
                            25% <br />
                            Off
                          </span>
                          <i className="fa-solid fa-bookmark"></i>
                        </div>
                        <img src="images/grocery/02.jpg" alt="grocery" />
                      </a>
                      <div className="action-share-option">
                        <div
                          className="single-action openuptip message-show-action"
                          data-flow="up"
                          title="Add To Wishlist"
                        >
                          <i className="fa-light fa-heart"></i>
                        </div>
                        <div
                          className="single-action openuptip"
                          data-flow="up"
                          title="Compare"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          <i className="fa-light fa-arrows-retweet"></i>
                        </div>
                        <div
                          className="single-action openuptip cta-quickview product-details-popup-btn"
                          data-flow="up"
                          title="Quick View"
                        >
                          <i className="fa-regular fa-eye"></i>
                        </div>
                      </div>
                    </div>
                    <div className="body-content">
                      <a href="shop-details.html">
                        <h4 className="title">Peysan Full Fat Fresh Cottage Cheese</h4>
                      </a>
                      <span className="availability">500g Pack</span>
                      <div className="price-area">
                        <span className="current">$36.00</span>
                        <div className="previous">$36.00</div>
                      </div>
                      <div className="cart-counter-action">
                        <div className="quantity-edit">
                          <input type="text" className="input" value="1" readOnly />
                          <div className="button-wrapper-action">
                            <button className="button">
                              <i className="fa-solid fa-chevron-down"></i>
                            </button>
                            <button className="button plus">
                              +<i className="fa-solid fa-chevron-up"></i>
                            </button>
                          </div>
                        </div>
                        <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                          <div className="btn-text">Add</div>
                          <div className="arrow-icon">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single-shopping-card-one">
                    <div className="image-and-action-area-wrapper">
                      <a href="shop-details.html" className="thumbnail-preview">
                        <div className="badge">
                          <span>
                            25% <br />
                            Off
                          </span>
                          <i className="fa-solid fa-bookmark"></i>
                        </div>
                        <img src="images/grocery/03.jpg" alt="grocery" />
                      </a>
                      <div className="action-share-option">
                        <div
                          className="single-action openuptip message-show-action"
                          data-flow="up"
                          title="Add To Wishlist"
                        >
                          <i className="fa-light fa-heart"></i>
                        </div>
                        <div
                          className="single-action openuptip"
                          data-flow="up"
                          title="Compare"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          <i className="fa-light fa-arrows-retweet"></i>
                        </div>
                        <div
                          className="single-action openuptip cta-quickview product-details-popup-btn"
                          data-flow="up"
                          title="Quick View"
                        >
                          <i className="fa-regular fa-eye"></i>
                        </div>
                      </div>
                    </div>
                    <div className="body-content">
                      <a href="shop-details.html">
                        <h4 className="title">Aptamil Gold+ ProNutra Biotik Stage...</h4>
                      </a>
                      <span className="availability">500g Pack</span>
                      <div className="price-area">
                        <span className="current">$36.00</span>
                        <div className="previous">$36.00</div>
                      </div>
                      <div className="cart-counter-action">
                        <div className="quantity-edit">
                          <input type="text" className="input" value="1" readOnly />
                          <div className="button-wrapper-action">
                            <button className="button">
                              <i className="fa-solid fa-chevron-down"></i>
                            </button>
                            <button className="button plus">
                              +<i className="fa-solid fa-chevron-up"></i>
                            </button>
                          </div>
                        </div>
                        <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                          <div className="btn-text">Add</div>
                          <div className="arrow-icon">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single-shopping-card-one">
                    <div className="image-and-action-area-wrapper">
                      <a href="shop-details.html" className="thumbnail-preview">
                        <div className="badge">
                          <span>
                            25% <br />
                            Off
                          </span>
                          <i className="fa-solid fa-bookmark"></i>
                        </div>
                        <img src="images/grocery/04.jpg" alt="grocery" />
                      </a>
                      <div className="action-share-option">
                        <div
                          className="single-action openuptip message-show-action"
                          data-flow="up"
                          title="Add To Wishlist"
                        >
                          <i className="fa-light fa-heart"></i>
                        </div>
                        <div
                          className="single-action openuptip"
                          data-flow="up"
                          title="Compare"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          <i className="fa-light fa-arrows-retweet"></i>
                        </div>
                        <div
                          className="single-action openuptip cta-quickview product-details-popup-btn"
                          data-flow="up"
                          title="Quick View"
                        >
                          <i className="fa-regular fa-eye"></i>
                        </div>
                      </div>
                    </div>
                    <div className="body-content">
                      <a href="shop-details.html">
                        <h4 className="title">Abbott Pediasure Chocolate Refill Pack</h4>
                      </a>
                      <span className="availability">500g Pack</span>
                      <div className="price-area">
                        <span className="current">$36.00</span>
                        <div className="previous">$36.00</div>
                      </div>
                      <div className="cart-counter-action">
                        <div className="quantity-edit">
                          <input type="text" className="input" value="1" readOnly />
                          <div className="button-wrapper-action">
                            <button className="button">
                              <i className="fa-solid fa-chevron-down"></i>
                            </button>
                            <button className="button plus">
                              +<i className="fa-solid fa-chevron-up"></i>
                            </button>
                          </div>
                        </div>
                        <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                          <div className="btn-text">Add</div>
                          <div className="arrow-icon">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single-shopping-card-one">
                    <div className="image-and-action-area-wrapper">
                      <a href="shop-details.html" className="thumbnail-preview">
                        <div className="badge">
                          <span>
                            25% <br />
                            Off
                          </span>
                          <i className="fa-solid fa-bookmark"></i>
                        </div>
                        <img src="images/grocery/05.jpg" alt="grocery" />
                      </a>
                      <div className="action-share-option">
                        <div
                          className="single-action openuptip message-show-action"
                          data-flow="up"
                          title="Add To Wishlist"
                        >
                          <i className="fa-light fa-heart"></i>
                        </div>
                        <div
                          className="single-action openuptip"
                          data-flow="up"
                          title="Compare"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          <i className="fa-light fa-arrows-retweet"></i>
                        </div>
                        <div
                          className="single-action openuptip cta-quickview product-details-popup-btn"
                          data-flow="up"
                          title="Quick View"
                        >
                          <i className="fa-regular fa-eye"></i>
                        </div>
                      </div>
                    </div>
                    <div className="body-content">
                      <a href="shop-details.html">
                        <h4 className="title">Pastine Mellin Filid Angelo 100% Di Grano Tenero</h4>
                      </a>
                      <span className="availability">500g Pack</span>
                      <div className="price-area">
                        <span className="current">$36.00</span>
                        <div className="previous">$36.00</div>
                      </div>
                      <div className="cart-counter-action">
                        <div className="quantity-edit">
                          <input type="text" className="input" value="1" readOnly />
                          <div className="button-wrapper-action">
                            <button className="button">
                              <i className="fa-solid fa-chevron-down"></i>
                            </button>
                            <button className="button plus">
                              +<i className="fa-solid fa-chevron-up"></i>
                            </button>
                          </div>
                        </div>
                        <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                          <div className="btn-text">Add</div>
                          <div className="arrow-icon">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single-shopping-card-one">
                    <div className="image-and-action-area-wrapper">
                      <a href="shop-details.html" className="thumbnail-preview">
                        <div className="badge">
                          <span>
                            25% <br />
                            Off
                          </span>
                          <i className="fa-solid fa-bookmark"></i>
                        </div>
                        <img src="images/grocery/06.jpg" alt="grocery" />
                      </a>
                      <div className="action-share-option">
                        <div
                          className="single-action openuptip message-show-action"
                          data-flow="up"
                          title="Add To Wishlist"
                        >
                          <i className="fa-light fa-heart"></i>
                        </div>
                        <div
                          className="single-action openuptip"
                          data-flow="up"
                          title="Compare"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          <i className="fa-light fa-arrows-retweet"></i>
                        </div>
                        <div
                          className="single-action openuptip cta-quickview product-details-popup-btn"
                          data-flow="up"
                          title="Quick View"
                        >
                          <i className="fa-regular fa-eye"></i>
                        </div>
                      </div>
                    </div>
                    <div className="body-content">
                      <a href="shop-details.html">
                        <h4 className="title">Aussie Bubs Goat Milk Infant Formula Stage 1,</h4>
                      </a>
                      <span className="availability">500g Pack</span>
                      <div className="price-area">
                        <span className="current">$36.00</span>
                        <div className="previous">$36.00</div>
                      </div>
                      <div className="cart-counter-action">
                        <div className="quantity-edit">
                          <input type="text" className="input" value="1" readOnly />
                          <div className="button-wrapper-action">
                            <button className="button">
                              <i className="fa-solid fa-chevron-down"></i>
                            </button>
                            <button className="button plus">
                              +<i className="fa-solid fa-chevron-up"></i>
                            </button>
                          </div>
                        </div>
                        <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                          <div className="btn-text">Add</div>
                          <div className="arrow-icon">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single-shopping-card-one">
                    <div className="image-and-action-area-wrapper">
                      <a href="shop-details.html" className="thumbnail-preview">
                        <div className="badge">
                          <span>
                            25% <br />
                            Off
                          </span>
                          <i className="fa-solid fa-bookmark"></i>
                        </div>
                        <img src="images/grocery/15.jpg" alt="grocery" />
                      </a>
                      <div className="action-share-option">
                        <div
                          className="single-action openuptip message-show-action"
                          data-flow="up"
                          title="Add To Wishlist"
                        >
                          <i className="fa-light fa-heart"></i>
                        </div>
                        <div
                          className="single-action openuptip"
                          data-flow="up"
                          title="Compare"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          <i className="fa-light fa-arrows-retweet"></i>
                        </div>
                        <div
                          className="single-action openuptip cta-quickview product-details-popup-btn"
                          data-flow="up"
                          title="Quick View"
                        >
                          <i className="fa-regular fa-eye"></i>
                        </div>
                      </div>
                    </div>
                    <div className="body-content">
                      <a href="shop-details.html">
                      <h4 class="title">Nestle Cerelac Mixed Fruits &
                      Wheat with Milk</h4>                      </a>
                      <span className="availability">500g Pack</span>
                      <div className="price-area">
                        <span className="current">$36.00</span>
                        <div className="previous">$36.00</div>
                      </div>
                      <div className="cart-counter-action">
                        <div className="quantity-edit">
                          <input type="text" className="input" value="1" readOnly />
                          <div className="button-wrapper-action">
                            <button className="button">
                              <i className="fa-solid fa-chevron-down"></i>
                            </button>
                            <button className="button plus">
                              +<i className="fa-solid fa-chevron-up"></i>
                            </button>
                          </div>
                        </div>
                        <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                          <div className="btn-text">Add</div>
                          <div className="arrow-icon">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                
                {/* Add more SwiperSlide components as needed */}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedGrocery;
