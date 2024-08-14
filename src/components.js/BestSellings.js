import React from 'react';

const BestSelling = () => {
  return (
    <div className="weekly-best-selling-area rts-section-gap bg_light-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-area-between">
              <h2 className="title-left">
                Weekly Best Selling Groceries
              </h2>
              <ul className="nav nav-tabs best-selling-grocery" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Frozen Foods
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Diet Foods
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Healthy Foods
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="vitamine-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#vitamine"
                    type="button"
                    role="tab"
                    aria-controls="vitamine"
                    aria-selected="false"
                  >
                    Vitamin Items
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
                <div className="tab-content" id="myTabContent">
                    {/* first tabs area start*/}
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="row g-4">
                            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                <div className="single-shopping-card-one">
                                    {/* image and section area start */}
                                    <div className="image-and-action-area-wrapper">
                                        <a href="shop-details.html" className="thumbnail-preview">
                                            <div className="badge">
                                                <span>25% <br /> 
                                                    Off
                                                </span>
                                                <i className="fa-solid fa-bookmark"></i>
                                            </div>
                                            <img src="images/grocery/15.jpg" alt="grocery" />
                                        </a>
                                        <div className="action-share-option">
                                            <span className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                <i className="fa-light fa-heart"></i>
                                            </span>
                                            <span className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                <i className="fa-light fa-arrows-retweet"></i>
                                            </span>
                                            <span className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                <i className="fa-regular fa-eye"></i>
                                            </span>
                                        </div>
                                    </div>
                                    {/* image and section area end */}
                                    <div className="body-content">
                                        <a href="shop-details.html">
                                            <h4 className="title">Nestle Cerelac Mixed Fruits & Wheat with Milk</h4>
                                        </a>
                                        <span className="availability">500g Pack</span>
                                        <div className="price-area">
                                            <span className="current">$36.00</span>
                                            <div className="previous">$36.00</div>
                                        </div>
                                        <div className="cart-counter-action">
                                            <div className="quantity-edit">
                                                <input type="text" className="input" value="1" />
                                                <div className="button-wrapper-action">
                                                    <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                                    <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                                                </div>
                                            </div>
                                            <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                <div className="btn-text">
                                                    Add
                                                </div>
                                                <div className="arrow-icon">
                                                    <i className="fa-solid fa-cart-shopping"></i>
                                                </div>
                                                <div className="arrow-icon">
                                                    <i className="fa-solid fa-cart-shopping"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                      
        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="single-shopping-card-one">
                {/* image and action area start */}
                <div className="image-and-action-area-wrapper">
                    <a href="shop-details.html" className="thumbnail-preview">
                        <div className="badge">
                            <span>25% <br /> Off</span>
                            <i className="fa-solid fa-bookmark"></i>
                        </div>
                        <img src="images/grocery/16.jpg" alt="grocery" />
                    </a>
                    <div className="action-share-option">
                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                            <i className="fa-light fa-heart"></i>
                        </div>
                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i className="fa-light fa-arrows-retweet"></i>
                        </div>
                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                            <i className="fa-regular fa-eye"></i>
                        </div>
                    </div>
                </div>
                {/* image and action area end */}
                <div className="body-content">
                    <a href="shop-details.html">
                        <h4 className="title">Rubio Extra Ordina Rias Spicy Paprika Flavour Crips</h4>
                    </a>
                    <span className="availability">500g Pack</span>
                    <div className="price-area">
                        <span className="current">$36.00</span>
                        <div className="previous">$36.00</div>
                    </div>
                    <div className="cart-counter-action">
                        <div className="quantity-edit">
                            <input type="text" className="input" defaultValue="1" />
                            <div className="button-wrapper-action">
                                <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                            </div>
                        </div>
                        <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                            <div className="btn-text">Add</div>
                            <div className="arrow-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                            <div className="arrow-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="single-shopping-card-one">
                {/* image and action area start */}
                <div className="image-and-action-area-wrapper">
                    <a href="shop-details.html" className="thumbnail-preview">
                        <div className="badge">
                            <span>25% <br /> Off</span>
                            <i className="fa-solid fa-bookmark"></i>
                        </div>
                        <img src="images/grocery/17.jpg" alt="grocery" />
                    </a>
                    <div className="action-share-option">
                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                            <i className="fa-light fa-heart"></i>
                        </div>
                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i className="fa-light fa-arrows-retweet"></i>
                        </div>
                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                            <i className="fa-regular fa-eye"></i>
                        </div>
                    </div>
                </div>
                {/* image and action area end */}
                <div className="body-content">
                    <a href="shop-details.html">
                    <h4 class="title">Great Pumpkin Spice Wuick Bread & Muffin Mix</h4>
                    </a>
                    <span className="availability">500g Pack</span>
                    <div className="price-area">
                        <span className="current">$36.00</span>
                        <div className="previous">$36.00</div>
                    </div>
                    <div className="cart-counter-action">
                        <div className="quantity-edit">
                            <input type="text" className="input" defaultValue="1" />
                            <div className="button-wrapper-action">
                                <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                            </div>
                        </div>
                        <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                            <div className="btn-text">Add</div>
                            <div className="arrow-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                            <div className="arrow-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="single-shopping-card-one">
                {/* image and action area start */}
                <div className="image-and-action-area-wrapper">
                    <a href="shop-details.html" className="thumbnail-preview">
                        <div className="badge">
                            <span>25% <br /> Off</span>
                            <i className="fa-solid fa-bookmark"></i>
                        </div>
                        <img src="images/grocery/18.jpg" alt="grocery" />
                    </a>
                    <div className="action-share-option">
                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                            <i className="fa-light fa-heart"></i>
                        </div>
                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i className="fa-light fa-arrows-retweet"></i>
                        </div>
                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                            <i className="fa-regular fa-eye"></i>
                        </div>
                    </div>
                </div>
                {/* image and action area end */}
                <div className="body-content">
                    <a href="shop-details.html">
                    <h4 class="title">Smartfood Popcorn, White Good Cheddar, Party Size!</h4>
                    </a>
                    <span className="availability">500g Pack</span>
                    <div className="price-area">
                        <span className="current">$36.00</span>
                        <div className="previous">$36.00</div>
                    </div>
                    <div className="cart-counter-action">
                        <div className="quantity-edit">
                            <input type="text" className="input" defaultValue="1" />
                            <div className="button-wrapper-action">
                                <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                            </div>
                        </div>
                        <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                            <div className="btn-text">Add</div>
                            <div className="arrow-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                            <div className="arrow-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="single-shopping-card-one">
                {/* image and action area start */}
                <div className="image-and-action-area-wrapper">
                    <a href="shop-details.html" className="thumbnail-preview">
                        <div className="badge">
                            <span>25% <br /> Off</span>
                            <i className="fa-solid fa-bookmark"></i>
                        </div>
                        <img src="images/grocery/19.jpg" alt="grocery" />
                    </a>
                    <div className="action-share-option">
                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                            <i className="fa-light fa-heart"></i>
                        </div>
                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i className="fa-light fa-arrows-retweet"></i>
                        </div>
                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                            <i className="fa-regular fa-eye"></i>
                        </div>
                    </div>
                </div>
                {/* image and action area end */}
                <div className="body-content">
                    <a href="shop-details.html">
                    <h4 class="title">Nestle Cerelac Mixed Fruits &
                    Wheat with Milk</h4> </a>
                    <span className="availability">500g Pack</span>
                    <div className="price-area">
                        <span className="current">$36.00</span>
                        <div className="previous">$36.00</div>
                    </div>
                    <div className="cart-counter-action">
                        <div className="quantity-edit">
                            <input type="text" className="input" defaultValue="1" />
                            <div className="button-wrapper-action">
                                <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                            </div>
                        </div>
                        <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                            <div className="btn-text">Add</div>
                            <div className="arrow-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                            <div className="arrow-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="single-shopping-card-one">
                {/* image and action area start */}
                <div className="image-and-action-area-wrapper">
                    <a href="shop-details.html" className="thumbnail-preview">
                        <div className="badge">
                            <span>25% <br /> Off</span>
                            <i className="fa-solid fa-bookmark"></i>
                        </div>
                        <img src="images/grocery/20.jpg" alt="grocery" />
                    </a>
                    <div className="action-share-option">
                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                            <i className="fa-light fa-heart"></i>
                        </div>
                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i className="fa-light fa-arrows-retweet"></i>
                        </div>
                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                            <i className="fa-regular fa-eye"></i>
                        </div>
                    </div>
                </div>
                {/* image and action area end */}
                <div className="body-content">
                    <a href="shop-details.html">
                    <h4 class="title">Peysan Full Fat Fresh Cottage Cheese</h4>
                    </a>
                    <span className="availability">500g Pack</span>
                    <div className="price-area">
                        <span className="current">$36.00</span>
                        <div className="previous">$36.00</div>
                    </div>
                    <div className="cart-counter-action">
                        <div className="quantity-edit">
                            <input type="text" className="input" defaultValue="1" />
                            <div className="button-wrapper-action">
                                <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                            </div>
                        </div>
                        <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                            <div className="btn-text">Add</div>
                            <div className="arrow-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                            <div className="arrow-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>



        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="single-shopping-card-one">
                {/* image and action area start */}
                <div className="image-and-action-area-wrapper">
                    <a href="shop-details.html" className="thumbnail-preview">
                        <div className="badge">
                            <span>25% <br /> Off</span>
                            <i className="fa-solid fa-bookmark"></i>
                        </div>
                        <img src="images/grocery/21.jpg" alt="grocery" />
                    </a>
                    <div className="action-share-option">
                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                            <i className="fa-light fa-heart"></i>
                        </div>
                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i className="fa-light fa-arrows-retweet"></i>
                        </div>
                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                            <i className="fa-regular fa-eye"></i>
                        </div>
                    </div>
                </div>
                {/* image and action area end */}
                <div className="body-content">
                    <a href="shop-details.html">
                    <h4 class="title">Foster Farms Breast Nuggets Shaped Chicken</h4>
                    </a>
                    <span className="availability">500g Pack</span>
                    <div className="price-area">
                        <span className="current">$36.00</span>
                        <div className="previous">$36.00</div>
                    </div>
                    <div className="cart-counter-action">
                        <div className="quantity-edit">
                            <input type="text" className="input" defaultValue="1" />
                            <div className="button-wrapper-action">
                                <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                            </div>
                        </div>
                        <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                            <div className="btn-text">Add</div>
                            <div className="arrow-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                            <div className="arrow-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>



        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="single-shopping-card-one">
                {/* image and action area start */}
                <div className="image-and-action-area-wrapper">
                    <a href="shop-details.html" className="thumbnail-preview">
                        <div className="badge">
                            <span>25% <br /> Off</span>
                            <i className="fa-solid fa-bookmark"></i>
                        </div>
                        <img src="images/grocery/22.jpg" alt="grocery" />
                    </a>
                    <div className="action-share-option">
                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                            <i className="fa-light fa-heart"></i>
                        </div>
                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i className="fa-light fa-arrows-retweet"></i>
                        </div>
                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                            <i className="fa-regular fa-eye"></i>
                        </div>
                    </div>
                </div>
                {/* image and action area end */}
                <div className="body-content">
                    <a href="shop-details.html">
                    <h4 class="title">Nestle Cerelac Mixed Fruits &
                    Wheat with Milk</h4>                    </a>
                    <span className="availability">500g Pack</span>
                    <div className="price-area">
                        <span className="current">$36.00</span>
                        <div className="previous">$36.00</div>
                    </div>
                    <div className="cart-counter-action">
                        <div className="quantity-edit">
                            <input type="text" className="input" defaultValue="1" />
                            <div className="button-wrapper-action">
                                <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                            </div>
                        </div>
                        <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                            <div className="btn-text">Add</div>
                            <div className="arrow-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                            <div className="arrow-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>



        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="single-shopping-card-one">
                {/* image and action area start */}
                <div className="image-and-action-area-wrapper">
                    <a href="shop-details.html" className="thumbnail-preview">
                        <div className="badge">
                            <span>25% <br /> Off</span>
                            <i className="fa-solid fa-bookmark"></i>
                        </div>
                        <img src="images/grocery/23.jpg" alt="grocery" />
                    </a>
                    <div className="action-share-option">
                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                            <i className="fa-light fa-heart"></i>
                        </div>
                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i className="fa-light fa-arrows-retweet"></i>
                        </div>
                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                            <i className="fa-regular fa-eye"></i>
                        </div>
                    </div>
                </div>
                {/* image and action area end */}
                <div className="body-content">
                    <a href="shop-details.html">
                    <h4 class="title">7 Varieties Pepperidge Farm Chocolate Collection</h4>
                    </a>
                    <span className="availability">500g Pack</span>
                    <div className="price-area">
                        <span className="current">$36.00</span>
                        <div className="previous">$36.00</div>
                    </div>
                    <div className="cart-counter-action">
                        <div className="quantity-edit">
                            <input type="text" className="input" defaultValue="1" />
                            <div className="button-wrapper-action">
                                <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                            </div>
                        </div>
                        <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                            <div className="btn-text">Add</div>
                            <div className="arrow-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                            <div className="arrow-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>


        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="single-shopping-card-one">
                {/* image and action area start */}
                <div className="image-and-action-area-wrapper">
                    <a href="shop-details.html" className="thumbnail-preview">
                        <div className="badge">
                            <span>25% <br /> Off</span>
                            <i className="fa-solid fa-bookmark"></i>
                        </div>
                        <img src="images/grocery/24.jpg" alt="grocery" />
                    </a>
                    <div className="action-share-option">
                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                            <i className="fa-light fa-heart"></i>
                        </div>
                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i className="fa-light fa-arrows-retweet"></i>
                        </div>
                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                            <i className="fa-regular fa-eye"></i>
                        </div>
                    </div>
                </div>
                {/* image and action area end */}
                <div className="body-content">
                    <a href="shop-details.html">
                    <h4 class="title">Srorck Werther Original Popcorn, Classic Caramel</h4>
                    </a>
                    <span className="availability">500g Pack</span>
                    <div className="price-area">
                        <span className="current">$36.00</span>
                        <div className="previous">$36.00</div>
                    </div>
                    <div className="cart-counter-action">
                        <div className="quantity-edit">
                            <input type="text" className="input" defaultValue="1" />
                            <div className="button-wrapper-action">
                                <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                            </div>
                        </div>
                        <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                            <div className="btn-text">Add</div>
                            <div className="arrow-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                            <div className="arrow-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>


        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="single-shopping-card-one">
                {/* image and action area start */}
                <div className="image-and-action-area-wrapper">
                    <a href="shop-details.html" className="thumbnail-preview">
                        <div className="badge">
                            <span>25% <br /> Off</span>
                            <i className="fa-solid fa-bookmark"></i>
                        </div>
                        <img src="images/grocery/25.jpg" alt="grocery" />
                    </a>
                    <div className="action-share-option">
                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                            <i className="fa-light fa-heart"></i>
                        </div>
                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i className="fa-light fa-arrows-retweet"></i>
                        </div>
                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                            <i className="fa-regular fa-eye"></i>
                        </div>
                    </div>
                </div>
                {/* image and action area end */}
                <div className="body-content">
                    <a href="shop-details.html">
                    <h4 class="title">Cheez-It Cheese Crackers, Baked Snack Crackers, Lunch ...</h4>
                    </a>
                    <span className="availability">500g Pack</span>
                    <div className="price-area">
                        <span className="current">$36.00</span>
                        <div className="previous">$36.00</div>
                    </div>
                    <div className="cart-counter-action">
                        <div className="quantity-edit">
                            <input type="text" className="input" defaultValue="1" />
                            <div className="button-wrapper-action">
                                <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                            </div>
                        </div>
                        <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                            <div className="btn-text">Add</div>
                            <div className="arrow-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                            <div className="arrow-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>


        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="single-shopping-card-one">
                {/* image and action area start */}
                <div className="image-and-action-area-wrapper">
                    <a href="shop-details.html" className="thumbnail-preview">
                        <div className="badge">
                            <span>25% <br /> Off</span>
                            <i className="fa-solid fa-bookmark"></i>
                        </div>
                        <img src="images/grocery/26.jpg" alt="grocery" />
                    </a>
                    <div className="action-share-option">
                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                            <i className="fa-light fa-heart"></i>
                        </div>
                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i className="fa-light fa-arrows-retweet"></i>
                        </div>
                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                            <i className="fa-regular fa-eye"></i>
                        </div>
                    </div>
                </div>
                {/* image and action area end */}
                <div className="body-content">
                    <a href="shop-details.html">
                    <h4 class="title">Kellogg's Town House Oven Baked Crackers, Party Snacks,</h4>
                    </a>
                    <span className="availability">500g Pack</span>
                    <div className="price-area">
                        <span className="current">$36.00</span>
                        <div className="previous">$36.00</div>
                    </div>
                    <div className="cart-counter-action">
                        <div className="quantity-edit">
                            <input type="text" className="input" defaultValue="1" />
                            <div className="button-wrapper-action">
                                <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                            </div>
                        </div>
                        <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                            <div className="btn-text">Add</div>
                            <div className="arrow-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                            <div className="arrow-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>



      
      
      
      

          </div>
                    </div>
                    {/* first tabs area end*/}
                    
                    
                </div>
                
               
            </div>
            
        </div>
        </div>
        </div>
        </div>
        

);

};
export default BestSelling;
        