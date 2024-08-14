import React, { useState } from 'react';
const ShopGridTop=()=>{

    const [activeTab, setActiveTab] = useState('home-tab');

   
    
    const handleTabClick = (tabId) => {
      setActiveTab(tabId);
    };
    return(
        <div>
 <div class="rts-navigation-area-breadcrumb">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="navigator-breadcrumb-wrapper">
                        <a href="index-2.html">Home</a>
                        <i class="fa-light fa-chevron-right"></i>
                        <a class="current" href="index-2.html">Shop Grid Sidebar</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="shop-grid-sidebar-area rts-section-gap">
        <div class="container">
            <div class="row g-0">
                <div class="col-xl-12 col-lg-12">
                    <div class="filter-select-area">
                        <div class="top-filter">
                            <span>Showing 1–20 of 57 results</span>
                            <div class="right-end">
                                <span>Sort: Short By Latest</span>
                                <div class="button-tab-area">
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                        <button   className={`nav-link single-button ${activeTab === 'home-tab' ? 'active' : ''}`}  id="home-tab"  onClick={() => handleTabClick('home-tab')} type="button" role="tab" aria-controls="home-tab-pane" aria-selected={activeTab === 'home-tab'} >
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.5" y="0.5" width="6" height="6" rx="1.5" stroke="#2C3B28"/>
                                                <rect x="0.5" y="9.5" width="6" height="6" rx="1.5" stroke="#2C3B28"/>
                                                <rect x="9.5" y="0.5" width="6" height="6" rx="1.5" stroke="#2C3B28"/>
                                                <rect x="9.5" y="9.5" width="6" height="6" rx="1.5" stroke="#2C3B28"/>
                                                </svg>  
                                          </button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                        <button className={`nav-link single-button ${activeTab === 'profile-tab' ? 'active' : ''}`} id="profile-tab" onClick={() => handleTabClick('profile-tab')}  type="button" role="tab" aria-controls="profile-tab-pane" aria-selected={activeTab === 'profile-tab'}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.5" y="0.5" width="6" height="6" rx="1.5" stroke="#2C3C28"/>
                                                <rect x="0.5" y="9.5" width="6" height="6" rx="1.5" stroke="#2C3C28"/>
                                                <rect x="9" y="3" width="7" height="1" fill="#2C3C28"/>
                                                <rect x="9" y="12" width="7" height="1" fill="#2C3C28"/>
                                                </svg>
                                          </button>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div class="nice-select-area-wrapper-and-button">
                            <div class="nice-select-wrapper-1">
                                <div class="single-select">
                                    <select>
                                        <option data-display="All Categories">All Categories</option>
                                        <option value="1">Some option</option>
                                        <option value="2">Another option</option>
                                        <option value="3" disabled>A disabled option</option>
                                        <option value="4">Potato</option>
                                      </select> 
                                </div>
                                <div class="single-select">
                                    <select>
                                        <option data-display="All Brands">All Brands</option>
                                        <option value="1">Some option</option>
                                        <option value="2">Another option</option>
                                        <option value="3" disabled>A disabled option</option>
                                        <option value="4">Potato</option>
                                      </select> 
                                </div>
                                <div class="single-select">
                                    <select>
                                        <option data-display="All Size">All Size </option>
                                        <option value="1">Some option</option>
                                        <option value="2">Another option</option>
                                        <option value="3" disabled>A disabled option</option>
                                        <option value="4">Potato</option>
                                      </select> 
                                </div>
                                <div class="single-select">
                                    <select>
                                        <option data-display="All Weight">All Weight</option>
                                        <option value="1">Some option</option>
                                        <option value="2">Another option</option>
                                        <option value="3" disabled>A disabled option</option>
                                        <option value="4">Potato</option>
                                      </select> 
                                </div>
                            </div>
                            <div class="button-area">
                                <button class="rts-btn">Filter</button>
                                <button class="rts-btn">Reset Filter</button>
                            </div>
                        </div>
                    </div>

                    <div class="tab-content" id="myTabContent">
                    {activeTab === 'home-tab' && (

                    <div className= "product-area-wrapper-shopgrid-list mt--20 tab-pane fade show active" id="home-tab-pane"  role="tabpanel" aria-labelledby="home-tab" tabindex="0">                                     
                         <div class="row g-4">
                                <div class="col-lg-20 col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div class="single-shopping-card-one">
                                        <div class="image-and-action-area-wrapper">
                                            <a href="shop-details.html" class="thumbnail-preview">
                                                <div class="badge">
                                                    <span>25% <br/> 
                                                        Off
                                                    </span>
                                                    <i class="fa-solid fa-bookmark"></i>
                                                </div>
                                                <img src="images/grocery/01.jpg" alt="grocery"/>
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
                                                <h4 class="title">Nestle Cerelac Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span class="availability">500g Pack</span>
                                            <div class="price-area">
                                                <span class="current">$36.00</span>
                                                <div class="previous">$36.00</div>
                                            </div>
                                            <div class="cart-counter-action">
                                                <div class="quantity-edit">
                                                    <input type="text" class="input" value="1"/>
                                                    <div class="button-wrapper-action">
                                                        <button class="button"><i class="fa-light fa-chevron-down"></i></button>
                                                        <button class="button plus">+<i class="fa-light fa-chevron-up"></i></button>
                                                    </div>
                                                </div>
                                                <a href="#" class="rts-btn btn-primary radious-sm with-icon">
                                                    <div class="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div class="arrow-icon">
                                                        <i class="fa-light fa-cart-shopping"></i>
                                                    </div>
                                                    <div class="arrow-icon">
                                                        <i class="fa-light fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-20 col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div class="single-shopping-card-one">
                                        <div class="image-and-action-area-wrapper">
                                            <a href="shop-details.html" class="thumbnail-preview">
                                                <div class="badge">
                                                    <span>25% <br/> 
                                                        Off
                                                    </span>
                                                    <i class="fa-solid fa-bookmark"></i>
                                                </div>
                                                <img src="images/grocery/02.jpg" alt="grocery"/>
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
                                                <h4 class="title">Most Cerelac Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span class="availability">500g Pack</span>
                                            <div class="price-area">
                                                <span class="current">$36.00</span>
                                                <div class="previous">$36.00</div>
                                            </div>
                                            <div class="cart-counter-action">
                                                <div class="quantity-edit">
                                                    <input type="text" class="input" value="1"/>
                                                    <div class="button-wrapper-action">
                                                        <button class="button"><i class="fa-light fa-chevron-down"></i></button>
                                                        <button class="button plus">+<i class="fa-light fa-chevron-up"></i></button>
                                                    </div>
                                                </div>
                                                <a href="#" class="rts-btn btn-primary radious-sm with-icon">
                                                    <div class="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div class="arrow-icon">
                                                        <i class="fa-light fa-cart-shopping"></i>
                                                    </div>
                                                    <div class="arrow-icon">
                                                        <i class="fa-light fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-20 col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div class="single-shopping-card-one">
                                        <div class="image-and-action-area-wrapper">
                                            <a href="shop-details.html" class="thumbnail-preview">
                                                <div class="badge">
                                                    <span>25% <br/> 
                                                        Off
                                                    </span>
                                                    <i class="fa-solid fa-bookmark"></i>
                                                </div>
                                                <img src="images/grocery/03.jpg" alt="grocery"/>
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
                                                <h4 class="title">Coco Cerelac Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span class="availability">500g Pack</span>
                                            <div class="price-area">
                                                <span class="current">$36.00</span>
                                                <div class="previous">$36.00</div>
                                            </div>
                                            <div class="cart-counter-action">
                                                <div class="quantity-edit">
                                                    <input type="text" class="input" value="1"/>
                                                    <div class="button-wrapper-action">
                                                        <button class="button"><i class="fa-light fa-chevron-down"></i></button>
                                                        <button class="button plus">+<i class="fa-light fa-chevron-up"></i></button>
                                                    </div>
                                                </div>
                                                <a href="#" class="rts-btn btn-primary radious-sm with-icon">
                                                    <div class="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div class="arrow-icon">
                                                        <i class="fa-light fa-cart-shopping"></i>
                                                    </div>
                                                    <div class="arrow-icon">
                                                        <i class="fa-light fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-20 col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div class="single-shopping-card-one">
                                        <div class="image-and-action-area-wrapper">
                                            <a href="shop-details.html" class="thumbnail-preview">
                                                <div class="badge">
                                                    <span>25% <br/> 
                                                        Off
                                                    </span>
                                                    <i class="fa-solid fa-bookmark"></i>
                                                </div>
                                                <img src="images/grocery/04.jpg" alt="grocery"/>
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
                                                <h4 class="title">Marbels Cerelac Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span class="availability">500g Pack</span>
                                            <div class="price-area">
                                                <span class="current">$36.00</span>
                                                <div class="previous">$36.00</div>
                                            </div>
                                            <div class="cart-counter-action">
                                                <div class="quantity-edit">
                                                    <input type="text" class="input" value="1"/>
                                                    <div class="button-wrapper-action">
                                                        <button class="button"><i class="fa-light fa-chevron-down"></i></button>
                                                        <button class="button plus">+<i class="fa-light fa-chevron-up"></i></button>
                                                    </div>
                                                </div>
                                                <a href="#" class="rts-btn btn-primary radious-sm with-icon">
                                                    <div class="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div class="arrow-icon">
                                                        <i class="fa-light fa-cart-shopping"></i>
                                                    </div>
                                                    <div class="arrow-icon">
                                                        <i class="fa-light fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-20 col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div class="single-shopping-card-one">
                                        <div class="image-and-action-area-wrapper">
                                            <a href="shop-details.html" class="thumbnail-preview">
                                                <div class="badge">
                                                    <span>25% <br/> 
                                                        Off
                                                    </span>
                                                    <i class="fa-solid fa-bookmark"></i>
                                                </div>
                                                <img src="images/grocery/05.jpg" alt="grocery"/>
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
                                                <h4 class="title">Fastula Cerelac Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span class="availability">500g Pack</span>
                                            <div class="price-area">
                                                <span class="current">$36.00</span>
                                                <div class="previous">$36.00</div>
                                            </div>
                                            <div class="cart-counter-action">
                                                <div class="quantity-edit">
                                                    <input type="text" class="input" value="1"/>
                                                    <div class="button-wrapper-action">
                                                        <button class="button"><i class="fa-light fa-chevron-down"></i></button>
                                                        <button class="button plus">+<i class="fa-light fa-chevron-up"></i></button>
                                                    </div>
                                                </div>
                                                <a href="#" class="rts-btn btn-primary radious-sm with-icon">
                                                    <div class="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div class="arrow-icon">
                                                        <i class="fa-light fa-cart-shopping"></i>
                                                    </div>
                                                    <div class="arrow-icon">
                                                        <i class="fa-light fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-20 col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div class="single-shopping-card-one">
                                       
                                        <div class="image-and-action-area-wrapper">
                                            <a href="shop-details.html" class="thumbnail-preview">
                                                <div class="badge">
                                                    <span>25% <br/> 
                                                        Off
                                                    </span>
                                                    <i class="fa-solid fa-bookmark"></i>
                                                </div>
                                                <img src="images/grocery/06.jpg" alt="grocery"/>
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
                                                <h4 class="title">Choco Cerelac Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span class="availability">500g Pack</span>
                                            <div class="price-area">
                                                <span class="current">$36.00</span>
                                                <div class="previous">$36.00</div>
                                            </div>
                                            <div class="cart-counter-action">
                                                <div class="quantity-edit">
                                                    <input type="text" class="input" value="1"/>
                                                    <div class="button-wrapper-action">
                                                        <button class="button"><i class="fa-light fa-chevron-down"></i></button>
                                                        <button class="button plus">+<i class="fa-light fa-chevron-up"></i></button>
                                                    </div>
                                                </div>
                                                <a href="#" class="rts-btn btn-primary radious-sm with-icon">
                                                    <div class="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div class="arrow-icon">
                                                        <i class="fa-light fa-cart-shopping"></i>
                                                    </div>
                                                    <div class="arrow-icon">
                                                        <i class="fa-light fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-20 col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div class="single-shopping-card-one">
                                        <div class="image-and-action-area-wrapper">
                                            <a href="shop-details.html" class="thumbnail-preview">
                                                <div class="badge">
                                                    <span>25% <br/> 
                                                        Off
                                                    </span>
                                                    <i class="fa-solid fa-bookmark"></i>
                                                </div>
                                                <img src="images/grocery/03.jpg" alt="grocery"/>
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
                                                <h4 class="title">Nasir Cerelac Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span class="availability">500g Pack</span>
                                            <div class="price-area">
                                                <span class="current">$36.00</span>
                                                <div class="previous">$36.00</div>
                                            </div>
                                            <div class="cart-counter-action">
                                                <div class="quantity-edit">
                                                    <input type="text" class="input" value="1"/>
                                                    <div class="button-wrapper-action">
                                                        <button class="button"><i class="fa-light fa-chevron-down"></i></button>
                                                        <button class="button plus">+<i class="fa-light fa-chevron-up"></i></button>
                                                    </div>
                                                </div>
                                                <a href="#" class="rts-btn btn-primary radious-sm with-icon">
                                                    <div class="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div class="arrow-icon">
                                                        <i class="fa-light fa-cart-shopping"></i>
                                                    </div>
                                                    <div class="arrow-icon">
                                                        <i class="fa-light fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-20 col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div class="single-shopping-card-one">
                                        <div class="image-and-action-area-wrapper">
                                            <a href="shop-details.html" class="thumbnail-preview">
                                                <div class="badge">
                                                    <span>25% <br/> 
                                                        Off
                                                    </span>
                                                    <i class="fa-solid fa-bookmark"></i>
                                                </div>
                                                <img src="images/grocery/05.jpg" alt="grocery"/>
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
                                                <h4 class="title">Crow Cerelac Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span class="availability">500g Pack</span>
                                            <div class="price-area">
                                                <span class="current">$36.00</span>
                                                <div class="previous">$36.00</div>
                                            </div>
                                            <div class="cart-counter-action">
                                                <div class="quantity-edit">
                                                    <input type="text" class="input" value="1"/>
                                                    <div class="button-wrapper-action">
                                                        <button class="button"><i class="fa-light fa-chevron-down"></i></button>
                                                        <button class="button plus">+<i class="fa-light fa-chevron-up"></i></button>
                                                    </div>
                                                </div>
                                                <a href="#" class="rts-btn btn-primary radious-sm with-icon">
                                                    <div class="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div class="arrow-icon">
                                                        <i class="fa-light fa-cart-shopping"></i>
                                                    </div>
                                                    <div class="arrow-icon">
                                                        <i class="fa-light fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-20 col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div class="single-shopping-card-one">
                                        <div class="image-and-action-area-wrapper">
                                            <a href="shop-details.html" class="thumbnail-preview">
                                                <div class="badge">
                                                    <span>25% <br/> 
                                                        Off
                                                    </span>
                                                    <i class="fa-solid fa-bookmark"></i>
                                                </div>
                                                <img src="images/grocery/02.jpg" alt="grocery"/>
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
                                                <h4 class="title">Vage Cerelac Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span class="availability">500g Pack</span>
                                            <div class="price-area">
                                                <span class="current">$36.00</span>
                                                <div class="previous">$36.00</div>
                                            </div>
                                            <div class="cart-counter-action">
                                                <div class="quantity-edit">
                                                    <input type="text" class="input" value="1"/>
                                                    <div class="button-wrapper-action">
                                                        <button class="button"><i class="fa-light fa-chevron-down"></i></button>
                                                        <button class="button plus">+<i class="fa-light fa-chevron-up"></i></button>
                                                    </div>
                                                </div>
                                                <a href="#" class="rts-btn btn-primary radious-sm with-icon">
                                                    <div class="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div class="arrow-icon">
                                                        <i class="fa-light fa-cart-shopping"></i>
                                                    </div>
                                                    <div class="arrow-icon">
                                                        <i class="fa-light fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-lg-20 col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div class="single-shopping-card-one">
                                        <div class="image-and-action-area-wrapper">
                                            <a href="shop-details.html" class="thumbnail-preview">
                                                <div class="badge">
                                                    <span>25% <br/> 
                                                        Off
                                                    </span>
                                                    <i class="fa-solid fa-bookmark"></i>
                                                </div>
                                                <img src="images/grocery/06.jpg" alt="grocery"/>
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
                                                <h4 class="title">Marps Cerelac Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span class="availability">500g Pack</span>
                                            <div class="price-area">
                                                <span class="current">$36.00</span>
                                                <div class="previous">$36.00</div>
                                            </div>
                                            <div class="cart-counter-action">
                                                <div class="quantity-edit">
                                                    <input type="text" class="input" value="1"/>
                                                    <div class="button-wrapper-action">
                                                        <button class="button"><i class="fa-light fa-chevron-down"></i></button>
                                                        <button class="button plus">+<i class="fa-light fa-chevron-up"></i></button>
                                                    </div>
                                                </div>
                                                <a href="#" class="rts-btn btn-primary radious-sm with-icon">
                                                    <div class="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div class="arrow-icon">
                                                        <i class="fa-light fa-cart-shopping"></i>
                                                    </div>
                                                    <div class="arrow-icon">
                                                        <i class="fa-light fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-20 col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div class="single-shopping-card-one">
                                        <div class="image-and-action-area-wrapper">
                                            <a href="shop-details.html" class="thumbnail-preview">
                                                <div class="badge">
                                                    <span>25% <br/> 
                                                        Off
                                                    </span>
                                                    <i class="fa-solid fa-bookmark"></i>
                                                </div>
                                                <img src="images/grocery/01.jpg" alt="grocery"/>
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
                                                <h4 class="title">Solars Cerelac Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span class="availability">500g Pack</span>
                                            <div class="price-area">
                                                <span class="current">$36.00</span>
                                                <div class="previous">$36.00</div>
                                            </div>
                                            <div class="cart-counter-action">
                                                <div class="quantity-edit">
                                                    <input type="text" class="input" value="1"/>
                                                    <div class="button-wrapper-action">
                                                        <button class="button"><i class="fa-light fa-chevron-down"></i></button>
                                                        <button class="button plus">+<i class="fa-light fa-chevron-up"></i></button>
                                                    </div>
                                                </div>
                                                <a href="#" class="rts-btn btn-primary radious-sm with-icon">
                                                    <div class="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div class="arrow-icon">
                                                        <i class="fa-light fa-cart-shopping"></i>
                                                    </div>
                                                    <div class="arrow-icon">
                                                        <i class="fa-light fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-20 col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div class="single-shopping-card-one">
                                        <div class="image-and-action-area-wrapper">
                                            <a href="shop-details.html" class="thumbnail-preview">
                                                <div class="badge">
                                                    <span>25% <br/> 
                                                        Off
                                                    </span>
                                                    <i class="fa-solid fa-bookmark"></i>
                                                </div>
                                                <img src="images/grocery/02.jpg" alt="grocery"/>
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
                                                <h4 class="title">Desent Cerelac Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span class="availability">500g Pack</span>
                                            <div class="price-area">
                                                <span class="current">$36.00</span>
                                                <div class="previous">$36.00</div>
                                            </div>
                                            <div class="cart-counter-action">
                                                <div class="quantity-edit">
                                                    <input type="text" class="input" value="1"/>
                                                    <div class="button-wrapper-action">
                                                        <button class="button"><i class="fa-light fa-chevron-down"></i></button>
                                                        <button class="button plus">+<i class="fa-light fa-chevron-up"></i></button>
                                                    </div>
                                                </div>
                                                <a href="#" class="rts-btn btn-primary radious-sm with-icon">
                                                    <div class="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div class="arrow-icon">
                                                        <i class="fa-light fa-cart-shopping"></i>
                                                    </div>
                                                    <div class="arrow-icon">
                                                        <i class="fa-light fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-20 col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div class="single-shopping-card-one">
                                        <div class="image-and-action-area-wrapper">
                                            <a href="shop-details.html" class="thumbnail-preview">
                                                <div class="badge">
                                                    <span>25% <br/> 
                                                        Off
                                                    </span>
                                                    <i class="fa-solid fa-bookmark"></i>
                                                </div>
                                                <img src="images/grocery/03.jpg" alt="grocery"/>
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
                                                <h4 class="title">Gajin Cerelac Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span class="availability">500g Pack</span>
                                            <div class="price-area">
                                                <span class="current">$36.00</span>
                                                <div class="previous">$36.00</div>
                                            </div>
                                            <div class="cart-counter-action">
                                                <div class="quantity-edit">
                                                    <input type="text" class="input" value="1"/>
                                                    <div class="button-wrapper-action">
                                                        <button class="button"><i class="fa-light fa-chevron-down"></i></button>
                                                        <button class="button plus">+<i class="fa-light fa-chevron-up"></i></button>
                                                    </div>
                                                </div>
                                                <a href="#" class="rts-btn btn-primary radious-sm with-icon">
                                                    <div class="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div class="arrow-icon">
                                                        <i class="fa-light fa-cart-shopping"></i>
                                                    </div>
                                                    <div class="arrow-icon">
                                                        <i class="fa-light fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-20 col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div class="single-shopping-card-one">
                                        <div class="image-and-action-area-wrapper">
                                            <a href="shop-details.html" class="thumbnail-preview">
                                                <div class="badge">
                                                    <span>25% <br/> 
                                                        Off
                                                    </span>
                                                    <i class="fa-solid fa-bookmark"></i>
                                                </div>
                                                <img src="images/grocery/04.jpg" alt="grocery"/>
                                            </a>
                                            <div class="action-share-option">
                                                <div class="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i class="fa-light fa-heart"></i>
                                                </div>
                                                <div class="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i class="fa-lightfa-arrows-retweet"></i>
                                                </div>
                                                <div class="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i class="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div class="body-content">
                                            
                                            <a href="shop-details.html">
                                                <h4 class="title">Palts Cerelac Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span class="availability">500g Pack</span>
                                            <div class="price-area">
                                                <span class="current">$36.00</span>
                                                <div class="previous">$36.00</div>
                                            </div>
                                            <div class="cart-counter-action">
                                                <div class="quantity-edit">
                                                    <input type="text" class="input" value="1"/>
                                                    <div class="button-wrapper-action">
                                                        <button class="button"><i class="fa-light fa-chevron-down"></i></button>
                                                        <button class="button plus">+<i class="fa-light fa-chevron-up"></i></button>
                                                    </div>
                                                </div>
                                                <a href="#" class="rts-btn btn-primary radious-sm with-icon">
                                                    <div class="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div class="arrow-icon">
                                                        <i class="fa-light fa-cart-shopping"></i>
                                                    </div>
                                                    <div class="arrow-icon">
                                                        <i class="fa-light fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-20 col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div class="single-shopping-card-one">
                                     
                                        <div class="image-and-action-area-wrapper">
                                            <a href="shop-details.html" class="thumbnail-preview">
                                                <div class="badge">
                                                    <span>25% <br/> 
                                                        Off
                                                    </span>
                                                    <i class="fa-solid fa-bookmark"></i>
                                                </div>
                                                <img src="images/grocery/05.jpg" alt="grocery"/>
                                            </a>
                                            <div class="action-share-option">
                                                <div class="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i class="fa-light fa-heart"></i>
                                                </div>
                                                <div class="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i class="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div class="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i class="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                      
                                        <div class="body-content">
                                            
                                            <a href="shop-details.html">
                                                <h4 class="title">Kostari Cerelac Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span class="availability">500g Pack</span>
                                            <div class="price-area">
                                                <span class="current">$36.00</span>
                                                <div class="previous">$36.00</div>
                                            </div>
                                            <div class="cart-counter-action">
                                                <div class="quantity-edit">
                                                    <input type="text" class="input" value="1"/>
                                                    <div class="button-wrapper-action">
                                                        <button class="button"><i class="fa-light fa-chevron-down"></i></button>
                                                        <button class="button plus">+<i class="fa-light fa-chevron-up"></i></button>
                                                    </div>
                                                </div>
                                                <a href="#" class="rts-btn btn-primary radious-sm with-icon">
                                                    <div class="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div class="arrow-icon">
                                                        <i class="fa-light fa-cart-shopping"></i>
                                                    </div>
                                                    <div class="arrow-icon">
                                                        <i class="fa-light fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                                            {activeTab === 'profile-tab' && (

                       

<div  className="product-area-wrapper-shopgrid-list with-list mt--20 tab-pane fade show active" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">                           
                          
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="single-shopping-card-one discount-offer">
                                        <a href="shop-details.html" class="thumbnail-preview">
                                            <div class="badge">
                                                <span>25% <br/> 
                                                    Off
                                                </span>
                                                <i class="fa-solid fa-bookmark"></i>
                                            </div>
                                            <img src="images/grocery/03.jpg" alt="grocery"/>
                                        </a>
                                        <div class="body-content">
                                            <div class="title-area-left">
                                                <a href="shop-details.html">
                                                    <h4 class="title">Kajib Cerelac Mixed Fruits &amp;
                                                        Wheat with Milk</h4>
                                                </a>
                                                <span class="availability">500g Pack</span>
                                                <div class="price-area">
                                                    <span class="current">$36.00</span>
                                                    <div class="previous">$36.00</div>
                                                </div>
                                                <div class="cart-counter-action">
                                                    <div class="quantity-edit">
                                                        <input type="text" class="input" value="1"/>
                                                        <div class="button-wrapper-action">
                                                            <button class="button"><i class="fa-light fa-chevron-down"></i></button>
                                                            <button class="button plus">+<i class="fa-light fa-chevron-up"></i></button>
                                                        </div>
                                                        </div>
                                                        <a href="#" class="rts-btn btn-primary radious-sm with-icon">
                                                        <div class="btn-text">
                                                            Add To Cart
                                                        </div>
                                                        <div class="arrow-icon">
                                                            <i class="fa-light fa-cart-shopping"></i>
                                                        </div>
                                                        <div class="arrow-icon">
                                                            <i class="fa-light fa-cart-shopping"></i>
                                                        </div>
                                                    </a>
                                                </div>
                                                    
                                                    
                                            </div>
                                            <div class="natural-value">
                                            <h6 class="title">
                                                    Nutritional Values
                                                </h6>
                                                <div class="single">
                                                    <span>Energy(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>Protein(g):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>magnetiam(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>Calory(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>Vitamine(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="single-shopping-card-one discount-offer">
                                        <a href="shop-details.html" class="thumbnail-preview">
                                            <div class="badge">
                                                <span>25% <br/> 
                                                    Off
                                                </span>
                                                <i class="fa-solid fa-bookmark"></i>
                                            </div>
                                            <img src="images/grocery/04.jpg" alt="grocery"/>
                                        </a>
                                        <div class="body-content">
                                            <div class="title-area-left">
                                                <a href="shop-details.html">
                                                    <h4 class="title">Lorg Cerelac Mixed Fruits &amp;
                                                        Wheat with Milk</h4>
                                                </a>
                                                <span class="availability">500g Pack</span>
                                                <div class="price-area">
                                                    <span class="current">$36.00</span>
                                                    <div class="previous">$36.00</div>
                                                </div>
                                                <div class="cart-counter-action">
                                                    <div class="quantity-edit">
                                                        <input type="text" class="input" value="1"/>
                                                        <div class="button-wrapper-action">
                                                            <button class="button"><i class="fa-light fa-chevron-down"></i></button>
                                                            <button class="button plus">+<i class="fa-light fa-chevron-up"></i></button>
                                                        </div>
                                                    </div>
                                                    <a href="#" class="rts-btn btn-primary radious-sm with-icon">
                                                        <div class="btn-text">
                                                            Add To Cart
                                                        </div>
                                                        <div class="arrow-icon">
                                                            <i class="fa-light fa-cart-shopping"></i>
                                                        </div>
                                                        <div class="arrow-icon">
                                                            <i class="fa-light fa-cart-shopping"></i>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="natural-value">
                                                <h6 class="title">
                                                    Nutritional Values
                                                </h6>
                                                <div class="single">
                                                    <span>Energy(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>Protein(g):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>magnetiam(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>Calory(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>Vitamine(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="single-shopping-card-one discount-offer">
                                        <a href="shop-details.html" class="thumbnail-preview">
                                            <div class="badge">
                                                <span>25% <br/> 
                                                    Off
                                                </span>
                                                <i class="fa-solid fa-bookmark"></i>
                                            </div>
                                            <img src="images/grocery/05.jpg" alt="grocery"/>
                                        </a>
                                        <div class="body-content">
                                            <div class="title-area-left">
                                                <a href="shop-details.html">
                                                    <h4 class="title">Patas Cerelac Mixed Fruits &amp;
                                                        Wheat with Milk</h4>
                                                </a>
                                                <span class="availability">500g Pack</span>
                                                <div class="price-area">
                                                    <span class="current">$36.00</span>
                                                    <div class="previous">$36.00</div>
                                                </div>
                                                <div class="cart-counter-action">
                                                    <div class="quantity-edit">
                                                        <input type="text" class="input" value="1"/>
                                                        <div class="button-wrapper-action">
                                                            <button class="button"><i class="fa-light fa-chevron-down"></i></button>
                                                            <button class="button plus">+<i class="fa-light fa-chevron-up"></i></button>
                                                        </div>
                                                    </div>
                                                    <a href="#" class="rts-btn btn-primary radious-sm with-icon">
                                                        <div class="btn-text">
                                                            Add To Cart
                                                        </div>
                                                        <div class="arrow-icon">
                                                            <i class="fa-light fa-cart-shopping"></i>
                                                        </div>
                                                        <div class="arrow-icon">
                                                            <i class="fa-light fa-cart-shopping"></i>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="natural-value">
                                                <h6 class="title">
                                                    Nutritional Values
                                                </h6>
                                                <div class="single">
                                                    <span>Energy(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>Protein(g):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>magnetiam(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>Calory(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>Vitamine(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="single-shopping-card-one discount-offer">
                                        <a href="shop-details.html" class="thumbnail-preview">
                                            <div class="badge">
                                                <span>25% <br/> 
                                                    Off
                                                </span>
                                                <i class="fa-solid fa-bookmark"></i>
                                            </div>
                                            <img src="images/grocery/06.jpg" alt="grocery"/>
                                        </a>
                                        <div class="body-content">
                                            <div class="title-area-left">
                                                <a href="shop-details.html">
                                                    <h4 class="title">Kolas Cerelac Mixed Fruits &amp;
                                                        Wheat with Milk</h4>
                                                </a>
                                                <span class="availability">500g Pack</span>
                                                <div class="price-area">
                                                    <span class="current">$36.00</span>
                                                    <div class="previous">$36.00</div>
                                                </div>
                                                <div class="cart-counter-action">
                                                    <div class="quantity-edit">
                                                        <input type="text" class="input" value="1"/>
                                                        <div class="button-wrapper-action">
                                                            <button class="button"><i class="fa-light fa-chevron-down"></i></button>
                                                            <button class="button plus">+<i class="fa-light fa-chevron-up"></i></button>
                                                        </div>
                                                    </div>
                                                    <a href="#" class="rts-btn btn-primary radious-sm with-icon">
                                                        <div class="btn-text">
                                                            Add To Cart
                                                        </div>
                                                        <div class="arrow-icon">
                                                            <i class="fa-light fa-cart-shopping"></i>
                                                        </div>
                                                        <div class="arrow-icon">
                                                            <i class="fa-light fa-cart-shopping"></i>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="natural-value">
                                                <h6 class="title">
                                                    Nutritional Values
                                                </h6>
                                                <div class="single">
                                                    <span>Energy(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>Protein(g):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>magnetiam(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>Calory(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>Vitamine(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="single-shopping-card-one discount-offer">
                                        <a href="shop-details.html" class="thumbnail-preview">
                                            <div class="badge">
                                                <span>25% <br/> 
                                                    Off
                                                </span>
                                                <i class="fa-solid fa-bookmark"></i>
                                            </div>
                                            <img src="images/grocery/01.jpg" alt="grocery"/>
                                        </a>
                                        <div class="body-content">
                                            <div class="title-area-left">
                                                <a href="shop-details.html">
                                                    <h4 class="title">Rolar Cerelac Mixed Fruits &amp;
                                                        Wheat with Milk</h4>
                                                </a>
                                                <span class="availability">500g Pack</span>
                                                <div class="price-area">
                                                    <span class="current">$36.00</span>
                                                    <div class="previous">$36.00</div>
                                                </div>
                                                <div class="cart-counter-action">
                                                    <div class="quantity-edit">
                                                        <input type="text" class="input" value="1"/>
                                                        <div class="button-wrapper-action">
                                                            <button class="button"><i class="fa-light fa-chevron-down"></i></button>
                                                            <button class="button plus">+<i class="fa-light fa-chevron-up"></i></button>
                                                        </div>
                                                    </div>
                                                    <a href="#" class="rts-btn btn-primary radious-sm with-icon">
                                                        <div class="btn-text">
                                                            Add To Cart
                                                        </div>
                                                        <div class="arrow-icon">
                                                            <i class="fa-light fa-cart-shopping"></i>
                                                        </div>
                                                        <div class="arrow-icon">
                                                            <i class="fa-light fa-cart-shopping"></i>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="natural-value">
                                                <h6 class="title">
                                                    Nutritional Values
                                                </h6>
                                                <div class="single">
                                                    <span>Energy(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>Protein(g):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>magnetiam(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>Calory(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>Vitamine(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="single-shopping-card-one discount-offer">
                                        <a href="shop-details.html" class="thumbnail-preview">
                                            <div class="badge">
                                                <span>25% <br/> 
                                                    Off
                                                </span>
                                                <i class="fa-solid fa-bookmark"></i>
                                            </div>
                                            <img src="images/grocery/03.jpg" alt="grocery"/>
                                        </a>
                                        <div class="body-content">
                                            <div class="title-area-left">
                                                <a href="shop-details.html">
                                                    <h4 class="title">Olar Cerelac Mixed Fruits &amp;
                                                        Wheat with Milk</h4>
                                                </a>
                                                <span class="availability">500g Pack</span>
                                                <div class="price-area">
                                                    <span class="current">$36.00</span>
                                                    <div class="previous">$36.00</div>
                                                </div>
                                                <div class="cart-counter-action">
                                                    <div class="quantity-edit">
                                                        <input type="text" class="input" value="1"/>
                                                        <div class="button-wrapper-action">
                                                            <button class="button"><i class="fa-light fa-chevron-down"></i></button>
                                                            <button class="button plus">+<i class="fa-light fa-chevron-up"></i></button>
                                                        </div>
                                                    </div>
                                                    <a href="#" class="rts-btn btn-primary radious-sm with-icon">
                                                        <div class="btn-text">
                                                            Add To Cart
                                                        </div>
                                                        <div class="arrow-icon">
                                                            <i class="fa-light fa-cart-shopping"></i>
                                                        </div>
                                                        <div class="arrow-icon">
                                                            <i class="fa-light fa-cart-shopping"></i>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="natural-value">
                                                <h6 class="title">
                                                    Nutritional Values
                                                </h6>
                                                <div class="single">
                                                    <span>Energy(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>Protein(g):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>magnetiam(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>Calory(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>Vitamine(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="single-shopping-card-one discount-offer">
                                        <a href="shop-details.html" class="thumbnail-preview">
                                            <div class="badge">
                                                <span>25% <br/> 
                                                    Off
                                                </span>
                                                <i class="fa-solid fa-bookmark"></i>
                                            </div>
                                            <img src="images/grocery/04.jpg" alt="grocery"/>
                                        </a>
                                        <div class="body-content">
                                            <div class="title-area-left">
                                                <a href="shop-details.html">
                                                    <h4 class="title">jack Fruit Mixed Fruits &amp;
                                                        Wheat with Milk</h4>
                                                </a>
                                                <span class="availability">500g Pack</span>
                                                <div class="price-area">
                                                    <span class="current">$36.00</span>
                                                    <div class="previous">$36.00</div>
                                                </div>
                                                <div class="cart-counter-action">
                                                    <div class="quantity-edit">
                                                        <input type="text" class="input" value="1"/>
                                                        <div class="button-wrapper-action">
                                                            <button class="button"><i class="fa-light fa-chevron-down"></i></button>
                                                            <button class="button plus">+<i class="fa-light fa-chevron-up"></i></button>
                                                        </div>
                                                    </div>
                                                    <a href="#" class="rts-btn btn-primary radious-sm with-icon">
                                                        <div class="btn-text">
                                                            Add To Cart
                                                        </div>
                                                        <div class="arrow-icon">
                                                            <i class="fa-light fa-cart-shopping"></i>
                                                        </div>
                                                        <div class="arrow-icon">
                                                            <i class="fa-light fa-cart-shopping"></i>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="natural-value">
                                                <h6 class="title">
                                                    Nutritional Values
                                                </h6>
                                                <div class="single">
                                                    <span>Energy(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>Protein(g):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>magnetiam(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>Calory(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>Vitamine(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="single-shopping-card-one discount-offer">
                                        <a href="shop-details.html" class="thumbnail-preview">
                                            <div class="badge">
                                                <span>25% <br/> 
                                                    Off
                                                </span>
                                                <i class="fa-solid fa-bookmark"></i>
                                            </div>
                                            <img src="images/grocery/05.jpg" alt="grocery"/>
                                        </a>
                                        <div class="body-content">
                                            <div class="title-area-left">
                                                <a href="shop-details.html">
                                                    <h4 class="title">Fresh Cerelac Mixed Fruits &amp;
                                                        Wheat with Milk</h4>
                                                </a>
                                                <span class="availability">500g Pack</span>
                                                <div class="price-area">
                                                    <span class="current">$36.00</span>
                                                    <div class="previous">$36.00</div>
                                                </div>
                                                <div class="cart-counter-action">
                                                    <div class="quantity-edit">
                                                        <input type="text" class="input" value="1"/>
                                                        <div class="button-wrapper-action">
                                                            <button class="button"><i class="fa-light fa-chevron-down"></i></button>
                                                            <button class="button plus">+<i class="fa-light fa-chevron-up"></i></button>
                                                        </div>
                                                    </div>
                                                    <a href="#" class="rts-btn btn-primary radious-sm with-icon">
                                                        <div class="btn-text">
                                                            Add To Cart
                                                        </div>
                                                        <div class="arrow-icon">
                                                            <i class="fa-light fa-cart-shopping"></i>
                                                        </div>
                                                        <div class="arrow-icon">
                                                            <i class="fa-light fa-cart-shopping"></i>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="natural-value">
                                                <h6 class="title">
                                                    Nutritional Values
                                                </h6>
                                                <div class="single">
                                                    <span>Energy(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>Protein(g):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>magnetiam(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>Calory(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>Vitamine(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="single-shopping-card-one discount-offer">
                                        <a href="shop-details.html" class="thumbnail-preview">
                                            <div class="badge">
                                                <span>25% <br/> 
                                                    Off
                                                </span>
                                                <i class="fa-solid fa-bookmark"></i>
                                            </div>
                                            <img src="images/grocery/06.jpg" alt="grocery"/>
                                        </a>
                                        <div class="body-content">
                                            <div class="title-area-left">
                                                <a href="shop-details.html">
                                                    <h4 class="title">Natural Cerelac Mixed Fruits &amp;
                                                        Wheat with Milk</h4>
                                                </a>
                                                <span class="availability">500g Pack</span>
                                                <div class="price-area">
                                                    <span class="current">$36.00</span>
                                                    <div class="previous">$36.00</div>
                                                </div>
                                                <div class="cart-counter-action">
                                                    <div class="quantity-edit">
                                                        <input type="text" class="input" value="1"/>
                                                        <div class="button-wrapper-action">
                                                            <button class="button"><i class="fa-light fa-chevron-down"></i></button>
                                                            <button class="button plus">+<i class="fa-light fa-chevron-up"></i></button>
                                                        </div>
                                                    </div>
                                                    <a href="#" class="rts-btn btn-primary radious-sm with-icon">
                                                        <div class="btn-text">
                                                            Add To Cart
                                                        </div>
                                                        <div class="arrow-icon">
                                                            <i class="fa-light fa-cart-shopping"></i>
                                                        </div>
                                                        <div class="arrow-icon">
                                                            <i class="fa-light fa-cart-shopping"></i>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="natural-value">
                                                <h6 class="title">
                                                    Nutritional Values
                                                </h6>
                                                <div class="single">
                                                    <span>Energy(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>Protein(g):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>magnetiam(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>Calory(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>Vitamine(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="single-shopping-card-one discount-offer">
                                        <a href="shop-details.html" class="thumbnail-preview">
                                            <div class="badge">
                                                <span>25% <br/> 
                                                    Off
                                                </span>
                                                <i class="fa-solid fa-bookmark"></i>
                                            </div>
                                            <img src="images/grocery/01.jpg" alt="grocery"/>
                                        </a>
                                        <div class="body-content">
                                            <div class="title-area-left">
                                                <a href="shop-details.html">
                                                    <h4 class="title">Nestle Cerelac Mixed Fruits &amp;
                                                        Wheat with Milk</h4>
                                                </a>
                                                <span class="availability">500g Pack</span>
                                                <div class="price-area">
                                                    <span class="current">$36.00</span>
                                                    <div class="previous">$36.00</div>
                                                </div>
                                                <div class="cart-counter-action">
                                                    <div class="quantity-edit">
                                                        <input type="text" class="input" value="1"/>
                                                        <div class="button-wrapper-action">
                                                            <button class="button"><i class="fa-light fa-chevron-down"></i></button>
                                                            <button class="button plus">+<i class="fa-light fa-chevron-up"></i></button>
                                                        </div>
                                                    </div>
                                                    <a href="#" class="rts-btn btn-primary radious-sm with-icon">
                                                        <div class="btn-text">
                                                            Add To Cart
                                                        </div>
                                                        <div class="arrow-icon">
                                                            <i class="fa-light fa-cart-shopping"></i>
                                                        </div>
                                                        <div class="arrow-icon">
                                                            <i class="fa-light fa-cart-shopping"></i>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="natural-value">
                                                <h6 class="title">
                                                    Nutritional Values
                                                </h6>
                                                <div class="single">
                                                    <span>Energy(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>Protein(g):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>magnetiam(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>Calory(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div class="single">
                                                    <span>Vitamine(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                                            )}
                    </div>
                </div>
            </div>
        </div>
    </div>
    
        </div>
      
       
    );
};
export default ShopGridTop;