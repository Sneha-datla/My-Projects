import React from 'react';
import CartHeader from './CartHeader';
import SearchBar from './SearchBar';

const HeaderMain = () => {
    return (
        <div className="search-header-area-main">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="logo-search-category-wrapper">
                            <a href="index-2.html" className="logo-area">
                                <img src="images/logo/logo-01.svg" alt="logo-main" className="logo" />
                            </a>
                            <div className="category-search-wrapper">
                                <div className="category-btn category-hover-header">
                                    <img className="parent" src="images/icons/bar-1.svg" alt="icons" />
                                    <span>Categories</span>
                                    <ul className="category-sub-menu" id="category-active-four">
                                        <li>
                                            <a href="#" className="menu-item">
                                                <img src='images/icons/bar-1.svg' alt="icons" />
                                                <span>Breakfast &amp; Dairy</span>
                                                <i className="fa-regular fa-plus"></i>
                                            </a>
                                            <ul className="submenu mm-collapse">
                                                <li><a className="mobile-menu-link" href="#">Breakfast</a></li>
                                                <li><a className="mobile-menu-link" href="#">Dinner</a></li>
                                                <li><a className="mobile-menu-link" href="#"> Pumking</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#" className="menu-item">
                                                <img src='images/icons/02.svg' alt="icons" />
                                                <span>Meats &amp; Seafood</span>
                                                <i className="fa-regular fa-plus"></i>
                                            </a>
                                            <ul className="submenu mm-collapse">
                                                <li><a className="mobile-menu-link" href="#">Breakfast</a></li>
                                                <li><a className="mobile-menu-link" href="#">Dinner</a></li>
                                                <li><a className="mobile-menu-link" href="#"> Pumking</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#" className="menu-item">
                                                <img src='images/icons/03.svg' alt="icons" />
                                                <span>Breads &amp; Bakery</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="menu-item">
                                                <img src='images/icons/04.svg' alt="icons" />
                                                <span>Chips &amp; Snacks</span>
                                                <i className="fa-regular fa-plus"></i>
                                            </a>
                                            <ul className="submenu mm-collapse">
                                                <li><a className="mobile-menu-link" href="#">Breakfast</a></li>
                                                <li><a className="mobile-menu-link" href="#">Dinner</a></li>
                                                <li><a className="mobile-menu-link" href="#"> Pumking</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#" className="menu-item">
                                                <img src='images/icons/05.svg' alt="icons" />
                                                <span>Medical Healthcare</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="menu-item">
                                                <img src='images/icons/06.svg' alt="icons" />
                                                <span>Breads &amp; Bakery</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="menu-item">
                                                <img src='images/icons/07.svg' alt="icons" />
                                                <span>Biscuits &amp; Snacks</span>
                                                <i className="fa-regular fa-plus"></i>
                                            </a>
                                            <ul className="submenu mm-collapse">
                                                <li><a className="mobile-menu-link" href="#">Breakfast</a></li>
                                                <li><a className="mobile-menu-link" href="#">Dinner</a></li>
                                                <li><a className="mobile-menu-link" href="#"> Pumking</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#" className="menu-item">
                                                <img src='images/icons/08.svg' alt="icons" />
                                                <span>Frozen Foods</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="menu-item">
                                                <img src='images/icons/09.svg' alt="icons" />
                                                <span>Grocery &amp; Staples</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="menu-item">
                                                <img src='images/icons/10.svg' alt="icons" />
                                                <span>Other Items</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                      <SearchBar></SearchBar>         
        </div>
        <CartHeader></CartHeader>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        
    );
};

export default HeaderMain;
