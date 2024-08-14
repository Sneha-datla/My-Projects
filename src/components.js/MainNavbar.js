import React from 'react';
import PagesDetails from './PagesDetail';
import BlogsDetails from './BlogsDetails';
import { Link } from 'react-router-dom';

const MainNavbar = () => {
  return (
    <div className="rts-header-nav-area-one header--sticky">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="nav-and-btn-wrapper">
              <div className="nav-area">
                <nav>
                  <ul className="parent-nav">
                    <li className="parent has-dropdown">
                      <a className="nav-link" href="#">Home</a>
                      <ul className="submenu">
                        <li><Link  to="/" className="sub-b">Home One</Link></li>
                        <li><Link to="/hometwo" className="sub-b">Home Two</Link></li>
                        <li><Link  to="/homethree" className="sub-b">Home Three</Link></li>
                        <li><Link  to="/homefour" className="sub-b">Home Four</Link></li>
                        <li><Link  to="/homefive" className="sub-b">Home Five</Link></li>
                      </ul>
                    </li>
                    <li className="parent"><Link to='/about'>About</Link></li>
                    <li className="parent with-megamenu">
                      <a href="#">Shop</a>
                     
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
                              <a href="shop-grid-sidebar.html" className="feature-add-megamenu-area">
                                <img src="images/feature/05.jpg" alt="feature_product" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>   
                    </li>
                    <li className="parent has-dropdown">
                      <a className="nav-link" href="#">Vendors</a>
                      <ul className="submenu">
                        <li><Link className="sub-b" to="/vendorslist">Vendor List</Link></li>
                        <li><Link className="sub-b" to="/vendorgrid">Vendor Grid</Link></li>
                        <li><Link className="sub-b" to="/vendordetail">Vendor Details</Link></li>
                      </ul>
                    </li>
                    <li className="parent has-dropdown">
                      <a className="nav-link" href="#">Pages</a>
                      <PagesDetails></PagesDetails>
                    </li>
                    <li className="parent has-dropdown">
                      <a className="nav-link" href="#">Blog</a>
                     <BlogsDetails></BlogsDetails>
                    </li>
                    <li className="parent"><Link to="/contact">Contact</Link></li>
                  </ul>
                </nav>
              </div>
              <div className="right-btn-area">
                <a href="#" className="btn-narrow">Trending Products</a>
                <button className="rts-btn btn-primary">
                  Get 30% Discount Now
                  <span>Sale</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
