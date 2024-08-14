import React from "react";
const VendorDetail=()=>{
    return(
<div>
<div class="rts-navigation-area-breadcrumb">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="navigator-breadcrumb-wrapper">
                        <a href="index-2.html">Home</a>
                        <i class="fa-light fa-chevron-right"></i>
                        <a class="current" href="index-2.html">Food Forulard</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="section-seperator">
        <div class="container">
            <hr class="section-seperator"/>
        </div>
    </div>

    <div class="vendor-name">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="vendor-name-area-details">
                        <h1 class="title">Food Forulard</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="store-details-area rts-section-gap">
        <div class="container">
            <div class="row">
                <div class="col-xl-3 col-lg-12 pr--60 pr_md--10 pr_sm--10">
                    <div class="filter-area-vendor-details">
                        <div class="single-filter-box">
                            <h5 class="title">Product Categories</h5>
                            <div class="filterbox-body">
                                <div class="category-wrapper">
                                   
                                    <div class="single-category">
                                        <input id="cat1" type="checkbox"/>
                                        <label for="cat1">Beverages
                                        </label>
                                    </div>
                                   
                                    <div class="single-category">
                                        <input id="cat2" type="checkbox"/>
                                        <label for="cat2">Biscuits &amp; Snacks

                                        </label>
                                    </div>
                                    
                                    <div class="single-category">
                                        <input id="cat3" type="checkbox"/>
                                        <label for="cat3">Breads &amp; Bakery            
                                        </label>
                                    </div>
                                    
                                    <div class="single-category">
                                        <input id="cat4" type="checkbox"/>
                                        <label for="cat4">Breakfast &amp; Dairy
                                        </label>
                                    </div>
                                   
                                    <div class="single-category with-more">
                                        <input id="cat5" type="checkbox"/>
                                        <label for="cat5">Frozen Foods

                                        </label>
                                    </div>
                                   
                                    <div class="single-category">
                                        <input id="cat6" type="checkbox"/>
                                        <label for="cat6">Fruits &amp; Vegetables

                                        </label>
                                    </div>
                                    
                                    <div class="single-category with-more">
                                        <input id="cat7" type="checkbox"/>
                                        <label for="cat7">Grocery &amp; Staples
                                            
                                        </label>
                                    </div>
                           
                                    <div class="single-category">
                                        <input id="cat8" type="checkbox"/>
                                        <label for="cat8">Household Needs

                                        </label>
                                    </div>
                                   
                                    <div class="single-category">
                                        <input id="cat10" type="checkbox"/>
                                        <label for="cat10">Meats &amp; Seafood

                                        </label>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        <div class="single-filter-box">
                            <h5 class="title">Store Time</h5>
                            <div class="filterbox-body vendor-time-opening">
                                <h6 class="title-opeing">Open Hours</h6>
                                <span class="single-opening-hour">
                                   <span class="day"> Mon </span>            :   8:00 am     -   10:00 pm
                                </span>
                                <span class="single-opening-hour">
                                    <span class="day">Tue   </span>           :   8:00 am     -   10:00 pm
                                </span>
                                <span class="single-opening-hour">
                                    <span class="day">Wed  </span>           :   8:00 am    -   10:00 pm
                                </span>
                                <span class="single-opening-hour">
                                    <span class="day">Thu    </span>          :   8:00 am     -  10:00 pm
                                </span>
                                <span class="single-opening-hour">
                                    <span class="day">Fri    </span>            :   8:00 am     -   10:00 pm
                                </span>
                                <span class="single-opening-hour">
                                   <span class="day"> Sat    </span>           :   8:00 am     -  10:00 pm
                                </span>
                                <span class="single-opening-hour">
                                    <span class="day">Sun  </span>            :  <span> Off Day</span>
                                </span>
                            </div>
                        </div>
                        <div class="single-filter-box">
                            <h5 class="title">Contact Vendor</h5>
                            <div class="filterbox-body vendor-contact-info-wrapper">
                                <form action="#">
                                    <input type="text" placeholder="Your Name" required/>
                                    <input type="text" placeholder="Email Address"/>
                                    <input type="text" placeholder="Type Message"/>
                                    <button class="rts-btn btn-primary">Submit Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-9 col-lg-12 mt-lg--30">
                    <div class="vendor-details-banner--area">
                        <div class="row g-5">
                            <div class="col-lg-3">
                                <div class="vendor-banner-left">
                                    <img src="images/vendor/09.svg" alt="vendor"/>
                                    <div class="header-area">
                                        <h4 class="title">Food Forulard <span>Open</span></h4>
                                    </div>
                                    <div class="stars-area">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <span>(4.50 out of 5)</span>
                                    </div>
                                    <div class="location">
                                        <i class="fa-regular fa-location-dot"></i>
                                        <p>530 Post Ct  El Dorado Hills
                                            California ,United States</p>
                                    </div>
                                    <div class="location">
                                        <i class="fa-regular fa-phone-volume"></i>
                                        <p>+1 (511) 934-8170
                                        </p>
                                    </div>
                                    <div class="location">
                                        <i class="fa-regular fa-cart-shopping"></i>
                                        <p>3214 Product Available 
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-9">
                                <div class="banner-vendor-details bg_image">
                                    <div class="content-area">
                                        <a href="#" class="rts-btn btn-primary">Weekend Discount</a>
                                        <h3 class="title animated fadeIn">
                                            Drink Fresh Corn Juice <br/>
                                            <span>Good Taste</span>
                                        </h3>
                                        <a href="#" class="shop-now-goshop-btn">
                                            <span class="text">Shop Now</span>
                                            <div class="plus-icon">
                                                <i class="fa-sharp fa-regular fa-plus"></i>
                                            </div>
                                            <div class="plus-icon">
                                                <i class="fa-sharp fa-regular fa-plus"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="product-area-add-wrapper bg_image">
                                <h2 class="title">Products</h2>
                                <img src="images/vendor/01.png" alt="" class="one"/>
                                <img src="images/vendor/02.png" alt="" class="two"/>
                            </div>
                        </div>
                    </div>
                    <div class="row mt--50 ml-v-dec-m">
                        <div class="col-lg-12">
                            <div class="product-filter-area-vendors-details">
                                <div class="search-area">
                                    <form action="#" class="search-header">
                                        <input type="text" placeholder="Enter Product Name" required/>
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
                                <div className="single-select">
  <select>
    <option value="all">All Categories</option>
    <option value="1">Some option</option>
    <option value="2">Another option</option>
    <option value="3" disabled>A disabled option</option>
    <option value="4">Potato</option>
  </select>
</div>


                            </div>
                        </div>
                    </div>
                    <div class="row g-4 ml-v-dec-m mt--40">
                        <div class="col-lg-4 col-md-6">
                            <div class="single-shopping-card-one tranding-product">
                                <a href="shop-details.html" class="thumbnail-preview">
                                    <img src="images/grocery/08.jpg" alt="grocery"/>
                                </a>
                                <div class="body-content">
                                    <div class="time-tag">
                                        <i class="fa-light fa-clock"></i>
                                        9 MINS
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 class="title">Pastine Mellin Filid Angelo 100% Di Grano Tenero</h4>
                                    </a>
                                    <span class="availability">500g Pack</span>
                                    <div class="price-area">
                                        <span class="current">$36.00</span>
                                        <div class="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-shopping-card-one tranding-product">
                                <a href="shop-details.html" class="thumbnail-preview">
                                    <img src="images/grocery/09.jpg" alt="grocery"/>
                                </a>
                                <div class="body-content">
                                    <div class="time-tag">
                                        <i class="fa-light fa-clock"></i>
                                        9 MINS
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 class="title">Pastine Mellin Filid Angelo 100% Di Grano Tenero</h4>
                                    </a>
                                    <span class="availability">500g Pack</span>
                                    <div class="price-area">
                                        <span class="current">$36.00</span>
                                        <div class="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-shopping-card-one tranding-product">
                                <a href="shop-details.html" class="thumbnail-preview">
                                    <img src="images/grocery/10.jpg" alt="grocery"/>
                                </a>
                                <div class="body-content">
                                    <div class="time-tag">
                                        <i class="fa-light fa-clock"></i>
                                        9 MINS
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 class="title">Pastine Mellin Filid Angelo 100% Di Grano Tenero</h4>
                                    </a>
                                    <span class="availability">500g Pack</span>
                                    <div class="price-area">
                                        <span class="current">$36.00</span>
                                        <div class="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-shopping-card-one tranding-product">
                                <a href="shop-details.html" class="thumbnail-preview">
                                    <img src="images/grocery/11.jpg" alt="grocery"/>
                                </a>
                                <div class="body-content">
                                    <div class="time-tag">
                                        <i class="fa-light fa-clock"></i>
                                        9 MINS
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 class="title">Pastine Mellin Filid Angelo 100% Di Grano Tenero</h4>
                                    </a>
                                    <span class="availability">500g Pack</span>
                                    <div class="price-area">
                                        <span class="current">$36.00</span>
                                        <div class="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-shopping-card-one tranding-product">
                                <a href="shop-details.html" class="thumbnail-preview">
                                    <img src="images/grocery/12.jpg" alt="grocery"/>
                                </a>
                                <div class="body-content">
                                    <div class="time-tag">
                                        <i class="fa-light fa-clock"></i>
                                        9 MINS
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 class="title">Pastine Mellin Filid Angelo 100% Di Grano Tenero</h4>
                                    </a>
                                    <span class="availability">500g Pack</span>
                                    <div class="price-area">
                                        <span class="current">$36.00</span>
                                        <div class="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-shopping-card-one tranding-product">
                                <a href="shop-details.html" class="thumbnail-preview">
                                    <img src="images/grocery/13.jpg" alt="grocery"/>
                                </a>
                                <div class="body-content">
                                    <div class="time-tag">
                                        <i class="fa-light fa-clock"></i>
                                        9 MINS
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 class="title">Pastine Mellin Filid Angelo 100% Di Grano Tenero</h4>
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
    );
};
export default VendorDetail;