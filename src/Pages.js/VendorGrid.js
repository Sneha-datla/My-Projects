import React, { useState } from 'react';
import { Link } from "react-router-dom";
const VendorGrid =()=>{
    const [activeTab, setActiveTab] = useState('home-tab');

   
    
    const handleTabClick = (tabId) => {
      setActiveTab(tabId);
    };
    return(
        <div>
             <div class="rts-navigation-area-breadcrumb bg_light-1">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="navigator-breadcrumb-wrapper">
                        <Link to="/">Home</Link>
                        <i class="fa-light fa-chevron-right"></i>
                        <Link class="current" to="/">Vendor Grid</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="vendor-search-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="vendor-search-area-wrapper">
                        <h1 class="title">Vendors List</h1>
                        <form action="#" class="search-vendor-form">
                            <input type="text" placeholder="Search vendors (by name or ID)..."/>
                            <a href="#" class="rts-btn btn-primary radious-sm with-icon">
                                <div class="btn-text">
                                    Search
                                </div>
                                <div class="arrow-icon">
                                    <i class="fa-light fa-magnifying-glass"></i>
                                </div>
                                <div class="arrow-icon">
                                    <i class="fa-light fa-magnifying-glass"></i>
                                </div>
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="vendor-search-area rts-section-gap">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="filter-search-area-top-between filter-select-area">
                        <div class="top-filter">
                            <span>Showing 1–20 of 57 results</span>
                            <div class="right-end">
                                <span>Sort: Short By Latest</span>
                                <div class="button-tab-area">
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                        <button   className={`nav-link single-button ${activeTab === 'home-tab' ? 'active' : ''}`}  id="home-tab"  onClick={() => handleTabClick('home-tab')} type="button" role="tab" aria-controls="home-tab-pane" aria-selected={activeTab === 'home-tab'} >
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.5" y="0.5" width="6" height="6" rx="1.5" stroke="#2C3B28"></rect>
                                                <rect x="0.5" y="9.5" width="6" height="6" rx="1.5" stroke="#2C3B28"></rect>
                                                <rect x="9.5" y="0.5" width="6" height="6" rx="1.5" stroke="#2C3B28"></rect>
                                                <rect x="9.5" y="9.5" width="6" height="6" rx="1.5" stroke="#2C3B28"></rect>
                                                </svg>  
                                          </button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                        <button className={`nav-link single-button ${activeTab === 'profile-tab' ? 'active' : ''}`} id="profile-tab" onClick={() => handleTabClick('profile-tab')}  type="button" role="tab" aria-controls="profile-tab-pane" aria-selected={activeTab === 'profile-tab'}>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.5" y="0.5" width="6" height="6" rx="1.5" stroke="#2C3C28"></rect>
                                                <rect x="0.5" y="9.5" width="6" height="6" rx="1.5" stroke="#2C3C28"></rect>
                                                <rect x="9" y="3" width="7" height="1" fill="#2C3C28"></rect>
                                                <rect x="9" y="12" width="7" height="1" fill="#2C3C28"></rect>
                                                </svg>
                                          </button>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-content" id="myTabContent">
                    {activeTab === 'home-tab' && (   

                        
                        <div class="mt--20 tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                            <div class="row g-4">
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="single-vendor-area">
                                        <div class="logo-vendor">
                                            <img src="images/vendor/01.svg" alt="vendor"/>
                                        </div>
                                        <h3 class="title">Fresh Iuice Bar <span class="closed">Closed</span></h3>
                                        <div class="stars-area">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <span>4.50 out of 5</span>
                                        </div>
                                        <div class="location">
                                            <i class="fa-light fa-location-dot"></i>
                                            <p>530 Post Ct  El Dorado Hills
                                                California ,United States</p>
                                        </div>
                                        <div class="location">
                                            <i class="fa-solid fa-phone-volume"></i>
                                            <p>+1 (511) 934-8170
                                            </p>
                                        </div>
                                        <a href="vendor-details.html" class="rts-btn btn-primary radious-sm with-icon">
                                            <div class="btn-text">
                                                Visit Store
                                            </div>
                                            <div class="arrow-icon">
                                                <i class="fa-light fa-arrow-right"></i>
                                            </div>
                                            <div class="arrow-icon">
                                                <i class="fa-light fa-arrow-right"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="single-vendor-area">
                                        <div class="logo-vendor">
                                            <img src="images/vendor/02.svg" alt="vendor"/>
                                        </div>
                                        <h3 class="title">Food Character <span class="open">Open</span></h3>
                                        <div class="stars-area">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <span>4.50 out of 5</span>
                                        </div>
                                        <div class="location">
                                            <i class="fa-light fa-location-dot"></i>
                                            <p>530 Post Ct  El Dorado Hills
                                                California ,United States</p>
                                        </div>
                                        <div class="location">
                                            <i class="fa-solid fa-phone-volume"></i>
                                            <p>+1 (511) 934-8170
                                            </p>
                                        </div>
                                        <a href="vendor-details.html" class="rts-btn btn-primary radious-sm with-icon">
                                            <div class="btn-text">
                                                Visit Store
                                            </div>
                                            <div class="arrow-icon">
                                                <i class="fa-light fa-arrow-right"></i>
                                            </div>
                                            <div class="arrow-icon">
                                                <i class="fa-light fa-arrow-right"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="single-vendor-area">
                                        <div class="logo-vendor">
                                            <img src="images/vendor/03.svg" alt="vendor"/>
                                        </div>
                                        <h3 class="title">Food Forulard <span class="open">Open</span></h3>
                                        <div class="stars-area">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <span>4.50 out of 5</span>
                                        </div>
                                        <div class="location">
                                            <i class="fa-light fa-location-dot"></i>
                                            <p>530 Post Ct  El Dorado Hills
                                                California ,United States</p>
                                        </div>
                                        <div class="location">
                                            <i class="fa-solid fa-phone-volume"></i>
                                            <p>+1 (511) 934-8170
                                            </p>
                                        </div>
                                        <a href="vendor-details.html" class="rts-btn btn-primary radious-sm with-icon">
                                            <div class="btn-text">
                                                Visit Store
                                            </div>
                                            <div class="arrow-icon">
                                                <i class="fa-light fa-arrow-right"></i>
                                            </div>
                                            <div class="arrow-icon">
                                                <i class="fa-light fa-arrow-right"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="single-vendor-area">
                                        <div class="logo-vendor">
                                            <img src="images/vendor/04.svg" alt="vendor"/>
                                        </div>
                                        <h3 class="title">Authentic Grocery  <span class="closed">Closed</span></h3>
                                        <div class="stars-area">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <span>4.50 out of 5</span>
                                        </div>
                                        <div class="location">
                                            <i class="fa-light fa-location-dot"></i>
                                            <p>530 Post Ct  El Dorado Hills
                                                California ,United States</p>
                                        </div>
                                        <div class="location">
                                            <i class="fa-solid fa-phone-volume"></i>
                                            <p>+1 (511) 934-8170
                                            </p>
                                        </div>
                                        <a href="vendor-details.html" class="rts-btn btn-primary radious-sm with-icon">
                                            <div class="btn-text">
                                                Visit Store
                                            </div>
                                            <div class="arrow-icon">
                                                <i class="fa-light fa-arrow-right"></i>
                                            </div>
                                            <div class="arrow-icon">
                                                <i class="fa-light fa-arrow-right"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="single-vendor-area">
                                        <div class="logo-vendor">
                                            <img src="images/vendor/05.svg" alt="vendor"/>
                                        </div>
                                        <h3 class="title">Fresh Food<span class="open">Open</span></h3>
                                        <div class="stars-area">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <span>4.50 out of 5</span>
                                        </div>
                                        <div class="location">
                                            <i class="fa-light fa-location-dot"></i>
                                            <p>530 Post Ct  El Dorado Hills
                                                California ,United States</p>
                                        </div>
                                        <div class="location">
                                            <i class="fa-solid fa-phone-volume"></i>
                                            <p>+1 (511) 934-8170
                                            </p>
                                        </div>
                                        <a href="vendor-details.html" class="rts-btn btn-primary radious-sm with-icon">
                                            <div class="btn-text">
                                                Visit Store
                                            </div>
                                            <div class="arrow-icon">
                                                <i class="fa-light fa-arrow-right"></i>
                                            </div>
                                            <div class="arrow-icon">
                                                <i class="fa-light fa-arrow-right"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="single-vendor-area">
                                        <div class="logo-vendor">
                                            <img src="images/vendor/06.svg" alt="vendor"/>
                                        </div>
                                        <h3 class="title">Food Forulard <span class="open">Open</span></h3>
                                        <div class="stars-area">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <span>4.50 out of 5</span>
                                        </div>
                                        <div class="location">
                                            <i class="fa-light fa-location-dot"></i>
                                            <p>530 Post Ct  El Dorado Hills
                                                California ,United States</p>
                                        </div>
                                        <div class="location">
                                            <i class="fa-solid fa-phone-volume"></i>
                                            <p>+1 (511) 934-8170
                                            </p>
                                        </div>
                                        <a href="vendor-details.html" class="rts-btn btn-primary radious-sm with-icon">
                                            <div class="btn-text">
                                                Visit Store
                                            </div>
                                            <div class="arrow-icon">
                                                <i class="fa-light fa-arrow-right"></i>
                                            </div>
                                            <div class="arrow-icon">
                                                <i class="fa-light fa-arrow-right"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="single-vendor-area">
                                        <div class="logo-vendor">
                                            <img src="images/vendor/07.svg" alt="vendor"/>
                                        </div>
                                        <h3 class="title">Food Forulard <span class="open">Open</span></h3>
                                        <div class="stars-area">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <span>4.50 out of 5</span>
                                        </div>
                                        <div class="location">
                                            <i class="fa-light fa-location-dot"></i>
                                            <p>530 Post Ct  El Dorado Hills
                                                California ,United States</p>
                                        </div>
                                        <div class="location">
                                            <i class="fa-solid fa-phone-volume"></i>
                                            <p>+1 (511) 934-8170
                                            </p>
                                        </div>
                                        <a href="vendor-details.html" class="rts-btn btn-primary radious-sm with-icon">
                                            <div class="btn-text">
                                                Visit Store
                                            </div>
                                            <div class="arrow-icon">
                                                <i class="fa-light fa-arrow-right"></i>
                                            </div>
                                            <div class="arrow-icon">
                                                <i class="fa-light fa-arrow-right"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="single-vendor-area">
                                        <div class="logo-vendor">
                                            <img src="images/vendor/08.svg" alt="vendor"/>
                                        </div>
                                        <h3 class="title">Botanic Natural Product<span class="open">open</span></h3>
                                        <div class="stars-area">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <span>4.50 out of 5</span>
                                        </div>
                                        <div class="location">
                                            <i class="fa-light fa-location-dot"></i>
                                            <p>530 Post Ct  El Dorado Hills
                                                California ,United States</p>
                                        </div>
                                        <div class="location">
                                            <i class="fa-solid fa-phone-volume"></i>
                                            <p>+1 (511) 934-8170
                                            </p>
                                        </div>
                                        <a href="vendor-details.html" class="rts-btn btn-primary radious-sm with-icon">
                                            <div class="btn-text">
                                                Visit Store
                                            </div>
                                            <div class="arrow-icon">
                                                <i class="fa-light fa-arrow-right"></i>
                                            </div>
                                            <div class="arrow-icon">
                                                <i class="fa-light fa-arrow-right"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
             {activeTab === 'profile-tab' && (   

                        <div class="with-list mt--20 tab-pane fade show active" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                            <div class="row g-4">
                                <div class="col-lg-6">
                                    <div class="single-vendor-area">
                                        <div class="logo-vendor">
                                            <img src="images/vendor/01.svg" alt="vendor"/>
                                        </div>
                                        <div class="inner">
                                            <h3 class="title">Fresh Iuice Bar <span class="closed">Closed</span></h3>
                                            <div class="stars-area">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <span>4.50 out of 5</span>
                                            </div>
                                            <div class="location">
                                                <i class="fa-light fa-location-dot"></i>
                                                <p>530 Post Ct  El Dorado Hills
                                                    California ,United States</p>
                                            </div>
                                            <div class="location">
                                                <i class="fa-solid fa-phone-volume"></i>
                                                <p>+1 (511) 934-8170
                                                </p>
                                            </div>
                                            <a href="vendor-details.html" class="rts-btn btn-primary radious-sm with-icon">
                                                <div class="btn-text">
                                                    Visit Store
                                                </div>
                                                <div class="arrow-icon">
                                                    <i class="fa-light fa-arrow-right"></i>
                                                </div>
                                                <div class="arrow-icon">
                                                    <i class="fa-light fa-arrow-right"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="single-vendor-area">
                                        <div class="logo-vendor">
                                            <img src="images/vendor/02.svg" alt="vendor"/>
                                        </div>
                                        <div class="inner">
                                            <h3 class="title">Food Character <span class="open">Open</span></h3>
                                            <div class="stars-area">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <span>4.50 out of 5</span>
                                            </div>
                                            <div class="location">
                                                <i class="fa-light fa-location-dot"></i>
                                                <p>530 Post Ct  El Dorado Hills
                                                    California ,United States</p>
                                            </div>
                                            <div class="location">
                                                <i class="fa-solid fa-phone-volume"></i>
                                                <p>+1 (511) 934-8170
                                                </p>
                                            </div>
                                            <a href="vendor-details.html" class="rts-btn btn-primary radious-sm with-icon">
                                                <div class="btn-text">
                                                    Visit Store
                                                </div>
                                                <div class="arrow-icon">
                                                    <i class="fa-light fa-arrow-right"></i>
                                                </div>
                                                <div class="arrow-icon">
                                                    <i class="fa-light fa-arrow-right"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="single-vendor-area">
                                        <div class="logo-vendor">
                                            <img src="images/vendor/03.svg" alt="vendor"/>
                                        </div>
                                        <div class="inner">
                                            <h3 class="title">Food Forulard <span class="open">Open</span></h3>
                                            <div class="stars-area">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <span>4.50 out of 5</span>
                                            </div>
                                            <div class="location">
                                                <i class="fa-light fa-location-dot"></i>
                                                <p>530 Post Ct  El Dorado Hills
                                                    California ,United States</p>
                                            </div>
                                            <div class="location">
                                                <i class="fa-solid fa-phone-volume"></i>
                                                <p>+1 (511) 934-8170
                                                </p>
                                            </div>
                                            <a href="vendor-details.html" class="rts-btn btn-primary radious-sm with-icon">
                                                <div class="btn-text">
                                                    Visit Store
                                                </div>
                                                <div class="arrow-icon">
                                                    <i class="fa-light fa-arrow-right"></i>
                                                </div>
                                                <div class="arrow-icon">
                                                    <i class="fa-light fa-arrow-right"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="single-vendor-area">
                                        <div class="logo-vendor">
                                            <img src="images/vendor/04.svg" alt="vendor"/>
                                        </div>
                                        <div class="inner">
                                            <h3 class="title">Authentic Grocery  <span class="closed">Closed</span></h3>
                                            <div class="stars-area">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <span>4.50 out of 5</span>
                                            </div>
                                            <div class="location">
                                                <i class="fa-light fa-location-dot"></i>
                                                <p>530 Post Ct  El Dorado Hills
                                                    California ,United States</p>
                                            </div>
                                            <div class="location">
                                                <i class="fa-solid fa-phone-volume"></i>
                                                <p>+1 (511) 934-8170
                                                </p>
                                            </div>
                                            <a href="vendor-details.html" class="rts-btn btn-primary radious-sm with-icon">
                                                <div class="btn-text">
                                                    Visit Store
                                                </div>
                                                <div class="arrow-icon">
                                                    <i class="fa-light fa-arrow-right"></i>
                                                </div>
                                                <div class="arrow-icon">
                                                    <i class="fa-light fa-arrow-right"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="single-vendor-area">
                                        <div class="logo-vendor">
                                            <img src="images/vendor/05.svg" alt="vendor"/>
                                        </div>
                                        <div class="inner">
                                            <h3 class="title">Fresh Food<span class="open">Open</span></h3>
                                            <div class="stars-area">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <span>4.50 out of 5</span>
                                            </div>
                                            <div class="location">
                                                <i class="fa-light fa-location-dot"></i>
                                                <p>530 Post Ct  El Dorado Hills
                                                    California ,United States</p>
                                            </div>
                                            <div class="location">
                                                <i class="fa-solid fa-phone-volume"></i>
                                                <p>+1 (511) 934-8170
                                                </p>
                                            </div>
                                            <a href="vendor-details.html" class="rts-btn btn-primary radious-sm with-icon">
                                                <div class="btn-text">
                                                    Visit Store
                                                </div>
                                                <div class="arrow-icon">
                                                    <i class="fa-light fa-arrow-right"></i>
                                                </div>
                                                <div class="arrow-icon">
                                                    <i class="fa-light fa-arrow-right"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="single-vendor-area">
                                        <div class="logo-vendor">
                                            <img src="images/vendor/06.svg" alt="vendor"/>
                                        </div>
                                        <div class="inner">
                                            <h3 class="title">Food Forulard <span class="open">Open</span></h3>
                                            <div class="stars-area">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <span>4.50 out of 5</span>
                                            </div>
                                            <div class="location">
                                                <i class="fa-light fa-location-dot"></i>
                                                <p>530 Post Ct  El Dorado Hills
                                                    California ,United States</p>
                                            </div>
                                            <div class="location">
                                                <i class="fa-solid fa-phone-volume"></i>
                                                <p>+1 (511) 934-8170
                                                </p>
                                            </div>
                                            <a href="vendor-details.html" class="rts-btn btn-primary radious-sm with-icon">
                                                <div class="btn-text">
                                                    Visit Store
                                                </div>
                                                <div class="arrow-icon">
                                                    <i class="fa-light fa-arrow-right"></i>
                                                </div>
                                                <div class="arrow-icon">
                                                    <i class="fa-light fa-arrow-right"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            
                                <div class="col-lg-6">
                                    <div class="single-vendor-area">
                                        <div class="logo-vendor">
                                            <img src="images/vendor/07.svg" alt="vendor"/>
                                        </div>
                                        <div class="inner">
                                            <h3 class="title">Food Forulard <span class="open">Open</span></h3>
                                            <div class="stars-area">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <span>4.50 out of 5</span>
                                            </div>
                                            <div class="location">
                                                <i class="fa-light fa-location-dot"></i>
                                                <p>530 Post Ct  El Dorado Hills
                                                    California ,United States</p>
                                            </div>
                                            <div class="location">
                                                <i class="fa-solid fa-phone-volume"></i>
                                                <p>+1 (511) 934-8170
                                                </p>
                                            </div>
                                            <a href="vendor-details.html" class="rts-btn btn-primary radious-sm with-icon">
                                                <div class="btn-text">
                                                    Visit Store
                                                </div>
                                                <div class="arrow-icon">
                                                    <i class="fa-light fa-arrow-right"></i>
                                                </div>
                                                <div class="arrow-icon">
                                                    <i class="fa-light fa-arrow-right"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="single-vendor-area">
                                        <div class="logo-vendor">
                                            <img src="images/vendor/08.svg" alt="vendor"/>
                                        </div>
                                        <div class="inner">
                                            <h3 class="title">Botanic Natural Product<span class="open">open</span></h3>
                                            <div class="stars-area">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <span>4.50 out of 5</span>
                                            </div>
                                            <div class="location">
                                                <i class="fa-light fa-location-dot"></i>
                                                <p>530 Post Ct  El Dorado Hills
                                                    California ,United States</p>
                                            </div>
                                            <div class="location">
                                                <i class="fa-solid fa-phone-volume"></i>
                                                <p>+1 (511) 934-8170
                                                </p>
                                            </div>
                                            <a href="vendor-details.html" class="rts-btn btn-primary radious-sm with-icon">
                                                <div class="btn-text">
                                                    Visit Store
                                                </div>
                                                <div class="arrow-icon">
                                                    <i class="fa-light fa-arrow-right"></i>
                                                </div>
                                                <div class="arrow-icon">
                                                    <i class="fa-light fa-arrow-right"></i>
                                                </div>
                                            </a>
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
export default VendorGrid;