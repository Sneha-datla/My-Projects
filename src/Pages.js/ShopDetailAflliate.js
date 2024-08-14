import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // Import Navigation module
import 'swiper/css';
import 'swiper/css/navigation';
const ShopDetailAffliate=()=>

{
    const [activeTab, setActiveTab] = useState('home');

    const handleTabClick = (tabId) => {
      setActiveTab(tabId);
    };
    const [activeImage, setActiveImage] = useState('01');

    const handleImageClick = (image) => {
      setActiveImage(image);
    };
    return(
        <div>
            <div className="rts-navigation-area-breadcrumb bg_light-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="navigator-breadcrumb-wrapper">
              <a href="index-2.html">Home</a>
              <i className="fa-light fa-chevron-right" />
              <a className="#" href="index-2.html">
                Beverage
              </a>
              <i className="fa-light fa-chevron-right" />
              <a className="current" href="index-2.html">
                2L Mum Water
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section-seperator bg_light-1">
      <div className="container">
        <hr className="section-seperator" />
      </div>
    </div>
    <div className="rts-chop-details-area rts-section-gap bg_light-1">
      <div className="container">
        <div className="shopdetails-style-1-wrapper">
          <div className="row g-5">
            <div className="col-xl-8 col-lg-8 col-md-12">
              <div className="product-details-popup-wrapper in-shopdetails">
                <div className="rts-product-details-section rts-product-details-section2 product-details-popup-section">
                  <div className="product-details-popup">
                    <div className="details-product-area">
                      <div className="product-thumb-area">
                        <div className="cursor" />
                        <div className="thumb-wrapper one filterd-items figure">
                        <div
                            className="product-thumb zoom"
                            onmousemove="zoom(event)"
                            style={{
                                backgroundImage: `url(images/shop/${activeImage}.jpg)`
                                
                            }}
                          >
                            <img
                            src={`images/shop/${activeImage}.jpg`}
                            alt="product-thumb"

                            />
                          </div>
                        </div>
                       
                        
                        <div className="product-thumb-filter-group">
                        <div
                            className={`thumb-filter filter-btn  ${activeImage === 'one' ? 'active' : ''}`}
                            onClick={() => handleImageClick('01')}
                          >
                            <img
                              src="images/shop/01.jpg"
                              alt="product-thumb-filter"
                            />
                          </div>
                          <div
                            className={`thumb-filter filter-btn  ${activeImage === 'two' ? 'active' : ''}`}
                            onClick={() => handleImageClick('02')}
                          >
                            <img
                              src="images/shop/02.jpg"
                              alt="product-thumb-filter active"
                            />
                          </div>

                          <div
                           
                           className={`thumb-filter filter-btn ${activeImage === 'three' ? 'active' : ''}`}
                           onClick={() => handleImageClick('03')}
                         >
                           <img
                             src="images/shop/03.jpg"
                             alt="product-thumb-filter"
                           />
                         </div>
                         <div
                            className={`thumb-filter filter-btn ${activeImage === 'four' ? 'active' : ''}`}
                            onClick={() => handleImageClick('04')}
                          >
                            <img
                              src="images/shop/04.jpg"
                              alt="product-thumb-filter"
                            />
                          </div>

                          <div
                            className={`thumb-filter filter-btn ${activeImage === 'five' ? 'active' : ''}`}
                            onClick={() => handleImageClick('05')}
                          >
                            <img
                              src="images/shop/05.jpg"
                              alt="product-thumb-filter"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="contents">
                        <div className="product-status">
                          <span className="product-catagory">Dress</span>
                          <div className="rating-stars-group">
                            <div className="rating-star">
                              <i className="fas fa-star" />
                            </div>
                            <div className="rating-star">
                              <i className="fas fa-star" />
                            </div>
                            <div className="rating-star">
                              <i className="fas fa-star-half-alt" />
                            </div>
                            <span>10 Reviews</span>
                          </div>
                        </div>
                        <h2 className="product-title">
                          Kitchen Fade Defy PLUG Air Freshener
                        </h2>
                        <p className="mt--20 mb--20">
                          Priyoshop has brought to you the Hijab 3 Pieces Combo
                          Pack PS23. It is a completely modern design and you
                          feel comfortable to put on this hijab. Buy it at the
                          best price.
                        </p>
                        <span
                          className="product-price mb--15 d-block"
                          style={{ color: "#DC2626", fontWeight: 600 }}
                        >
                          {" "}
                          $36.25<span className="old-price ml--15">$69.35</span>
                        </span>
                        <div className="product-bottom-action">
                          <a
                            href="#"
                            className="rts-btn btn-primary radious-sm with-icon"
                          >
                            <div className="btn-text">Buy On Amazon</div>
                            <div className="arrow-icon">
                              <i className="fa-light fa-cart-shopping" />
                            </div>
                            <div className="arrow-icon">
                              <i className="fa-light fa-cart-shopping" />
                            </div>
                          </a>
                          {/* <a href="javascript:void(0);" class="rts-btn btn-primary ml--20"><i class="fa-light fa-heart"></i></a> */}
                        </div>
                        <div className="product-uniques">
                          <span className="sku product-unipue mb--10">
                            <span style={{ fontWeight: 400, marginRight: 10 }}>
                              SKU:{" "}
                            </span>{" "}
                            BO1D0MX8SJ
                          </span>
                          <span className="catagorys product-unipue mb--10">
                            <span style={{ fontWeight: 400, marginRight: 10 }}>
                              Categories:{" "}
                            </span>{" "}
                            T-Shirts, Tops, Mens
                          </span>
                          <span className="tags product-unipue mb--10">
                            <span style={{ fontWeight: 400, marginRight: 10 }}>
                              Tags:{" "}
                            </span>{" "}
                            fashion, t-shirts, Men
                          </span>
                          <span className="tags product-unipue mb--10">
                            <span style={{ fontWeight: 400, marginRight: 10 }}>
                              LIFE::{" "}
                            </span>{" "}
                            6 Months
                          </span>
                          <span className="tags product-unipue mb--10">
                            <span style={{ fontWeight: 400, marginRight: 10 }}>
                              Type:{" "}
                            </span>{" "}
                            original
                          </span>
                          <span className="tags product-unipue mb--10">
                            <span style={{ fontWeight: 400, marginRight: 10 }}>
                              Category:{" "}
                            </span>{" "}
                            Beverages, Dairy &amp; Bakery
                          </span>
                        </div>
                        <div className="share-option-shop-details">
                          <div className="single-share-option">
                            <div className="icon">
                              <i className="fa-regular fa-heart" />
                            </div>
                            <span>Add To Wishlist</span>
                          </div>
                          <div className="single-share-option">
                            <div className="icon">
                              <i className="fa-solid fa-share" />
                            </div>
                            <span>Share On social</span>
                          </div>
                          <div className="single-share-option">
                            <div className="icon">
                              <i className="fa-light fa-code-compare" />
                            </div>
                            <span>Compare</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-discription-tab-shop mt--50">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                  <button className={`nav-link ${activeTab === 'home' ? 'active' : ''}`} id="home-tab"   onClick={() => handleTabClick('home')} data-bs-toggle="tab"   data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected={activeTab === 'home'} >

                      Product Details
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                  <button className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
                    id="profile-tab"
                    onClick={() => handleTabClick('profile')}
                    data-bs-toggle="tab"
                    data-bs-target="#profile-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="profile-tab-pane"
                    aria-selected={activeTab === 'profile'}
                    >
                      Additional Information
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                  <button
            className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`}
            id="reviews-tab"
            onClick={() => handleTabClick('reviews')}
            role="tab"
            aria-controls="reviews-tab-pane"
            aria-selected={activeTab === 'reviews'}
          >
                      Customer Reviews (01)
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                {activeTab === 'home' && (
                  <div
                    className="tab-pane fade   show active"
                    id="home-tab-pane"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                    tabIndex={0}
                  >
                    <div className="single-tab-content-shop-details">
                      <p className="disc">
                        Uninhibited carnally hired played in whimpered dear
                        gorilla koala depending and much yikes off far quetzal
                        goodness and from for grimaced goodness unaccountably
                        and meadowlark near unblushingly crucial scallop tightly
                        neurotic hungrily some and dear furiously this apart.
                      </p>
                      <div className="details-row-2">
                        <div className="left-area">
                          <img src="images/shop/06.jpg" alt="shop" />
                        </div>
                        <div className="right">
                          <h4 className="title">
                            All Natural Italian-Style Chicken Meatballs
                          </h4>
                          <p className="mb--25">
                            Pellentesque habitant morbi tristique senectus et
                            netus et malesuada fames ac turpis egestas
                            Vestibulum tortor quam, feugiat vitae, ultricies
                            eget, tempor sit amet, ante. ibero sit amet quam
                            egestas semperAenean ultricies mi vitae est Mauris
                            placerat eleifend.
                          </p>
                          <ul className="bottom-ul">
                            <li>
                              Elementum sociis rhoncus aptent auctor urna justo
                            </li>
                            <li>
                              Habitasse venenatis gravida nisl, sollicitudin
                              posuere
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 'profile' && (
                  <div
                    className="tab-pane fade show active"
                    id="profile-tab-pane"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                    tabIndex={0}
                  >
                    <div className="single-tab-content-shop-details">
                      <p className="disc">
                        Uninhibited carnally hired played in whimpered dear
                        gorilla koala depending and much yikes off far quetzal
                        goodness and from for grimaced goodness unaccountably
                        and meadowlark near unblushingly crucial scallop tightly
                        neurotic hungrily some and dear furiously this apart.
                      </p>
                      <div className="table-responsive table-shop-details-pd">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Kitchen Fade Defy</th>
                              <th>5KG</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>PRAN Full Cream Milk Powder</td>
                              <td>3KG</td>
                            </tr>
                            <tr>
                              <td>Net weight</td>
                              <td>8KG</td>
                            </tr>
                            <tr>
                              <td>Brand</td>
                              <td>Reactheme</td>
                            </tr>
                            <tr>
                              <td>Item code</td>
                              <td>4000000005</td>
                            </tr>
                            <tr>
                              <td>Product type</td>
                              <td>Powder milk</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="cansellation mt--20">
                        <span> Return/cancellation:</span> No change will be
                        applicable which are already delivered to customer. If
                        product quality or quantity problem found then customer
                        can return/cancel their order on delivery time with
                        presence of delivery person.
                      </p>
                      <p className="note">
                        <span>Note:</span> Product delivery duration may vary
                        due to product availability in stock.
                      </p>
                    </div>
                  </div>
                )}
                                {activeTab === 'reviews' && (

                  <div
                    className="tab-pane fade show active"
                    id="profile-tab-panes"
                    role="tabpanel"
                    aria-labelledby="profile-tabt"
                    tabIndex={0}
                  >
                    <div className="single-tab-content-shop-details">
                      <div className="product-details-review-product-style">
                        <div className="average-stars-area-left">
                          <div className="top-stars-wrapper">
                            <h4 className="review">5.0</h4>
                            <div className="rating-disc">
                              <span>Average Rating</span>
                              <div className="stars">
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <span>(1 Reviews &amp; 0 Ratings)</span>
                              </div>
                            </div>
                          </div>
                          <div className="average-stars-area">
                            <h4 className="average">66.7%</h4>
                            <span>Recommended (2 of 3)</span>
                          </div>
                          <div className="review-charts-details">
                            <div className="single-review">
                              <div className="stars">
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                              </div>
                              <div className="single-progress-area-incard">
                                <div className="progress">
                                  <div
                                    className="progress-bar wow fadeInLeft"
                                    role="progressbar"
                                    style={{ width: "80%" }}
                                    aria-valuenow={25}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </div>
                              <span className="pac">100%</span>
                            </div>
                            <div className="single-review">
                              <div className="stars">
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-regular fa-star" />
                              </div>
                              <div className="single-progress-area-incard">
                                <div className="progress">
                                  <div
                                    className="progress-bar wow fadeInLeft"
                                    role="progressbar"
                                    style={{ width: "80%" }}
                                    aria-valuenow={25}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </div>
                              <span className="pac">80%</span>
                            </div>
                            <div className="single-review">
                              <div className="stars">
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-regular fa-star" />
                                <i className="fa-regular fa-star" />
                              </div>
                              <div className="single-progress-area-incard">
                                <div className="progress">
                                  <div
                                    className="progress-bar wow fadeInLeft"
                                    role="progressbar"
                                    style={{ width: "60%" }}
                                    aria-valuenow={25}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </div>
                              <span className="pac">60%</span>
                            </div>
                            <div className="single-review">
                              <div className="stars">
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-regular fa-star" />
                                <i className="fa-regular fa-star" />
                                <i className="fa-regular fa-star" />
                              </div>
                              <div className="single-progress-area-incard">
                                <div className="progress">
                                  <div
                                    className="progress-bar wow fadeInLeft"
                                    role="progressbar"
                                    style={{ width: "80%" }}
                                    aria-valuenow={25}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </div>
                              <span className="pac">40%</span>
                            </div>
                            <div className="single-review">
                              <div className="stars">
                                <i className="fa-solid fa-star" />
                                <i className="fa-regular fa-star" />
                                <i className="fa-regular fa-star" />
                                <i className="fa-regular fa-star" />
                                <i className="fa-regular fa-star" />
                              </div>
                              <div className="single-progress-area-incard">
                                <div className="progress">
                                  <div
                                    className="progress-bar wow fadeInLeft"
                                    role="progressbar"
                                    style={{ width: "80%" }}
                                    aria-valuenow={25}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </div>
                              <span className="pac">30%</span>
                            </div>
                          </div>
                        </div>
                        <div className="submit-review-area">
                          <form action="#" className="submit-review-area">
                            <h5 className="title">Submit Your Review</h5>
                            <div className="your-rating">
                              <span>Your Rating Of This Product :</span>
                              <div className="stars">
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                              </div>
                            </div>
                            <div className="half-input-wrapper">
                              <div className="half-input">
                                <input type="text" placeholder="Your Name*" />
                              </div>
                              <div className="half-input">
                                <input type="text" placeholder="Your Email *" />
                              </div>
                            </div>
                            <textarea
                              name="#"
                              id="#"
                              placeholder="Write Your Review"
                              required=""
                              defaultValue={""}
                            />
                            <button className="rts-btn btn-primary">
                              SUBMIT REVIEW
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                                )}
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-12 offset-xl-1  rts-sticky-column-item">
              <div className="theiaStickySidebar">
                <div className="shop-sight-sticky-sidevbar  mb--20">
                  <h6 className="title">Available offers</h6>
                  <div className="single-offer-area">
                    <div className="icon">
                      <img src="images/shop/01.svg" alt="icon" />
                    </div>
                    <div className="details">
                      <p>
                        Get %5 instant discount for the 1st Flipkart Order using
                        Ekomart UPI T&amp;C
                      </p>
                    </div>
                  </div>
                  <div className="single-offer-area">
                    <div className="icon">
                      <img src="images/shop/02.svg" alt="icon" />
                    </div>
                    <div className="details">
                      <p>
                        Flat $250 off on Citi-branded Credit Card EMI
                        Transactions on orders of $30 and above T&amp;C
                      </p>
                    </div>
                  </div>
                  <div className="single-offer-area">
                    <div className="icon">
                      <img src="images/shop/03.svg" alt="icon" />
                    </div>
                    <div className="details">
                      <p>Free Worldwide Shipping on all orders over $100</p>
                    </div>
                  </div>
                </div>
                <div className="our-payment-method">
                  <h5 className="title">Guaranteed Safe Checkout</h5>
                  <img src="images/shop/03.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="rts-grocery-feature-area rts-section-gap bg_light-1">
  <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-area-between">
              <h2 className="title-left">Related Products</h2>
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
                slidesPerView={3}
                loop={true}
                speed={700}
                navigation={{
                  nextEl: '.swiper-button-nexts',
                  prevEl: '.swiper-button-prevs',
                }}
                breakpoints={{
                    0: { slidesPerView: 1, spaceBetween: 12 },     // For small screens
                    480: { slidesPerView: 2, spaceBetween: 12 },   // For medium screens
                    840: { slidesPerView: 3, spaceBetween: 16 },   // For larger screens
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
        </div>
    );
};
export default ShopDetailAffliate;