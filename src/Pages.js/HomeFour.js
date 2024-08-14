import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '@fortawesome/fontawesome-free/css/all.min.css';
import WeekendDiscount from "../components.js/WeekendDiscount";
import BlogPost from "../components.js/BlogPost";
import CountDown from "../components.js/CountDown";
import Footer from "../components.js/Footer";


const HomeFour = ()=>{
    return(
<div>
<header className="header-style-two header-four bg-primary-header header-primary-sticky header--fft">
        <div className="header-top-area bg_primary">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bwtween-area-header-top header-top-style-four">
                            <div className="hader-top-menu">
                                <Link to="/about">About Us</Link>
                                <Link to="/accountinfo">My Account </Link>
                                <Link to="/wishlist">Wishlist</Link>
                                <Link to="/ordertracking">Order Tracking</Link>
                            </div>
                            <p>Welcome to our Organic store EkoMart!</p>
                            <div className="follow-us-social">
                                <span>Follow Us:</span>
                                <div className="social">
                                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="#"><i className="fa-brands fa-youtube"></i></a>
                                    <a href="#"><i className="fa-regular fa-basketball"></i></a>
                                    <a href="#"><i className="fa-brands fa-skype"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="search-header-area-main bg_white without-category">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="logo-search-category-wrapper">
                    <a href="index-2.html" className="logo-area">
                        <img src="images/logo/logo-01.svg" alt="logo-main" className="logo" />
                    </a>
                    <div className="category-search-wrapper">
                        <div>
                            
                           
                        </div>
                        <form action="#" className="search-header">
                            <input type="text" placeholder="Search for products, categories" required />
                            <a href="javascript:void(0);" className="rts-btn btn-primary radious-sm with-icon">
                                <div className="btn-text">
                                    Search
                                </div>
                                <div className="arrow-icon">
                                    <i className="fa-light fa-magnifying-glass"></i>
                                </div>
                                <div className="arrow-icon">
                                    <i className="fa-light fa-magnifying-glass"></i>
                                </div>
                            </a>
                        </form>
                    </div>
                    <div className="accont-wishlist-cart-area-header">
                        <Link to="/accountinfo" className="btn-border-only account">
                            <i className="fa-light fa-user"></i>
                            Account
                        </Link>
                        <Link to="/wishlist" className="btn-border-only wishlist">
                            <i className="fa-regular fa-heart"></i>
                            Wishlist
                        </Link>
                        <div className="btn-border-only cart category-hover-header">
                            <i className="fa-light  fa-cart-shopping"></i>
                            <span>My Cart</span>
                            <div className="category-sub-menu card-number-show">
                                <h5 className="shopping-cart-number">Shopping Cart (03)</h5>
                                <div className="cart-item-1 border-top">
                                    <div className="img-name">
                                        <div className="thumbanil">
                                            <img src="images/shop/cart-1.png" alt="" />
                                        </div>
                                        <div className="details">
                                            <a href="shop-details.html">
                                                <h5 className="title">Foster Farms Breast Nuggets Shaped Chicken</h5>
                                            </a>
                                            <div className="number">
                                                1 <i className="fa-regular fa-x"></i>
                                                <span>$36.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="close-c1">
                                        <i className="fa-regular fa-x"></i>
                                    </div>
                                </div>
                                <div className="cart-item-1">
                                    <div className="img-name">
                                        <div className="thumbanil">
                                            <img src="images/shop/05.png" alt="" />
                                        </div>
                                        <div className="details">
                                            <a href="shop-details.html">
                                                <h5 className="title">Foster Farms Breast Nuggets Shaped Chicken</h5>
                                            </a>
                                            <div className="number">
                                                1 <i className="fa-regular fa-x"></i>
                                                <span>$36.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="close-c1">
                                        <i className="fa-regular fa-x"></i>
                                    </div>
                                </div>
                                <div className="cart-item-1">
                                    <div className="img-name">
                                        <div className="thumbanil">
                                            <img src="images/shop/04.png" alt="" />
                                        </div>
                                        <div className="details">
                                            <a href="shop-details.html">
                                                <h5 className="title">Foster Farms Breast Nuggets Shaped Chicken</h5>
                                            </a>
                                            <div className="number">
                                                1 <i className="fa-regular fa-x"></i>
                                                <span>$36.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="close-c1">
                                        <i className="fa-regular fa-x"></i>
                                    </div>
                                </div>
                                <div className="sub-total-cart-balance">
                                    <div className="bottom-content-deals mt--10">
                                        <div className="top">
                                            <span>Sub Total:</span>
                                            <span className="number-c">$108.00</span>
                                        </div>
                                        <div className="single-progress-area-incard">
                                            <div className="progress">
                                                <div className="progress-bar wow fadeInLeft" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <p>Spend More <span>$125.00</span> to reach <span>Free Shipping</span></p>
                                    </div>
                                    <div className="button-wrapper d-flex align-items-center justify-content-between">
                                        <a href="cart.html" className="rts-btn btn-primary">View Cart</a>
                                        <a href="checkout.html" className="rts-btn btn-primary border-only">CheckOut</a>
                                    </div>
                                </div>
                            </div>
                            <Link to="/viewcart" className="over_link"></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="rts-header-nav-area-one header-four header--sticky">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="nav-and-btn-wrapper">
            <div className="nav-area-bottom-left-header-four">
              <div className="category-btn category-hover-header">
                {/* Uncomment and use the image if needed */}
                {/* <img className="parent" src="assets/images/icons/bar-1.svg" alt="icons" /> */}
                <span>All Categories</span>
                <ul className="category-sub-menu" id="category-active-four">
                  <li>
                    <a href="#" className="menu-item">
                      <img src="images/icons/01.svg" alt="icons" />
                      <span>Breakfast &amp; Dairy</span>
                      <i className="fa-regular fa-plus"></i>
                    </a>
                    <ul className="submenu mm-collapse">
                      <li><a className="mobile-menu-link" href="#">Breakfast</a></li>
                      <li><a className="mobile-menu-link" href="#">Dinner</a></li>
                      <li><a className="mobile-menu-link" href="#">Pumking</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="menu-item">
                      <img src="images/icons/02.svg" alt="icons" />
                      <span>Meats &amp; Seafood</span>
                      <i className="fa-regular fa-plus"></i>
                    </a>
                    <ul className="submenu mm-collapse">
                      <li><a className="mobile-menu-link" href="#">Breakfast</a></li>
                      <li><a className="mobile-menu-link" href="#">Dinner</a></li>
                      <li><a className="mobile-menu-link" href="#">Pumking</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="menu-item">
                      <img src="images/icons/03.svg" alt="icons" />
                      <span>Breads &amp; Bakery</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="menu-item">
                      <img src="images/icons/04.svg" alt="icons" />
                      <span>Chips &amp; Snacks</span>
                      <i className="fa-regular fa-plus"></i>
                    </a>
                    <ul className="submenu mm-collapse">
                      <li><a className="mobile-menu-link" href="#">Breakfast</a></li>
                      <li><a className="mobile-menu-link" href="#">Dinner</a></li>
                      <li><a className="mobile-menu-link" href="#">Pumking</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="menu-item">
                      <img src="images/icons/05.svg" alt="icons" />
                      <span>Medical Healthcare</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="menu-item">
                      <img src="images/icons/06.svg" alt="icons" />
                      <span>Breads &amp; Bakery</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="menu-item">
                      <img src="images/icons/07.svg" alt="icons" />
                      <span>Biscuits &amp; Snacks</span>
                      <i className="fa-regular fa-plus"></i>
                    </a>
                    <ul className="submenu mm-collapse">
                      <li><a className="mobile-menu-link" href="#">Breakfast</a></li>
                      <li><a className="mobile-menu-link" href="#">Dinner</a></li>
                      <li><a className="mobile-menu-link" href="#">Pumking</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="menu-item">
                      <img src="images/icons/08.svg" alt="icons" />
                      <span>Frozen Foods</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="menu-item">
                      <img src="images/icons/09.svg" alt="icons" />
                      <span>Grocery &amp; Staples</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="menu-item">
                      <img src="images/icons/10.svg" alt="icons" />
                      <span>Other Items</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="nav-area">
                <nav>
                  <ul className="parent-nav">
                    <li className="parent has-dropdown">
                      <Link className="nav-link" to="/">Home</Link>
                      <ul className="submenu">
                        <li><Link className="sub-b" to="/">Home One</Link></li>
                        <li><Link className="sub-b" to="/hometwo">Home Two</Link></li>
                        <li><Link className="sub-b" to="/homethree">Home Three</Link></li>
                        <li><Link className="sub-b" to="/homefour">Home Four</Link></li>
                        <li><Link className="sub-b" to="/homefive">Home Five</Link></li>
                      </ul>
                    </li>
                    <li className="parent"><Link to="/about">About</Link></li>
                    <li className="parent with-megamenu">
                      <Link to="#">Shop</Link>
                      <div className="rts-megamenu">
                        <div className="wrapper">
                          <div className="row align-items-center">
                            <div className="col-lg-8">
                              <div className="megamenu-item-wrapper">
                                <div className="single-megamenu-wrapper">
                                  <p className="title">Shop Layout</p>
                                  <ul>
                                    <li><Link to="/shopgridsidebar">Shop Grid Sidebar</Link></li>
                                    <li><Link to="/shoplistgrid">Shop List Sidebar</Link></li>
                                    <li><Link to="/shopgridtop">Shop Top Filter Grid</Link></li>
                                    <li><Link to="/shoplisttop">Shop Top Filter List</Link></li>
                                  </ul>
                                </div>
                                <div className="single-megamenu-wrapper">
                                  <p className="title">Shop Details</p>
                                  <ul>
                                    <li><Link className="sub-b" to="/shopdetailpage">Shop Details</Link></li>
                                    <li><Link className="sub-b" to="/shopdetailpage2">Shop Detail V2</Link></li>
                                    <li><Link className="sub-b" to="/shopdetailrightbar">Shop Details V3</Link></li>
                                    <li><Link className="sub-b" to="/shopdetailfour">Shop Details V4</Link></li>
                                  </ul>
                                </div>
                                <div className="single-megamenu-wrapper">
                                  <p className="title">Product Feature</p>
                                  <ul>
                                    <li><Link className="sub-b" to="/shopvariableproduct">Variable Product</Link></li>
                                    <li><Link className="sub-b" to="/shopdetailaffliate">Affiliate Product</Link></li>
                                    <li><Link className="sub-b" to="/shopdetailgroup">Shop Details Group</Link></li>
                                    <li><Link className="sub-b" to="/shopdetailcompare">Shop Compare</Link></li>
                                  </ul>
                                </div>
                                <div className="single-megamenu-wrapper">
                                  <p className="title">Shop Others</p>
                                  <ul>
                                    <li><Link className="sub-b" to="/viewcart">Cart</Link></li>
                                    <li><Link className="sub-b" to="/checkout">Checkout</Link></li>
                                    <li><Link className="sub-b" to="/trackorder">Track Order</Link></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <Link to="shop-grid-sidebar.html" className="feature-add-megamenu-area">
                                <img src="images/feature/05.jpg" alt="feature_product" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="parent has-dropdown">
                    <Link className="nav-link" to="#">Vendors</Link>
                      <ul className="submenu">
                        <li><Link className="sub-b" to="/vendorslist">Vendor List</Link></li>
                        <li><Link className="sub-b" to="/vendorgrid">Vendor Grid</Link></li>
                        <li><Link className="sub-b" to="/vendordetail">Vendor Details</Link></li>
                      </ul>
                    </li>
                    <li className="parent has-dropdown">
                      <Link className="nav-link" to="#">Pages</Link>
                      <ul className="submenu">
                      <li><Link className="sub-b" to="/about">About</Link></li>
                        <li><Link className="sub-b" to="/store">Store</Link></li>
                        <li><Link className="sub-b" to="/faqs">Faq's</Link></li>
                        <li><Link className="sub-b" to="/invoice">Invoice</Link></li>
                        <li><Link className="sub-b" to="/contact">Contact</Link></li>
                        <li><Link className="sub-b" to="/register">Register</Link></li>
                        <li><Link className="sub-b" to="/login">Login</Link></li>
                        <li><Link className="sub-b" to="/privacypolicy">Privacy Policy</Link></li>
                        <li><Link className="sub-b" to="/cookies">Cookies Policy</Link></li>
                        <li><Link className="sub-b" to="/terms-conditon">Terms & Condition</Link></li>
                        <li><Link className="sub-b" to="/error">Error</Link></li>
                      </ul>
                    </li>
                    <li className="parent has-dropdown">
                      <Link className="nav-link" to="#">Blog</Link>
                      <ul className="submenu">
                        <li><Link className="sub-b" to="/Blog">Blog</Link></li>
                        <li><Link className="sub-b" to="/blogleft">Blog List Right Sidebar</Link></li>
                        <li><Link className="sub-b" to="blogright">Blog List Left Sidebar</Link></li>
                        <li><Link className="sub-b" to="/blogdetailed">Blog Details</Link></li>
                      </ul>
                    </li>
                    <li className="parent"><Link to="/contact">Contact</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="right-location-area fourt">
              <p>Get 30% Discount Now <span>Sale</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="rts-banner-area rts-section-gap banner-bg_4 bg_image d-flex align-items-center">
    <div className="transparent-person">
        <img src="images/banner/transparent/01.png" alt="banner" />
    </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                {/* banner inner content area start */}
                <div className="banner-area-start-4">
                    <span className="pre">Get up to -30% off on your purchase</span>
                    <h1 className="title">Buy From Different Kind <br />
                        of Grocery Store</h1>
                    <p>Don't miss these opportunities...</p>
                    <div className="rts-btn-banner-area">
                        <a href="#" className="rts-btn btn-primary radious-sm with-icon">
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
                        <div className="price-area">
                            <span>
                                from
                            </span>
                            <h3 className="title">$80.99</h3>
                        </div>
                    </div>
                </div>
                {/* banner inner content area end */}
            </div>
        </div>
    </div>
</div>
 <div className="rts-category-area rts-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cover-card-main-over">
              <div className="row">
                <div className="col-lg-12">
                  <div className="title-area-between">
                    <h2 className="title-left mb--0">Featured Categories</h2>
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
              <div className="row">
                <div className="col-lg-12">
                  <div className="rts-caregory-area-one">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="category-area-main-wrapper-one">
                          <Swiper
                           modules={[Navigation, Autoplay]}
                            spaceBetween={6}
                            slidesPerView={10}
                            loop={true}
                            speed={1000}
                            autoplay={{
                                delay: 4000,
                            }}
                            navigation={{
                              nextEl: '.swiper-button-nexts',
                              prevEl: '.swiper-button-prevs',
                            }}
                            breakpoints={{
                              0: { slidesPerView: 1, spaceBetween: 15 },
                              340: { slidesPerView: 2, spaceBetween: 15 },
                              480: { slidesPerView: 3, spaceBetween: 15 },
                              640: { slidesPerView: 4, spaceBetween: 15 },
                              840: { slidesPerView: 4, spaceBetween: 15 },
                              1140: { slidesPerView: 6, spaceBetween: 15 },
                              1740: { slidesPerView: 8, spaceBetween: 15 },
                            }}
                          >
                            <SwiperSlide>
                              <div className="single-category-one height-180">
                                <a href="shop-grid-sidebar.html">
                                  <img src="images/category/01.png" alt="category" />
                                  <p>Organic Vegetable</p>
                                  <span>299 Items</span>
                                </a>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="single-category-one height-180">
                                <a href="shop-grid-sidebar.html">
                                  <img src="images/category/02.png" alt="category" />
                                  <p>Organic Vegetable</p>
                                  <span>299 Items</span>
                                </a>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="single-category-one height-180">
                                <a href="shop-grid-sidebar.html">
                                  <img src="images/category/03.png" alt="category" />
                                  <p>Organic Vegetable</p>
                                  <span>299 Items</span>
                                </a>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="single-category-one height-180">
                                <a href="shop-grid-sidebar.html">
                                  <img src="images/category/04.png" alt="category" />
                                  <p>Organic Vegetable</p>
                                  <span>299 Items</span>
                                </a>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="single-category-one height-180">
                                <a href="shop-grid-sidebar.html">
                                  <img src="images/category/05.png" alt="category" />
                                  <p>Organic Foods</p>
                                  <span>299 Items</span>
                                </a>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="single-category-one height-180">
                                <a href="shop-grid-sidebar.html">
                                  <img src="images/category/06.png" alt="category" />
                                  <p>Premium Vegetable</p>
                                  <span>299 Items</span>
                                </a>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="single-category-one height-180">
                                <a href="shop-grid-sidebar.html">
                                  <img src="images/category/07.png" alt="category" />
                                  <p>Organic Vegetable</p>
                                  <span>299 Items</span>
                                </a>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="single-category-one height-180">
                                <a href="shop-grid-sidebar.html">
                                  <img src="images/category/08.png" alt="category" />
                                  <p>Organic Vegetable</p>
                                  <span>299 Items</span>
                                </a>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="single-category-one height-180">
                                <a href="shop-grid-sidebar.html">
                                  <img src="images/category/09.png" alt="category" />
                                  <p>Organic Vegetable</p>
                                  <span>299 Items</span>
                                </a>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="single-category-one height-180">
                                <a href="shop-grid-sidebar.html">
                                  <img src="images/category/10.png" alt="category" />
                                  <p>Organic Vegetable</p>
                                  <span>299 Items</span>
                                </a>
                              </div>
                            </SwiperSlide>
                          </Swiper>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="weekly-best-selling-area rts-section-gap bg_light-1">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="cover-card-main-over">

                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="title-area-between">
                                        <h2 class="title-left">
                                            Weekly Best Selling Groceries
                                        </h2>
                                        <ul class="nav nav-tabs best-selling-grocery" id="myTab" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Frozen Foods</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Diet Foods</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Healthy Foods</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="vitamine-tab" data-bs-toggle="tab" data-bs-target="#vitamine" type="button" role="tab" aria-controls="vitamine" aria-selected="false">Vitamin Items</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="tab-content" id="myTabContent">
                                       
                                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                            <div class="row g-4">
                                                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                                    <div class="single-shopping-card-one">
                                                      
                                                        <div class="image-and-action-area-wrapper">
                                                            <a href="shop-details.html" class="thumbnail-preview">
                                                                <div class="badge">
                                                                    <span>25% <br/> 
                                                                        Off
                                                                    </span>
                                                                    <i class="fa-solid fa-bookmark"></i>
                                                                </div>
                                                                <img src="images/grocery/15.jpg" alt="grocery"/>
                                                            </a>
                                                            <div class="action-share-option">
                                                                <div class="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                                    <i class="fa-light fa-heart"></i>
                                                                </div>
                                                                <div class="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                    <i class="fa-light fa-arrows-retweet"></i>
                                                                </div>
                                                                <div class="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                                    <i class="fa-regular fa-eye"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="body-content">
                                                            
                                                            <a href="shop-details.html">
                                                                <h4 class="title">Nestle Cerelac Mixed Fruits &
                                                                    Wheat with Milk</h4>
                                                            </a>
                                                            <span class="availability">500g Pack</span>
                                                            <div class="price-area">
                                                                <span class="current">$36.00</span>
                                                                <div class="previous">$36.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                                    <div class="single-shopping-card-one">
                                                                                              
                                                        <div class="image-and-action-area-wrapper">
                                                            <a href="shop-details.html" class="thumbnail-preview">
                                                                <div class="badge">
                                                                    <span>25% <br/> 
                                                                        Off
                                                                    </span>
                                                                    <i class="fa-solid fa-bookmark"></i>
                                                                </div>
                                                                <img src="images/grocery/16.jpg" alt="grocery"/>
                                                            </a>
                                                            <div class="action-share-option">
                                                                <div class="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                                    <i class="fa-light fa-heart"></i>
                                                                </div>
                                                                <div class="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                    <i class="fa-light fa-arrows-retweet"></i>
                                                                </div>
                                                                <div class="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                                    <i class="fa-regular fa-eye"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                          
                                                        <div class="body-content">
                                                            
                                                            <a href="shop-details.html">
                                                                <h4 class="title">Rias Spicy Paprika Flavour Crips</h4>
                                                            </a>
                                                            <span class="availability">500g Pack</span>
                                                            <div class="price-area">
                                                                <span class="current">$36.00</span>
                                                                <div class="previous">$36.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                                    <div class="single-shopping-card-one">
                                                                                                
                                                        <div class="image-and-action-area-wrapper">
                                                            <a href="shop-details.html" class="thumbnail-preview">
                                                                <div class="badge">
                                                                    <span>25% <br/> 
                                                                        Off
                                                                    </span>
                                                                    <i class="fa-solid fa-bookmark"></i>
                                                                </div>
                                                                <img src="images/grocery/17.jpg" alt="grocery"/>
                                                            </a>
                                                            <div class="action-share-option">
                                                                <div class="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                                    <i class="fa-light fa-heart"></i>
                                                                </div>
                                                                <div class="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                    <i class="fa-light fa-arrows-retweet"></i>
                                                                </div>
                                                                <div class="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                                    <i class="fa-regular fa-eye"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                          
                                                        <div class="body-content">
                                                            
                                                            <a href="shop-details.html">
                                                                <h4 class="title">Great Pumpkin Spice Wuick Bread & Muffin Mix</h4>
                                                            </a>
                                                            <span class="availability">500g Pack</span>
                                                            <div class="price-area">
                                                                <span class="current">$36.00</span>
                                                                <div class="previous">$36.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                                    <div class="single-shopping-card-one">
                                                                                               
                                                        <div class="image-and-action-area-wrapper">
                                                            <a href="shop-details.html" class="thumbnail-preview">
                                                                <div class="badge">
                                                                    <span>25% <br/> 
                                                                        Off
                                                                    </span>
                                                                    <i class="fa-solid fa-bookmark"></i>
                                                                </div>
                                                                <img src="images/grocery/18.jpg" alt="grocery"/>
                                                            </a>
                                                            <div class="action-share-option">
                                                                <div class="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                                    <i class="fa-light fa-heart"></i>
                                                                </div>
                                                                <div class="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                    <i class="fa-light fa-arrows-retweet"></i>
                                                                </div>
                                                                <div class="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                                    <i class="fa-regular fa-eye"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                           
                                                        <div class="body-content">
                                                            
                                                            <a href="shop-details.html">
                                                                <h4 class="title">Smartfood Popcorn, White Good Cheddar, Party Size!</h4>
                                                            </a>
                                                            <span class="availability">500g Pack</span>
                                                            <div class="price-area">
                                                                <span class="current">$36.00</span>
                                                                <div class="previous">$36.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                                    <div class="single-shopping-card-one">
                                                                                                
                                                        <div class="image-and-action-area-wrapper">
                                                            <a href="shop-details.html" class="thumbnail-preview">
                                                                <div class="badge">
                                                                    <span>25% <br/> 
                                                                        Off
                                                                    </span>
                                                                    <i class="fa-solid fa-bookmark"></i>
                                                                </div>
                                                                <img src="images/grocery/19.jpg" alt="grocery"/>
                                                            </a>
                                                            <div class="action-share-option">
                                                                <div class="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                                    <i class="fa-light fa-heart"></i>
                                                                </div>
                                                                <div class="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                    <i class="fa-light fa-arrows-retweet"></i>
                                                                </div>
                                                                <div class="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                                    <i class="fa-regular fa-eye"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="body-content">
                                                            
                                                            <a href="shop-details.html">
                                                                <h4 class="title">Nestle Cerelac Mixed Fruits &
                                                                    Wheat with Milk</h4>
                                                            </a>
                                                            <span class="availability">500g Pack</span>
                                                            <div class="price-area">
                                                                <span class="current">$36.00</span>
                                                                <div class="previous">$36.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                                    <div class="single-shopping-card-one">
                                                        <div class="image-and-action-area-wrapper">
                                                            <a href="shop-details.html" class="thumbnail-preview">
                                                                <div class="badge">
                                                                    <span>25% <br/> 
                                                                        Off
                                                                    </span>
                                                                    <i class="fa-solid fa-bookmark"></i>
                                                                </div>
                                                                <img src="images/grocery/20.jpg" alt="grocery"/>
                                                            </a>
                                                            <div class="action-share-option">
                                                                <div class="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                                    <i class="fa-light fa-heart"></i>
                                                                </div>
                                                                <div class="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                    <i class="fa-light fa-arrows-retweet"></i>
                                                                </div>
                                                                <div class="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                                    <i class="fa-regular fa-eye"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="body-content">
                                                            
                                                            <a href="shop-details.html">
                                                                <h4 class="title">Peysan Full Fat Fresh Cottage Cheese</h4>
                                                            </a>
                                                            <span class="availability">500g Pack</span>
                                                            <div class="price-area">
                                                                <span class="current">$36.00</span>
                                                                <div class="previous">$36.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                                    <div class="single-shopping-card-one">
                                                        <div class="image-and-action-area-wrapper">
                                                            <a href="shop-details.html" class="thumbnail-preview">
                                                                <div class="badge">
                                                                    <span>25% <br/> 
                                                                        Off
                                                                    </span>
                                                                    <i class="fa-solid fa-bookmark"></i>
                                                                </div>
                                                                <img src="images/grocery/21.jpg" alt="grocery"/>
                                                            </a>
                                                            <div class="action-share-option">
                                                                <div class="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                                    <i class="fa-light fa-heart"></i>
                                                                </div>
                                                                <div class="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                    <i class="fa-light fa-arrows-retweet"></i>
                                                                </div>
                                                                <div class="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                                    <i class="fa-regular fa-eye"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                         
                                                        <div class="body-content">
                                                            
                                                            <a href="shop-details.html">
                                                                <h4 class="title">Foster Farms Breast Nuggets Shaped Chicken</h4>
                                                            </a>
                                                            <span class="availability">500g Pack</span>
                                                            <div class="price-area">
                                                                <span class="current">$36.00</span>
                                                                <div class="previous">$36.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                                    <div class="single-shopping-card-one">
                                                                                               
                                                        <div class="image-and-action-area-wrapper">
                                                            <a href="shop-details.html" class="thumbnail-preview">
                                                                <div class="badge">
                                                                    <span>25% <br/> 
                                                                        Off
                                                                    </span>
                                                                    <i class="fa-solid fa-bookmark"></i>
                                                                </div>
                                                                <img src="images/grocery/22.jpg" alt="grocery"/>
                                                            </a>
                                                            <div class="action-share-option">
                                                                <div class="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                                    <i class="fa-light fa-heart"></i>
                                                                </div>
                                                                <div class="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                    <i class="fa-light fa-arrows-retweet"></i>
                                                                </div>
                                                                <div class="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                                    <i class="fa-regular fa-eye"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                           
                                                        <div class="body-content">
                                                            
                                                            <a href="shop-details.html">
                                                                <h4 class="title">Nestle Cerelac Mixed Fruits &
                                                                    Wheat with Milk</h4>
                                                            </a>
                                                            <span class="availability">500g Pack</span>
                                                            <div class="price-area">
                                                                <span class="current">$36.00</span>
                                                                <div class="previous">$36.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                                    <div class="single-shopping-card-one">
                                                                                                
                                                        <div class="image-and-action-area-wrapper">
                                                            <a href="shop-details.html" class="thumbnail-preview">
                                                                <div class="badge">
                                                                    <span>25% <br/> 
                                                                        Off
                                                                    </span>
                                                                    <i class="fa-solid fa-bookmark"></i>
                                                                </div>
                                                                <img src="images/grocery/23.jpg" alt="grocery"/>
                                                            </a>
                                                            <div class="action-share-option">
                                                                <div class="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                                    <i class="fa-light fa-heart"></i>
                                                                </div>
                                                                <div class="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                    <i class="fa-light fa-arrows-retweet"></i>
                                                                </div>
                                                                <div class="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                                    <i class="fa-regular fa-eye"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                            
                                                        <div class="body-content">
                                                            
                                                            <a href="shop-details.html">
                                                                <h4 class="title">7 Varieties Pepperidge Farm Chocolate Collection</h4>
                                                            </a>
                                                            <span class="availability">500g Pack</span>
                                                            <div class="price-area">
                                                                <span class="current">$36.00</span>
                                                                <div class="previous">$36.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                                    <div class="single-shopping-card-one">
                                                                                                
                                                        <div class="image-and-action-area-wrapper">
                                                            <a href="shop-details.html" class="thumbnail-preview">
                                                                <div class="badge">
                                                                    <span>25% <br/> 
                                                                        Off
                                                                    </span>
                                                                    <i class="fa-solid fa-bookmark"></i>
                                                                </div>
                                                                <img src="images/grocery/24.jpg" alt="grocery"/>
                                                            </a>
                                                            <div class="action-share-option">
                                                                <div class="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                                    <i class="fa-light fa-heart"></i>
                                                                </div>
                                                                <div class="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                    <i class="fa-light fa-arrows-retweet"></i>
                                                                </div>
                                                                <div class="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                                    <i class="fa-regular fa-eye"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                           
                                                        <div class="body-content">
                                                            
                                                            <a href="shop-details.html">
                                                                <h4 class="title">Srorck Werther Original Popcorn, Classic Caramel</h4>
                                                            </a>
                                                            <span class="availability">500g Pack</span>
                                                            <div class="price-area">
                                                                <span class="current">$36.00</span>
                                                                <div class="previous">$36.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                                    <div class="single-shopping-card-one">
                                                                                              
                                                        <div class="image-and-action-area-wrapper">
                                                            <a href="shop-details.html" class="thumbnail-preview">
                                                                <div class="badge">
                                                                    <span>25% <br/> 
                                                                        Off
                                                                    </span>
                                                                    <i class="fa-solid fa-bookmark"></i>
                                                                </div>
                                                                <img src="images/grocery/25.jpg" alt="grocery"/>
                                                            </a>
                                                            <div class="action-share-option">
                                                                <div class="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                                    <i class="fa-light fa-heart"></i>
                                                                </div>
                                                                <div class="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                    <i class="fa-light fa-arrows-retweet"></i>
                                                                </div>
                                                                <div class="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                                    <i class="fa-regular fa-eye"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                          
                                                        <div class="body-content">
                                                            
                                                            <a href="shop-details.html">
                                                                <h4 class="title">Crackers, Baked Snack Crackers, Lunch</h4>
                                                            </a>
                                                            <span class="availability">500g Pack</span>
                                                            <div class="price-area">
                                                                <span class="current">$36.00</span>
                                                                <div class="previous">$36.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                                    <div class="single-shopping-card-one">
                                                                                                
                                                        <div class="image-and-action-area-wrapper">
                                                            <a href="shop-details.html" class="thumbnail-preview">
                                                                <div class="badge">
                                                                    <span>25% <br/> 
                                                                        Off
                                                                    </span>
                                                                    <i class="fa-solid fa-bookmark"></i>
                                                                </div>
                                                                <img src="images/grocery/26.jpg" alt="grocery"/>
                                                            </a>
                                                            <div class="action-share-option">
                                                                <div class="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                                    <i class="fa-light fa-heart"></i>
                                                                </div>
                                                                <div class="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                    <i class="fa-light fa-arrows-retweet"></i>
                                                                </div>
                                                                <div class="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                                    <i class="fa-regular fa-eye"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                           
                                                        <div class="body-content">
                                                            
                                                            <a href="shop-details.html">
                                                                <h4 class="title">Town House Oven Baked Crackers, Party Snacks,</h4>
                                                            </a>
                                                            <span class="availability">500g Pack</span>
                                                            <div class="price-area">
                                                                <span class="current">$36.00</span>
                                                                <div class="previous">$36.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        </div>
                                        </div>
                                        </div>
                                        </div>
                                        </div>
                                        </div>
                                        </div>
                                        </div>
                  
   <WeekendDiscount></WeekendDiscount>

   <div className="rts-category-area rts-section-gapTop">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cover-card-main-over">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="title-area-between">
                                        <h2 className="title-left mb--0">
                                            Hand Picked Products for 10% Offer
                                        </h2>
                                        <div className="next-prev-swiper-wrapper d-sm-none">
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
                            <div className="row">
                                <div className="col-lg-12">
                                    {/* rts category area start */}
                                    <div className="rts-caregory-area-one">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="category-area-main-wrapper-one">
                                                    <Swiper
                                                        modules={[Navigation, Autoplay]}
                                                        spaceBetween={12}
                                                        slidesPerView={4}
                                                        loop={true}
                                                        speed={1000}
                                                        autoplay={{
                                                            delay: 4000,
                                                        }}
                                                        navigation={{
                                                            nextEl: '.swiper-button-nexts',
                                                            prevEl: '.swiper-button-prevs'
                                                        }}
                                                        breakpoints={{
                                                            0: {
                                                                slidesPerView: 1,
                                                                spaceBetween: 15
                                                            },
                                                            320: {
                                                                slidesPerView: 1,
                                                                spaceBetween: 15
                                                            },
                                                            480: {
                                                                slidesPerView: 2,
                                                                spaceBetween: 15
                                                            },
                                                            640: {
                                                                slidesPerView: 2,
                                                                spaceBetween: 15
                                                            },
                                                            840: {
                                                                slidesPerView: 3,
                                                                spaceBetween: 15
                                                            },
                                                            1140: {
                                                                slidesPerView: 4,
                                                                spaceBetween: 15
                                                            }
                                                        }}
                                                    >
                                                        {/* Swiper slides */}
                                                        <SwiperSlide>
                                                            <div className="single-shopping-card-one tranding-product">
                                                                <a href="shop-details.html" className="thumbnail-preview">
                                                                    <img src="images/grocery/08.jpg" alt="grocery" />
                                                                </a>
                                                                <div className="body-content">
                                                                    <a href="shop-details.html">
                                                                        <h4 className="title">
                                                                            Pastine Mellin Filid Angelo 100% Di Grano Tenero
                                                                        </h4>
                                                                    </a>
                                                                    <span className="availability">500g Pack</span>
                                                                    <div className="price-area">
                                                                        <span className="current">$36.00</span>
                                                                        <div className="previous">$36.00</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <div className="single-shopping-card-one tranding-product">
                                                                <a href="shop-details.html" className="thumbnail-preview">
                                                                    <img src="images/grocery/09.jpg" alt="grocery" />
                                                                </a>
                                                                <div className="body-content">
                                                                    <a href="shop-details.html">
                                                                        <h4 className="title">
                                                                            Pastine Mellin Filid Angelo 100% Di Grano Tenero
                                                                        </h4>
                                                                    </a>
                                                                    <span className="availability">500g Pack</span>
                                                                    <div className="price-area">
                                                                        <span className="current">$36.00</span>
                                                                        <div className="previous">$36.00</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <div className="single-shopping-card-one tranding-product">
                                                                <a href="shop-details.html" className="thumbnail-preview">
                                                                    <img src="images/grocery/10.jpg" alt="grocery" />
                                                                </a>
                                                                <div className="body-content">
                                                                    <a href="shop-details.html">
                                                                        <h4 className="title">
                                                                            Pastine Mellin Filid Angelo 100% Di Grano Tenero
                                                                        </h4>
                                                                    </a>
                                                                    <span className="availability">500g Pack</span>
                                                                    <div className="price-area">
                                                                        <span className="current">$36.00</span>
                                                                        <div className="previous">$36.00</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <div className="single-shopping-card-one tranding-product">
                                                                <a href="shop-details.html" className="thumbnail-preview">
                                                                    <img src="images/grocery/11.jpg" alt="grocery" />
                                                                </a>
                                                                <div className="body-content">
                                                                    <a href="shop-details.html">
                                                                        <h4 className="title">
                                                                            Pastine Mellin Filid Angelo 100% Di Grano Tenero
                                                                        </h4>
                                                                    </a>
                                                                    <span className="availability">500g Pack</span>
                                                                    <div className="price-area">
                                                                        <span className="current">$36.00</span>
                                                                        <div className="previous">$36.00</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <div className="single-shopping-card-one tranding-product">
                                                                <a href="shop-details.html" className="thumbnail-preview">
                                                                    <img src="images/grocery/12.jpg" alt="grocery" />
                                                                </a>
                                                                <div className="body-content">
                                                                    <a href="shop-details.html">
                                                                        <h4 className="title">
                                                                            Pastine Mellin Filid Angelo 100% Di Grano Tenero
                                                                        </h4>
                                                                    </a>
                                                                    <span className="availability">500g Pack</span>
                                                                    <div className="price-area">
                                                                        <span className="current">$36.00</span>
                                                                        <div className="previous">$36.00</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <div className="single-shopping-card-one tranding-product">
                                                                <a href="shop-details.html" className="thumbnail-preview">
                                                                    <img src="images/grocery/13.jpg" alt="grocery" />
                                                                </a>
                                                                <div className="body-content">
                                                                    <a href="shop-details.html">
                                                                        <h4 className="title">
                                                                            Pastine Mellin Filid Angelo 100% Di Grano Tenero
                                                                        </h4>
                                                                    </a>
                                                                    <span className="availability">500g Pack</span>
                                                                    <div className="price-area">
                                                                        <span className="current">$36.00</span>
                                                                        <div className="previous">$36.00</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                    </Swiper>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* rts category area end */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="weekly-best-deals-top-primary rts-section-gapTop">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="weekly-best-deals-top-primary-wrapper">
              <div className="title-area-between with-progress">
                <h2 className="title-left color-white mb--0">
                  Hand Picked Products for 10% Offer
                </h2>
               <CountDown></CountDown>
              </div>
              <div className="body-best-deals-padding">
                <div className="row g-4">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="single-shopping-card-one tranding-product with-progress">
                      <a href="shop-details.html" className="thumbnail-preview">
                        <img src="images/grocery/27.jpg" alt="grocery" />
                      </a>
                      <div className="body-content">
                        <div className="top">
                          <div className="stars-area">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <span>(125 Reviews)</span>
                          </div>
                          <a href="shop-details.html">
                            <h4 className="title">Pastine Mellin Filid Angelo 100% Di Grano Tenero</h4>
                          </a>
                          <span className="availability">500g Pack</span>
                          <div className="price-area">
                            <span className="current">$36.00</span>
                            <div className="previous">$36.00</div>
                          </div>
                        </div>
                        <div className="bottom-content-deals mt--10">
                          <span>In Stock</span>
                          <div className="single-progress-area-incard">
                            <div className="progress">
                              <div className="progress-bar wow fadeInLeft" role="progressbar" style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="single-shopping-card-one tranding-product with-progress">
                      <a href="shop-details.html" className="thumbnail-preview">
                        <img src="images/grocery/28.jpg" alt="grocery" />
                      </a>
                      <div className="body-content">
                        <div className="top">
                          <div className="stars-area">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <span>(125 Reviews)</span>
                          </div>
                          <a href="shop-details.html">
                            <h4 className="title">Pastine Mellin Filid Angelo 100% Di Grano Tenero</h4>
                          </a>
                          <span className="availability">500g Pack</span>
                          <div className="price-area">
                            <span className="current">$36.00</span>
                            <div className="previous">$36.00</div>
                          </div>
                        </div>
                        <div className="bottom-content-deals mt--10">
                          <span>In Stock</span>
                          <div className="single-progress-area-incard">
                            <div className="progress">
                              <div className="progress-bar wow fadeInLeft" role="progressbar" style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="single-shopping-card-one tranding-product with-progress">
                      <a href="shop-details.html" className="thumbnail-preview">
                        <img src="images/grocery/10.jpg" alt="grocery" />
                      </a>
                      <div className="body-content">
                        <div className="top">
                          <div className="stars-area">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <span>(125 Reviews)</span>
                          </div>
                          <a href="shop-details.html">
                            <h4 className="title">Pastine Mellin Filid Angelo 100% Di Grano Tenero</h4>
                          </a>
                          <span className="availability">500g Pack</span>
                          <div className="price-area">
                            <span className="current">$36.00</span>
                            <div className="previous">$36.00</div>
                          </div>
                        </div>
                        <div className="bottom-content-deals mt--10">
                          <span>In Stock</span>
                          <div className="single-progress-area-incard">
                            <div className="progress">
                              <div className="progress-bar wow fadeInLeft" role="progressbar" style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="four-feature-in-one rts-section-gapTop">
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-3">
                    {/* single four feature */}
                    <div className="feature-product-list-wrapper">
                        <div className="title-area">
                            <h2 className="title">
                                Recently Added
                            </h2>
                        </div>
                        <div className="single-product-list">
                            <a href="shop-details.html" className="thumbnail">
                                <img src="images/grocery/01.jpg" alt="product" />
                            </a>
                            <div className="body-content">
                                <div className="top">
                                    <div className="stars-area">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 className="title">Pastine Mellin Filid Angelo 100% Di Grano Tenero</h4>
                                    </a>
                                    <div className="price-area">
                                        <span className="current">$36.00</span>
                                        <div className="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-product-list">
                            <a href="shop-details.html" className="thumbnail">
                                <img src="images/grocery/02.jpg" alt="product" />
                            </a>
                            <div className="body-content">
                                <div className="top">
                                    <div className="stars-area">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 className="title">Lay's Potato Chips, Sweet Southern Heat ...</h4>
                                    </a>
                                    <div className="price-area">
                                        <span className="current">$36.00</span>
                                        <div className="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-product-list">
                            <a href="shop-details.html" className="thumbnail">
                                <img src="images/grocery/03.jpg" alt="product" />
                            </a>
                            <div className="body-content">
                                <div className="top">
                                    <div className="stars-area">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 className="title">Hillshire Farm Sliced Honey Deli Lunch Meat</h4>
                                    </a>
                                    <div className="price-area">
                                        <span className="current">$36.00</span>
                                        <div className="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-product-list">
                            <a href="shop-details.html" className="thumbnail">
                                <img src="images/grocery/04.jpg" alt="product" />
                            </a>
                            <div className="body-content">
                                <div className="top">
                                    <div className="stars-area">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 className="title">Pastine Mellin Filid Angelo 100% Di Grano Tenero</h4>
                                    </a>
                                    <div className="price-area">
                                        <span className="current">$36.00</span>
                                        <div className="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                    
                    {/* single four feature end */}
                </div>
                <div className="col-lg-3">
                    {/* single four feature */}
                    <div className="feature-product-list-wrapper">
                        <div className="title-area">
                            <h2 className="title">
                                Top Rated
                            </h2>
                        </div>
                        <div className="single-product-list">
                            <a href="shop-details.html" className="thumbnail">
                                <img src="images/grocery/05.jpg" alt="product" />
                            </a>
                            <div className="body-content">
                                <div className="top">
                                    <div className="stars-area">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 className="title">Pastine Mellin Filid Angelo 100% Di Grano Tenero</h4>
                                    </a>
                                    <div className="price-area">
                                        <span className="current">$36.00</span>
                                        <div className="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-product-list">
                            <a href="shop-details.html" className="thumbnail">
                                <img src="images/grocery/02.jpg" alt="product" />
                            </a>
                            <div className="body-content">
                                <div className="top">
                                    <div className="stars-area">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 className="title">Lay's Potato Chips, Sweet Southern Heat ...</h4>
                                    </a>
                                    <div className="price-area">
                                        <span className="current">$36.00</span>
                                        <div className="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-product-list">
                            <a href="shop-details.html" className="thumbnail">
                                <img src="images/grocery/03.jpg" alt="product" />
                            </a>
                            <div className="body-content">
                                <div className="top">
                                    <div className="stars-area">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 className="title">Hillshire Farm Sliced Honey Deli Lunch Meat</h4>
                                    </a>
                                    <div className="price-area">
                                        <span className="current">$36.00</span>
                                        <div className="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-product-list">
                            <a href="shop-details.html" className="thumbnail">
                                <img src="images/grocery/04.jpg" alt="product" />
                            </a>
                            <div className="body-content">
                                <div className="top">
                                    <div className="stars-area">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 className="title">Pastine Mellin Filid Angelo 100% Di Grano Tenero</h4>
                                    </a>
                                    <div className="price-area">
                                        <span className="current">$36.00</span>
                                        <div className="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                    
                    {/* single four feature end */}
                </div>

                <div class="col-lg-3">
                    
                    <div class="feature-product-list-wrapper">
                        <div class="title-area">
                            <h2 class="title">
                                Top Selling
                            </h2>
                        </div>
                        <div class="single-product-list">
                            <a href="shop-details.html" class="thumbnail">
                                <img src="images/grocery/06.jpg" alt="product"/>
                            </a>
                            <div class="body-content">
                                <div class="top">
                                    <div class="stars-area">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 class="title">Pastine Mellin Filid Angelo 100% Di Grano Tenero</h4>
                                    </a>
                                    <div class="price-area">
                                        <span class="current">$36.00</span>
                                        <div class="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="single-product-list">
                            <a href="shop-details.html" class="thumbnail">
                                <img src="images/grocery/04.jpg" alt="product"/>
                            </a>
                            <div class="body-content">
                                <div class="top">
                                    <div class="stars-area">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 class="title">Lay's Potato Chips, Sweet Southern Heat ...</h4>
                                    </a>
                                    <div class="price-area">
                                        <span class="current">$36.00</span>
                                        <div class="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="single-product-list">
                            <a href="shop-details.html" class="thumbnail">
                                <img src="images/grocery/01.jpg" alt="product"/>
                            </a>
                            <div class="body-content">
                                <div class="top">
                                    <div class="stars-area">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 class="title">Hillshire Farm Sliced Honey
                                            Deli Lunch Meat</h4>
                                    </a>
                                    <div class="price-area">
                                        <span class="current">$36.00</span>
                                        <div class="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="single-product-list">
                            <a href="shop-details.html" class="thumbnail">
                                <img src="images/grocery/02.jpg" alt="product"/>
                            </a>
                            <div class="body-content">
                                <div class="top">
                                    <div class="stars-area">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 class="title">Pastine Mellin Filid Angelo 100% Di Grano Tenero</h4>
                                    </a>
                                    <div class="price-area">
                                        <span class="current">$36.00</span>
                                        <div class="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                    
                   
                </div>
                <div className="col-lg-3">
                    <div className="add-area-start-feature">
                        <div className="thumbnail">
                            <img src="images/add/01.jpg" alt="add_area" />
                        </div>
                        <div className="inner-add-content">
                            <div className="tag">Weekend Discount</div>
                            <h2 className="title">Discover Real organic
                                <span>Flavors Vegetable</span></h2>
                            <a href="#" className="shop-now-goshop-btn">
                                <span className="text">Read Details</span>
                                <div className="plus-icon">
                                    <i className="fa-sharp fa-regular fa-plus"></i>
                                </div>
                                <div className="plus-icon">
                                    <i className="fa-sharp fa-regular fa-plus"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <BlogPost></BlogPost>
    
    <div class="rts-shorts-service-area rts-section-gap bg_primary">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-3">
                   
                    <div class="single-short-service-area-start">
                        <div class="icon-area">
                            <svg width="38" height="36" viewBox="0 0 38 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M37.0706 23.533C36.5198 23.0073 35.8108 22.7232 35.0885 22.6792C35.6627 21.1037 35.9543 19.4449 35.9543 17.7297C35.9543 14.6993 35.0394 11.8119 33.3085 9.37994C33.0638 9.03604 32.5952 8.96205 32.2621 9.21466C31.929 9.46726 31.8573 9.95064 32.102 10.2945C33.6429 12.4594 34.4573 15.0305 34.4573 17.7297C34.4573 19.6108 34.0646 21.4152 33.2919 23.0977C33.0848 23.2175 32.8892 23.3621 32.7105 23.5326L27.6479 28.3575C27.5727 28.4293 27.2298 28.6624 25.9655 28.6624C25.9575 28.6624 25.9495 28.6624 25.9415 28.6624C23.9541 28.6568 20.9294 28.6513 18.6446 28.647L17.5669 28.6451C16.987 28.6451 16.5152 28.2221 16.5152 27.7022C16.5152 27.19 16.9969 26.7571 17.5669 26.7571H22.3642C23.8948 26.7571 25.14 25.5438 25.14 24.0524C25.14 23.9134 25.1291 23.7768 25.1083 23.6434C26.301 23.0902 27.1022 21.8611 27.1022 20.4546C27.1022 18.5262 25.5919 16.9573 23.7354 16.9573H20.8478C19.8051 16.9573 18.9569 16.0805 18.9569 15.0026C18.9569 13.926 19.8052 13.0501 20.8478 13.0501H26.3537C26.7671 13.0501 27.1022 12.7042 27.1022 12.2776C27.1022 11.8511 26.7671 11.5052 26.3537 11.5052H23.0262L23.0306 9.64587C23.0317 9.21918 22.6974 8.87259 22.284 8.87152C22.2834 8.87152 22.2827 8.87152 22.2821 8.87152C21.8696 8.87152 21.5348 9.21611 21.5336 9.64197L21.5292 11.5052H20.8479C18.9798 11.5052 17.46 13.0741 17.46 15.0026C17.46 16.9322 18.9799 18.5021 20.8479 18.5021H23.7354C24.749 18.5021 25.6053 19.3962 25.6053 20.4546C25.6053 21.2462 25.1246 21.9561 24.4369 22.2558C23.9281 21.6991 23.1876 21.3475 22.3642 21.3475H10.618C10.2776 20.176 10.1051 18.9617 10.1051 17.7297C10.1051 16.7496 10.2136 15.7835 10.4275 14.8449C10.5172 14.9057 10.6075 14.9642 10.6986 15.0204C11.1106 15.2751 11.4295 15.4025 11.7489 15.4025C12.068 15.4025 12.3874 15.2752 12.8006 15.0208C14.28 14.1083 15.5777 12.5924 16.6578 10.515C17.4447 9.00066 17.9329 7.4344 18.0983 5.92162C19.4356 5.41503 20.8408 5.15768 22.2823 5.15768C24.0027 5.15768 25.6643 5.52027 27.221 6.23526C27.3199 6.28068 27.4232 6.30221 27.5249 6.30221C27.8115 6.30221 28.085 6.13133 28.2091 5.84365C28.3771 5.45394 28.2073 4.99737 27.8296 4.82389C26.0802 4.02035 24.2137 3.61295 22.2822 3.61295C20.8612 3.61295 19.4711 3.83599 18.1358 4.27556C18.0302 3.43617 17.61 3.1573 16.977 2.80574L12.1053 0.0926584C11.8835 -0.0308861 11.6162 -0.0308861 11.3944 0.0926584L6.51998 2.80704C5.79175 3.21153 5.34502 3.51912 5.3356 4.69559C5.32001 6.57894 5.84021 8.59127 6.83987 10.5151C7.52513 11.8331 8.29893 12.9244 9.15156 13.7801C8.79101 15.0551 8.60798 16.3812 8.60798 17.7297C8.60798 19.025 8.77779 20.3032 9.11349 21.541C8.47186 21.7123 7.86431 21.9936 7.32073 22.3698C7.08063 21.1761 6.0009 20.2727 4.7086 20.2727H2.66231C1.19433 20.2727 0 21.4383 0 22.8711V33.1736C0 34.6052 1.19433 35.7699 2.66231 35.7699H4.7086C6.17657 35.7699 7.3709 34.6052 7.3709 33.1736V33.1572L12.1144 35.3527C12.1303 35.3601 12.1464 35.3668 12.1628 35.3729C13.6327 35.9299 15.5089 35.9678 20.7209 35.9956C24.6669 36 25.1822 36 25.931 36C27.8155 36 28.7791 35.8238 29.8529 34.7333C32.0869 32.6021 34.321 30.4727 36.5567 28.3418L37.0697 27.8529C37.6697 27.2818 38 26.5145 38 25.6926C38.0001 24.8707 37.6697 24.1034 37.0706 23.533ZM5.87398 33.1736C5.87398 33.7534 5.35126 34.2251 4.70867 34.2251H2.66231C2.01972 34.2251 1.497 33.7534 1.497 33.1736V22.8711C1.497 22.3 2.03063 21.8175 2.66231 21.8175H4.7086C5.34027 21.8175 5.87391 22.3 5.87391 22.8711L5.87398 33.1736ZM8.15911 9.78474C7.27783 8.08889 6.81908 6.33361 6.83259 4.70846C6.83415 4.51131 6.84833 4.42415 6.85604 4.3909C6.91594 4.3415 7.08174 4.24936 7.22951 4.16725L11.7499 1.64995L16.249 4.15553L16.2675 4.1658C16.4154 4.24798 16.5815 4.3402 16.6417 4.38983C16.6494 4.4233 16.6635 4.51108 16.665 4.70969C16.6804 6.33024 16.2217 8.08514 15.3385 9.78458C14.3884 11.612 13.2761 12.9275 12.033 13.6944C11.8672 13.7964 11.787 13.8359 11.7492 13.8511C11.7117 13.8358 11.632 13.7965 11.4678 13.695L11.4672 13.6947C10.239 12.9372 9.09508 11.5851 8.15911 9.78474ZM36.0545 26.7178L35.5412 27.207C33.3024 29.341 31.0652 31.4732 28.828 33.6074C28.8219 33.6132 28.8159 33.6191 28.81 33.6252C28.1794 34.2682 27.7251 34.4552 25.9312 34.4552C25.1825 34.4552 24.6674 34.4552 20.7257 34.4508C15.9554 34.4253 13.9528 34.3963 12.7023 33.9315L7.37105 31.464V24.3572C8.1617 23.4358 9.3446 22.8923 10.5848 22.8923H22.3643C22.8547 22.8923 23.281 23.1443 23.4955 23.5128C23.4996 23.5205 23.5034 23.5284 23.5077 23.5359C23.5936 23.6917 23.6432 23.8667 23.6432 24.0523C23.6432 24.692 23.0695 25.2123 22.3643 25.2123H17.5671C16.1617 25.2123 15.0183 26.3292 15.0183 27.7021C15.0183 29.0738 16.1618 30.1898 17.5658 30.1898L18.6421 30.1918C20.9264 30.196 23.9505 30.2016 25.9379 30.2071C25.9471 30.2072 25.956 30.2072 25.965 30.2072C27.295 30.2071 28.1533 29.9795 28.6641 29.4919L33.7267 24.6671C34.3575 24.065 35.4233 24.0649 36.0549 24.6678C36.344 24.943 36.5032 25.307 36.5032 25.6926C36.5031 26.0783 36.3439 26.4423 36.0545 26.7178Z" fill="#629D23"></path>
                                <path d="M30.4065 8.12344C30.5981 8.12344 30.7896 8.04807 30.9358 7.89726C31.2281 7.59556 31.2281 7.10651 30.9358 6.80481L30.9337 6.80267C30.6414 6.5012 30.1685 6.50211 29.8762 6.80381C29.5839 7.10544 29.585 7.59556 29.8773 7.89733C30.0234 8.04807 30.215 8.12344 30.4065 8.12344Z" fill="#629D23"></path>
                                <path d="M11.4216 9.51965C11.6166 9.51965 11.8112 9.44152 11.9577 9.28642L14.5992 6.48986C14.8877 6.18433 14.8817 5.69528 14.5856 5.39757C14.2897 5.09977 13.8158 5.10598 13.5272 5.41151L11.3978 7.66602L10.6588 6.95218C10.357 6.66066 9.88343 6.67667 9.60081 6.98833C9.31833 7.29975 9.33399 7.78857 9.63577 8.08008L10.9103 9.31124C11.0545 9.45049 11.2382 9.51965 11.4216 9.51965Z" fill="#629D23"></path>
                            </svg>                                
                        </div>
                        <div class="information">
                            <h4 class="title">Payment Only Online</h4>
                            <p class="disc">
                                We prepared special discounts you on grocery products.
                            </p>
                        </div>
                    </div>
                   
                </div>
                <div class="col-lg-3">
                   
                    <div class="single-short-service-area-start">
                        <div class="icon-area">
                            <svg width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.7688 5.67536C21.2168 5.67536 21.5801 5.31711 21.5801 4.87534V0.800023C21.5801 0.35825 21.2169 0 20.7688 0C20.3208 0 19.9575 0.35817 19.9575 0.800023V4.87534C19.9576 5.31711 20.3208 5.67536 20.7688 5.67536Z" fill="#629D23"></path>
                                <path d="M14.6693 6.98956C14.8235 7.23093 15.0869 7.36309 15.3564 7.36309C15.5042 7.36309 15.6539 7.32325 15.7881 7.23981C16.1672 7.00428 16.2807 6.51027 16.0419 6.13642L13.8803 2.75432C13.6414 2.38055 13.1404 2.26847 12.7614 2.50407C12.3824 2.7396 12.2688 3.23361 12.5076 3.60746L14.6693 6.98956Z" fill="#629D23"></path>
                                <path d="M25.7522 7.24005C25.8865 7.32333 26.036 7.36309 26.1837 7.36309C26.4532 7.36309 26.7168 7.23077 26.871 6.98924L29.0304 3.60714C29.269 3.23321 29.1552 2.73936 28.776 2.50383C28.3967 2.26855 27.896 2.38087 27.6572 2.75464L25.4979 6.13674C25.2592 6.51075 25.3731 7.0046 25.7522 7.24005Z" fill="#629D23"></path>
                                <path d="M41.2769 18.8346L39.8673 16.379C39.6464 15.9943 39.1514 15.8591 38.7617 16.0769C38.3717 16.2945 38.2346 16.7826 38.4554 17.1671L39.8643 19.6217C39.9349 19.745 39.9166 19.864 39.8994 19.9239C39.8828 19.9816 39.8373 20.0881 39.718 20.1531L37.5455 21.3397C37.3525 21.4449 37.1006 21.3785 36.9954 21.1954L36.4434 20.2327C36.4412 20.2283 36.4386 20.2243 36.4362 20.2201L30.7304 10.2683C30.6599 10.1458 30.6777 10.0284 30.6946 9.96925C30.7109 9.91205 30.7562 9.80636 30.8754 9.74132L33.0505 8.55441C33.2459 8.44768 33.4917 8.51249 33.5985 8.69921L34.8702 10.9147C35.0909 11.2993 35.5861 11.4344 35.9758 11.2169C36.3658 10.9993 36.5029 10.5111 36.2822 10.1266L35.0112 7.91207C34.4691 6.96436 33.2373 6.62443 32.2653 7.15429L30.0902 8.3412C29.6196 8.59769 29.2796 9.02162 29.1329 9.53516C28.9945 10.0193 29.044 10.5248 29.2706 10.9684L28.0725 11.3108C27.5621 11.4564 27.2523 11.5354 27.0804 11.5354C27.0797 11.5354 27.079 11.5354 27.0784 11.5354C26.96 11.535 26.8309 11.4904 26.4625 11.3528C26.2954 11.2904 26.0873 11.2126 25.8315 11.1246L23.7087 10.3929C22.5347 9.98853 22.0052 10.0103 21.238 10.0793L17.6183 10.3988C15.9682 10.5429 14.9162 10.91 14.3355 11.5466L12.2727 10.9572C12.4947 10.5155 12.5423 10.0149 12.4052 9.53516C12.2585 9.02194 11.9187 8.59809 11.4486 8.3416L9.27479 7.15413C8.30188 6.62379 7.06944 6.96388 6.52725 7.91135L0.26371 18.8335C-0.00442359 19.299 -0.0707877 19.8405 0.0770307 20.3582C0.223875 20.8723 0.563809 21.2966 1.03355 21.5528L3.20734 22.7401C3.51815 22.9095 3.85581 22.99 4.18901 22.99C4.89687 22.99 5.58501 22.6269 5.95488 21.983L6.18456 21.5823C6.81137 21.8544 7.33765 22.2497 7.69633 22.7177C7.34601 23.1214 7.12534 23.6196 7.06344 24.1614C6.98166 24.878 7.18692 25.5811 7.6414 26.1415C8.092 26.6971 8.73633 27.0477 9.45684 27.1302C9.38058 27.8407 9.58665 28.5369 10.0377 29.0911C10.5038 29.6658 11.1627 30.0011 11.8519 30.0802C11.7759 30.7897 11.9813 31.4852 12.4309 32.0397C12.8812 32.5965 13.5257 32.9478 14.247 33.0304C14.1706 33.7415 14.3767 34.438 14.8277 34.9923C15.3653 35.655 16.1589 36.0001 16.96 36C17.5581 36 18.1604 35.8077 18.6633 35.4117L20.362 34.0713C20.4969 33.9651 20.6195 33.8478 20.7297 33.7214L21.7001 34.4857C22.2018 34.8806 22.8028 35.0725 23.4 35.0724C24.2016 35.0723 24.9965 34.7268 25.5348 34.0635C25.8185 33.7137 25.9981 33.3145 26.0793 32.9024C26.363 32.9992 26.6625 33.0492 26.9679 33.0491C27.0703 33.0491 27.1733 33.0435 27.2767 33.0322C28.0036 32.9526 28.6536 32.6001 29.1052 32.0416C29.5571 31.4865 29.7631 30.7904 29.6869 30.08C30.3757 30.0007 31.0348 29.6655 31.5024 29.091C31.9681 28.5168 32.155 27.8099 32.0818 27.1301C32.8019 27.0473 33.4459 26.6969 33.8955 26.1425C34.3503 25.5836 34.5564 24.8816 34.4759 24.1656C34.4147 23.622 34.1939 23.1222 33.8429 22.7174C34.2005 22.2495 34.7258 21.8538 35.353 21.5818L35.5831 21.9833C35.9528 22.627 36.6406 22.9899 37.3486 22.9899C37.682 22.9899 38.0199 22.9094 38.3311 22.7398L40.5037 21.553C40.9732 21.297 41.313 20.8733 41.4604 20.3601C41.609 19.8429 41.5441 19.3014 41.2769 18.8346ZM4.54274 21.195C4.43727 21.3787 4.1852 21.4449 3.993 21.3401L1.81929 20.1528C1.7006 20.088 1.65533 19.9819 1.63878 19.9244C1.62182 19.8648 1.60373 19.7465 1.67529 19.6225L7.9398 8.69817C8.01152 8.57281 8.14668 8.50257 8.28703 8.50257C8.35535 8.50257 8.42479 8.51913 8.48889 8.55409L10.662 9.74116C10.6623 9.74132 10.6625 9.74148 10.6628 9.74156C10.7817 9.80644 10.8269 9.91213 10.8433 9.96933C10.8601 10.0284 10.878 10.1459 10.8067 10.2697L4.54274 21.195ZM10.4631 25.3119C10.2343 25.4927 9.94541 25.5743 9.65018 25.5419C9.35478 25.5096 9.09152 25.3677 8.90865 25.1422C8.72538 24.9162 8.64279 24.6314 8.67597 24.3404C8.70899 24.0505 8.853 23.7922 9.08292 23.6118L12.1203 21.2177C12.597 20.8424 13.2948 20.9196 13.6758 21.3888C13.8589 21.6146 13.9416 21.899 13.9085 22.1891C13.8756 22.4783 13.7315 22.7364 13.5029 22.9158C13.4978 22.9197 13.4935 22.9241 13.4887 22.9282L10.4638 25.3114C10.4636 25.3115 10.4633 25.3118 10.4631 25.3119ZM11.3039 28.0907C11.1208 27.8657 11.0381 27.5821 11.0708 27.2921C11.1035 27.002 11.2476 26.7425 11.4766 26.5614C11.4767 26.5613 11.4771 26.561 11.4773 26.5609C11.4772 26.561 11.4774 26.5609 11.4773 26.5609L15.8525 23.1139C16.3291 22.7386 17.0271 22.8152 17.408 23.2851C17.5909 23.5106 17.6736 23.7946 17.6409 24.0847C17.6081 24.3751 17.4635 24.6346 17.234 24.8154L12.8602 28.261C12.383 28.6365 11.6852 28.5607 11.3039 28.0907ZM14.4402 31.442C14.1449 31.4097 13.8819 31.2676 13.6988 31.0412C13.5158 30.8157 13.4332 30.5317 13.4659 30.2416C13.4986 29.9514 13.643 29.6921 13.8722 29.5113C13.8723 29.5112 13.8726 29.511 13.8727 29.5109L16.9003 27.1258C16.9039 27.1231 16.9078 27.1208 16.9114 27.118C17.3868 26.7427 18.0845 26.8191 18.4658 27.2877C18.6491 27.5137 18.7318 27.7985 18.6986 28.0895C18.6655 28.3794 18.5215 28.6377 18.2916 28.8181L15.2544 31.2122C15.0249 31.3929 14.7356 31.4742 14.4402 31.442ZM19.7557 32.0915C19.7228 32.3817 19.5787 32.6406 19.3491 32.8214L17.6503 34.162C17.173 34.5376 16.4753 34.462 16.0941 33.9919C15.911 33.7671 15.8282 33.4832 15.8609 33.1927C15.8936 32.9022 16.0376 32.6431 16.2661 32.4631C16.2664 32.4629 16.2667 32.4627 16.267 32.4625L17.9653 31.1238C17.9662 31.1231 17.9672 31.1225 17.9681 31.1219C18.4449 30.7466 19.1427 30.8235 19.5237 31.293C19.7061 31.5181 19.7886 31.8016 19.7557 32.0915ZM32.6292 25.1422C32.4463 25.3676 32.183 25.5096 31.8877 25.5419C31.5926 25.5747 31.3035 25.4927 31.0748 25.3119C31.0747 25.3119 31.0745 25.3118 31.0743 25.3117C31.0743 25.3116 31.0741 25.3115 31.074 25.3115L28.9032 23.6011C28.553 23.3252 28.0425 23.3816 27.763 23.7267C27.4833 24.0718 27.5403 24.5753 27.8903 24.851L30.0605 26.5608C30.5365 26.9368 30.615 27.6235 30.2361 28.0906C29.8538 28.5604 29.156 28.6368 28.6796 28.2606L26.3249 26.4076C25.9747 26.132 25.4642 26.1886 25.1847 26.5339C24.9053 26.8792 24.9626 27.3825 25.3128 27.6582L27.6665 29.5103C27.8958 29.6914 28.0402 29.9511 28.073 30.2416C28.1056 30.5315 28.0229 30.8152 27.8382 31.042C27.6558 31.2676 27.3928 31.4096 27.0975 31.442C26.802 31.4741 26.5127 31.3927 26.2841 31.2128L25.1124 30.2888C25.1104 30.2872 25.1086 30.2855 25.1066 30.2839L23.9316 29.3576C23.5815 29.0816 23.0711 29.1376 22.7913 29.4826C22.7564 29.5258 22.7266 29.5714 22.7021 29.6188C22.5846 29.8452 22.5866 30.1107 22.6968 30.3334C22.7478 30.4365 22.8213 30.5306 22.9182 30.607L24.0963 31.5361C24.5692 31.9127 24.6465 32.5971 24.2679 33.0639C23.8868 33.5336 23.1889 33.6103 22.7125 33.2355L21.3759 32.1825C21.4315 31.4978 21.2258 30.83 20.7906 30.2934C20.5201 29.9601 20.1846 29.7076 19.8162 29.5382C20.0862 29.1688 20.2576 28.7349 20.3109 28.2683C20.3926 27.5518 20.1874 26.8488 19.7321 26.2874C19.4615 25.9549 19.1265 25.703 18.7588 25.534C19.0293 25.1635 19.2007 24.7287 19.2534 24.2615C19.3341 23.5466 19.1287 22.8449 18.675 22.2854C17.8944 21.323 16.5743 21.0304 15.4755 21.4903C15.3876 21.0921 15.2079 20.7164 14.9426 20.3892C14.0033 19.2318 12.2832 19.0424 11.1075 19.9674L8.93518 21.6797C8.44394 21.0615 7.77616 20.5488 6.98661 20.1832L11.4552 12.3893L13.8344 13.0691C13.8452 13.1946 13.8658 13.3266 13.9003 13.4665C14.4763 15.8016 16.6565 16.8896 19.5904 16.3066C22.0625 15.8161 23.0802 16.5468 25.107 18.0023C25.3173 18.1532 25.5358 18.3101 25.7645 18.4717C27.2221 19.5029 28.7798 20.715 29.8242 21.5365L32.4577 23.612C32.6865 23.792 32.8305 24.0512 32.8632 24.3419C32.8959 24.6324 32.8131 24.9162 32.6292 25.1422ZM32.604 21.6792L30.8367 20.2864C29.7779 19.4535 28.1982 18.2244 26.7099 17.1715C26.4844 17.0122 26.2693 16.8577 26.0622 16.709C23.9605 15.1998 22.4415 14.1094 19.2703 14.7383C18.2997 14.9312 15.9871 15.1567 15.4771 13.0888C15.4052 12.7968 15.4782 12.6965 15.5093 12.6537C15.6178 12.5046 16.0542 12.1416 17.7619 11.9925L21.3854 11.6727C21.9759 11.6196 22.2721 11.5929 23.1733 11.9033L25.2963 12.6352C25.5323 12.7164 25.721 12.7868 25.8876 12.8491C26.9098 13.2309 27.1807 13.2309 28.5236 12.8476L30.0888 12.4004L34.5513 20.1837C33.7615 20.5491 33.0944 21.0613 32.604 21.6792Z" fill="#629D23"></path>
                                <path d="M37.366 14.4479C37.814 14.4479 38.1773 14.0885 38.1773 13.6466C38.1773 13.2048 37.814 12.8466 37.366 12.8466C36.918 12.8466 36.5547 13.2049 36.5547 13.6466V13.6489C36.5547 14.0907 36.918 14.4479 37.366 14.4479Z" fill="#629D23"></path>
                            </svg>                      
                        </div>
                        <div class="information">
                            <h4 class="title">Everyday New Stocks</h4>
                            <p class="disc">
                                We prepared special discounts you on grocery products.
                            </p>
                        </div>
                    </div>
                  
                </div>
                <div class="col-lg-3">
                   
                    <div class="single-short-service-area-start">
                        <div class="icon-area">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.2188 18.2812C21.8306 18.2812 21.5156 18.5963 21.5156 18.9844C21.5156 19.3725 21.8306 19.6875 22.2188 19.6875C22.6069 19.6875 22.9219 19.3725 22.9219 18.9844C22.9219 18.5963 22.6069 18.2812 22.2188 18.2812Z" fill="#629D23"></path>
                                <path d="M0.174718 16.6358C0.176617 16.638 0.178304 16.6404 0.180273 16.6425L0.181047 16.6435L17.4784 35.7685C17.6073 35.9111 17.8027 36 18 36C18.1966 36 18.3916 35.912 18.5215 35.7685L35.8189 16.6435L35.8196 16.6425C35.8216 16.6404 35.8232 16.638 35.8252 16.6358C36.0506 16.3794 36.0565 16.0029 35.8519 15.7406C35.8499 15.738 35.8485 15.7352 35.8464 15.7326L30.2213 8.70138C30.0879 8.5346 29.8858 8.4375 29.6722 8.4375C26.8057 8.4375 8.66014 8.4375 6.32774 8.4375C6.11412 8.4375 5.91211 8.5346 5.77865 8.70138L0.153483 15.7326C0.151444 15.7352 0.150038 15.738 0.147999 15.7406C-0.0586557 16.0057 -0.0481085 16.3823 0.174718 16.6358ZM14.1791 9.84375H21.8207L25.1958 15.4688H10.804L14.1791 9.84375ZM10.6409 16.875H25.3589L17.9999 33.555L10.6409 16.875ZM26.896 16.875H33.7134L20.4033 31.5913L26.896 16.875ZM9.10383 16.875L15.5965 31.5913L2.28648 16.875H9.10383ZM33.8343 15.4688H26.8358L23.4607 9.84375H29.3342L33.8343 15.4688ZM6.6656 9.84375H12.5391L9.16402 15.4688H2.16547L6.6656 9.84375Z" fill="#629D23"></path>
                                <path d="M19.4062 18.2812H14.1874C13.7991 18.2812 13.4843 18.596 13.4843 18.9844C13.4843 19.3727 13.7991 19.6875 14.1874 19.6875H19.4062C19.7945 19.6875 20.1093 19.3727 20.1093 18.9844C20.1093 18.596 19.7945 18.2812 19.4062 18.2812Z" fill="#629D23"></path>
                                <path d="M17.9999 5.625C18.3882 5.625 18.703 5.31021 18.703 4.92188V0.703125C18.703 0.314789 18.3882 0 17.9999 0C17.6115 0 17.2967 0.314789 17.2967 0.703125V4.92188C17.2967 5.31021 17.6115 5.625 17.9999 5.625Z" fill="#629D23"></path>
                                <path d="M22.716 5.41905L25.5286 2.60655C25.8032 2.33198 25.8032 1.88677 25.5286 1.61212C25.254 1.33748 24.8088 1.33755 24.5342 1.61212L21.7216 4.42463C21.447 4.6992 21.447 5.14441 21.7216 5.41905C21.9961 5.69362 22.4414 5.6937 22.716 5.41905Z" fill="#629D23"></path>
                                <path d="M13.2838 5.41905C13.5584 5.69362 14.0036 5.69362 14.2783 5.41905C14.5529 5.14448 14.5529 4.69927 14.2783 4.42463L11.4657 1.61213C11.1911 1.33755 10.7459 1.33755 10.4712 1.61213C10.1966 1.8867 10.1967 2.33191 10.4712 2.60655L13.2838 5.41905Z" fill="#629D23"></path>
                            </svg>                              
                        </div>
                        <div class="information">
                            <h4 class="title">Best Quality Assurance</h4>
                            <p class="disc">
                                We prepared special discounts you on grocery products.
                            </p>
                        </div>
                    </div>
                    
                </div>
                <div class="col-lg-3">
                  
                    <div class="single-short-service-area-start">
                        <div class="icon-area">
                            <svg width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M39.7498 4.92493C39.7498 4.92057 39.7493 4.91622 39.7491 4.91179C39.7487 4.89446 39.7477 4.87735 39.7457 4.86041C39.7449 4.85419 39.7437 4.84797 39.7428 4.84175C39.7405 4.82612 39.7376 4.81073 39.734 4.79565C39.7326 4.78967 39.7311 4.78376 39.7294 4.77777C39.7249 4.76137 39.7198 4.74528 39.7139 4.72942C39.7128 4.72639 39.7121 4.72328 39.7109 4.72032L38.1314 0.671645C37.9722 0.263683 37.5866 0 37.1491 0H34.2731C33.9596 0 33.7055 0.254432 33.7055 0.568333C33.7055 0.882233 33.9596 1.13667 34.2731 1.13667H37.0941L38.3511 4.35877H26.467L25.7224 1.13667H30.1114C30.4249 1.13667 30.679 0.882233 30.679 0.568333C30.679 0.254432 30.4249 0 30.1114 0H7.14849C6.71093 0 6.32539 0.263683 6.16616 0.6718L4.58664 4.72032C4.58548 4.72336 4.58486 4.72647 4.58369 4.72942C4.57779 4.7452 4.57267 4.76129 4.56816 4.77777C4.56653 4.78376 4.56498 4.78967 4.56358 4.79565C4.56001 4.81081 4.55714 4.8262 4.55481 4.84175C4.55388 4.84797 4.55271 4.85419 4.55194 4.86041C4.55 4.87735 4.54891 4.89446 4.54844 4.91179C4.54837 4.91614 4.54782 4.9205 4.54775 4.92493C4.54775 4.92563 4.54767 4.92633 4.54767 4.92703V13.2767C4.54767 13.5906 4.80177 13.8451 5.11527 13.8451C5.42877 13.8451 5.68287 13.5906 5.68287 13.2767V5.49544H17.7144V14.1342C17.7144 14.472 17.9131 14.7798 18.2208 14.9184C18.3334 14.9692 18.4534 14.994 18.5725 14.994C18.7787 14.994 18.9827 14.9198 19.1426 14.7779L22.1488 12.1112L25.155 14.7778C25.4074 15.0019 25.7693 15.057 26.077 14.9184C26.3846 14.7798 26.5833 14.472 26.5833 14.1342V5.49544H38.6147V30.9871C38.6147 31.3949 38.2833 31.7267 37.876 31.7267H27.4686C27.4686 31.7203 27.4678 31.7138 27.4678 31.7074C27.4671 31.6564 27.4653 31.6055 27.4609 31.5549C28.4381 31.8143 29.4823 31.3115 29.8739 30.3499C30.0798 29.844 30.0768 29.2882 29.8652 28.7848C29.8453 28.7374 29.8233 28.6914 29.8002 28.646C29.7959 28.6377 29.7918 28.6293 29.7875 28.6211C29.7648 28.5779 29.7406 28.5356 29.715 28.4945C29.71 28.4865 29.7049 28.4787 29.6999 28.4708C29.6729 28.4286 29.6448 28.3872 29.6149 28.3473C29.6144 28.3465 29.6138 28.3458 29.6132 28.3451C29.5836 28.3057 29.5522 28.2678 29.5198 28.2307C29.5139 28.2239 29.5081 28.2171 29.5021 28.2103C29.4701 28.1746 29.4368 28.14 29.4023 28.1066C29.3955 28.1001 29.3887 28.0938 29.3819 28.0874C29.3458 28.0534 29.3088 28.0204 29.2703 27.9892C29.269 27.9882 29.2677 27.9872 29.2664 27.9862C29.2285 27.9557 29.1891 27.9267 29.149 27.8989C29.1418 27.8939 29.1346 27.8887 29.1272 27.8837C29.0871 27.8567 29.0459 27.8311 29.0037 27.8068C29.0002 27.8048 28.997 27.8024 28.9935 27.8004C29.2334 27.5925 29.4227 27.3295 29.546 27.0268C29.752 26.5209 29.7489 25.9651 29.5374 25.4616C29.3523 25.0211 29.0269 24.6668 28.6102 24.4469C28.5506 24.4155 28.4892 24.3868 28.4261 24.3611L19.5921 20.7544L23.7042 19.48C24.6825 19.1767 25.2334 18.1319 24.9324 17.1511C24.82 16.785 24.5973 16.4762 24.3096 16.2505C23.8814 15.9146 23.3092 15.763 22.7416 15.8823C22.7389 15.8829 22.7363 15.8834 22.7336 15.8841C22.7021 15.8912 19.5498 16.6009 16.2574 17.2437C16.1114 17.2722 15.9691 17.2997 15.8288 17.3268C15.7165 17.3484 15.6058 17.3697 15.4972 17.3904C15.466 17.3964 15.4347 17.4023 15.4037 17.4082C15.212 17.4446 15.0262 17.4796 14.8456 17.5131C14.7729 17.5267 14.7009 17.54 14.63 17.5531C10.4953 18.3158 9.3338 18.3294 9.01146 18.2858C9.01021 18.2856 9.00913 18.2855 9.00789 18.2852C9.00299 18.2845 8.99818 18.2838 8.99368 18.2831C8.99042 18.2826 8.98739 18.282 8.98436 18.2816C8.98219 18.2812 8.97986 18.2808 8.97776 18.2805C8.95765 18.2768 8.94197 18.273 8.92986 18.2694L8.83685 18.2314L8.95276 17.9468C9.06673 17.667 9.06503 17.3595 8.94803 17.0809C8.91876 17.0113 8.88312 16.9455 8.84182 16.8842C8.71791 16.7006 8.54269 16.5575 8.33307 16.4719L5.28444 15.2273C5.00503 15.1131 4.69782 15.1149 4.41965 15.232C4.1414 15.3492 3.92549 15.5679 3.81152 15.8476L0.083647 25.0021C-0.151592 25.5798 0.126425 26.2413 0.703342 26.4769L3.75205 27.7217C3.89125 27.7785 4.03527 27.8054 4.17711 27.8054C4.62298 27.8054 5.04641 27.5394 5.22489 27.1012L5.25292 27.0324L5.95584 27.3193C5.95623 27.3195 5.95662 27.3197 5.95708 27.3198C6.62941 27.5943 7.24888 27.986 7.78503 28.472C7.88254 28.5604 7.97726 28.6519 8.0691 28.7463C8.16095 28.8408 8.24976 28.9382 8.33555 29.0385C8.37841 29.0887 8.42057 29.1396 8.46179 29.1911C9.24305 30.1666 10.2672 30.9317 11.4235 31.4038L12.2143 31.7267H6.42166C6.01438 31.7267 5.68295 31.3948 5.68295 30.987V29.5489C5.68295 29.235 5.42884 28.9806 5.11535 28.9806C4.80185 28.9806 4.54775 29.235 4.54775 29.5489V30.987C4.54775 32.0216 5.38832 32.8633 6.42166 32.8633H14.9984L22.3103 35.8486C22.562 35.9513 22.8224 36.0001 23.0788 36C23.8846 36 24.6499 35.5192 24.9725 34.7271C25.1048 34.4023 25.1473 34.0627 25.1116 33.7363C25.492 33.791 25.8863 33.7408 26.2437 33.5863C26.607 33.4292 26.9081 33.1789 27.1219 32.8632H37.8761C38.9094 32.8632 39.75 32.0216 39.75 30.9869V4.9271C39.7499 4.92633 39.7498 4.92571 39.7498 4.92493ZM19.7404 1.13667H24.5572L25.3018 4.35877H18.9958L19.7404 1.13667ZM17.8307 4.35877H5.94645L7.20346 1.13667H18.5753L17.8307 4.35877ZM25.4483 13.5193L22.7183 11.0978C22.556 10.9539 22.3524 10.8819 22.149 10.8819C21.9454 10.8819 21.7417 10.9539 21.5794 11.0978L18.8496 13.5193V5.49544H25.4483V13.5193ZM4.17571 26.6671L1.13679 25.4264L4.8607 16.2819L7.89962 17.5226L4.17571 26.6671ZM26.2007 29.8309C26.2004 29.8307 26.2001 29.8307 26.1998 29.8305C26.1996 29.8304 26.1993 29.8303 26.1991 29.8302C26.1992 29.8302 26.199 29.8302 26.1991 29.8302L19.4145 27.0603C19.1243 26.9418 18.793 27.0813 18.6746 27.372C18.5562 27.6627 18.6956 27.9944 18.986 28.1129L25.7705 30.8828C25.7988 30.8944 25.8262 30.9072 25.8527 30.9213C25.8601 30.9253 25.867 30.9301 25.8743 30.9342C25.893 30.9448 25.9117 30.9554 25.9293 30.9671C25.9378 30.9728 25.9455 30.9793 25.9538 30.9852C25.9694 30.9964 25.9853 31.0074 26 31.0196C26.009 31.0269 26.017 31.035 26.0257 31.0427C26.0389 31.0544 26.0524 31.0657 26.0648 31.0782C26.0734 31.0867 26.0811 31.0961 26.0893 31.105C26.1007 31.1173 26.1125 31.1293 26.1232 31.1422C26.1313 31.1521 26.1385 31.1626 26.1462 31.1728C26.1559 31.1855 26.166 31.1981 26.1749 31.2113C26.1825 31.2223 26.1889 31.234 26.1959 31.2452C26.204 31.2583 26.2125 31.2711 26.2199 31.2846C26.2266 31.2967 26.2322 31.3094 26.2383 31.3217C26.2448 31.335 26.2519 31.3481 26.2578 31.3617C26.2635 31.3747 26.268 31.3883 26.2731 31.4016C26.2782 31.415 26.2838 31.4282 26.2883 31.4419C26.2928 31.4557 26.2962 31.4697 26.3 31.4837C26.3038 31.4974 26.3081 31.5109 26.3113 31.5249C26.3145 31.5389 26.3165 31.5532 26.319 31.5674C26.3216 31.5815 26.3246 31.5955 26.3264 31.6098C26.3283 31.6241 26.329 31.6386 26.3301 31.653C26.3313 31.6674 26.333 31.6818 26.3335 31.6963C26.3339 31.7105 26.3332 31.7249 26.3331 31.7392C26.3329 31.7539 26.3332 31.7687 26.3322 31.7836C26.3314 31.7976 26.3293 31.8117 26.3277 31.8258C26.3261 31.8409 26.3249 31.8561 26.3224 31.8712C26.3201 31.885 26.3166 31.8988 26.3138 31.9126C26.3105 31.9279 26.3078 31.9432 26.3037 31.9585C26.3001 31.9719 26.2953 31.9853 26.291 31.9987C26.2862 32.0139 26.2818 32.0291 26.2761 32.0441C26.2713 32.0545 26.2666 32.0649 26.2621 32.0754C26.2611 32.0778 26.2606 32.0803 26.2596 32.0826C26.171 32.2876 26.0073 32.4505 25.7936 32.5429C25.5584 32.6445 25.289 32.6481 25.0546 32.5523L23.8525 32.0615C23.8469 32.0593 23.8413 32.0577 23.8357 32.0556C23.83 32.0531 23.8247 32.0501 23.8189 32.0478L18.3008 29.7949C18.0104 29.6764 17.6793 29.8159 17.5609 30.1066C17.4425 30.3973 17.5819 30.729 17.8722 30.8475L23.3903 33.1004C23.3962 33.1028 23.4022 33.1045 23.4081 33.1067C23.4135 33.1091 23.4185 33.1119 23.424 33.1141C23.8871 33.3032 24.1103 33.8343 23.9215 34.298C23.7326 34.7619 23.2024 34.9855 22.7391 34.7962L15.3252 31.7693C15.3249 31.7691 15.3245 31.7689 15.3242 31.7688L11.8523 30.3513C11.2412 30.1017 10.6737 29.7554 10.1727 29.3293C9.87206 29.0737 9.59544 28.7894 9.34762 28.48C9.10346 28.1752 8.83561 27.8909 8.54742 27.6296C7.91337 27.0549 7.18087 26.5918 6.38595 26.2672C6.38602 26.2672 6.38587 26.2672 6.38595 26.2672L5.68186 25.9798L8.40853 19.2841L8.50628 19.3239C8.59828 19.3615 8.72948 19.4148 9.08257 19.4282C9.5237 19.4482 10.2535 19.4021 11.5609 19.2171C12.4502 19.0913 13.5411 18.9094 14.8146 18.6748C14.8459 18.6691 14.877 18.6633 14.9087 18.6575C14.9683 18.6465 15.0284 18.6353 15.0888 18.6241C15.1358 18.6154 15.183 18.6065 15.2306 18.5976C15.2848 18.5874 15.3392 18.5772 15.394 18.5669C15.4522 18.5559 15.511 18.5448 15.5702 18.5335C15.6175 18.5245 15.6648 18.5155 15.7127 18.5065C15.7848 18.4927 15.8581 18.4786 15.9317 18.4645C15.9696 18.4572 16.0071 18.45 16.0453 18.4427C16.1581 18.4209 16.2723 18.3989 16.3886 18.3762C19.6696 17.7373 22.8363 17.026 22.9787 16.994C22.9929 16.9911 23.0071 16.9893 23.0213 16.9872C23.3859 16.9332 23.7431 17.1444 23.8476 17.485C23.8844 17.6047 23.8886 17.7268 23.8655 17.8417C23.8146 18.0946 23.6311 18.3128 23.3688 18.394L17.7415 20.138C17.5124 20.209 17.3526 20.4164 17.3423 20.6563C17.3319 20.8961 17.4731 21.1166 17.6951 21.2073L27.9978 25.4137C28.2221 25.5052 28.3974 25.6788 28.4914 25.9025C28.5853 26.1261 28.5867 26.373 28.4952 26.5976C28.4037 26.8223 28.2304 26.9978 28.007 27.0918C27.8954 27.1388 27.7779 27.1626 27.6603 27.1633C27.6586 27.1633 27.6569 27.1631 27.6552 27.1631C27.6275 27.1631 27.6 27.162 27.5724 27.1594C27.5643 27.1586 27.5562 27.1569 27.548 27.156C27.527 27.1534 27.5059 27.151 27.4851 27.147C27.4719 27.1444 27.4588 27.1405 27.4457 27.1374C27.43 27.1337 27.4143 27.1305 27.3987 27.1259C27.3827 27.1212 27.3669 27.1149 27.3511 27.1092C27.3385 27.1047 27.3257 27.1009 27.3133 27.0959L20.5281 24.3257C20.2378 24.2071 19.9067 24.3467 19.7883 24.6374C19.6699 24.928 19.8092 25.2597 20.0996 25.3783L28.3256 28.7368C28.3817 28.7596 28.4347 28.7877 28.4842 28.8203C28.6325 28.9183 28.7488 29.0578 28.8192 29.2256C28.9014 29.4212 28.9127 29.6347 28.8529 29.8355C28.8444 29.8642 28.8344 29.8926 28.823 29.9207C28.8112 29.9497 28.7981 29.9777 28.7837 30.0048C28.7502 30.0678 28.7095 30.1247 28.664 30.1765C28.6357 30.2087 28.6055 30.2387 28.5734 30.2662C28.5682 30.2706 28.5636 30.2756 28.5584 30.2797C28.3513 30.4494 28.0743 30.5223 27.8038 30.4676C27.7489 30.4564 27.6943 30.4407 27.6406 30.4187L26.2007 29.8309Z" fill="#629D23"></path>
                            </svg>                                
                        </div>
                        <div class="information">
                            <h4 class="title">Delivery Within 30 Mins</h4>
                            <p class="disc">
                                We prepared special discounts you on grocery products.
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

  <Footer></Footer>
                 
        </header>
</div>
    );
};
export default HomeFour;