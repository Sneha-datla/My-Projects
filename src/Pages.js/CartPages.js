import React from 'react';
import MainNavbar from '../components.js/MainNavbar';

const CartPages = () => {
  return (
    <>
    <MainNavbar></MainNavbar>
      <div className="rts-navigation-area-breadcrumb bg_light-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="navigator-breadcrumb-wrapper">
                <a href="index-2.html">Home</a>
                <i className="fa-light fa-chevron-right"></i>
                <a className="current" href="index-2.html">Blog Lists With Sidebar</a>
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

      <div className="rts-cart-area rts-section-gap bg_light-1">
        <div className="container">
          <div className="row g-5">
            <div className="col-xl-9 col-lg-12 col-md-12 col-12 order-2 order-xl-1 order-lg-2 order-md-2 order-sm-2">
              <div className="cart-area-main-wrapper">
                <div className="cart-top-area-note">
                  <p>Add <span>$59.69</span> to cart and get free shipping</p>
                  <div className="bottom-content-deals mt--10">
                    <div className="single-progress-area-incard">
                      <div className="progress">
                        <div className="progress-bar wow fadeInLeft" role="progressbar" style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rts-cart-list-area">
                <div className="single-cart-area-list head">
                  <div className="product-main">
                    <p>Products</p>
                  </div>
                  <div className="price">
                    <p>Price</p>
                  </div>
                  <div className="quantity">
                    <p>Quantity</p>
                  </div>
                  <div className="subtotal">
                    <p>SubTotal</p>
                  </div>
                </div>
                {/** Sample cart item starts */}
                <div className="single-cart-area-list main item-parent">
                  <div className="product-main-cart">
                    <div className="close section-activation">
                      <i className="fa-regular fa-x"></i>
                    </div>
                    <div className="thumbnail">
                      <img src="images/shop/02.png" alt="shop" />
                    </div>
                    <div className="information">
                      <h6 className="title">SunChips Minis, Garden Salsa Flavored Canister, Multigrain Chips</h6>
                      <span>SKU:BG-1001</span>
                    </div>
                  </div>
                  <div className="price">
                    <p>$550.00</p>
                  </div>
                  <div className="quantity">
                    <div className="quantity-edit">
                      <input type="text" className="input" value="1" />
                      <div className="button-wrapper-action">
                        <button className="button"><i className="fa-light fa-chevron-down"></i></button>
                        <button className="button plus">+<i className="fa-light fa-chevron-up"></i></button>
                      </div>
                    </div>
                  </div>
                  <div className="subtotal">
                    <p>$550.00</p>
                  </div>
                </div>
                {/** Sample cart item ends */}
                <div className="bottom-cupon-code-cart-area">
                  <form action="#">
                    <input type="text" placeholder="Cupon Code" />
                    <button className="rts-btn btn-primary">Apply Coupon</button>
                  </form>
                  <a href="#" className="rts-btn btn-primary mr--50">Clear All</a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-12 col-md-12 col-12 order-1 order-xl-2 order-lg-1 order-md-1 order-sm-1">
              <div className="cart-total-area-start-right">
                <h5 className="title">Cart Totals</h5>
                <div className="subtotal">
                  <span>Subtotal</span>
                  <h6 className="price">$1100.00</h6>
                </div>
                <div className="shipping">
                  <span>Shipping</span>
                  <ul>
                    <li>
                      <input type="radio" id="f-option" name="selector" />
                      <label htmlFor="f-option">Free Shipping</label>
                      <div className="check"></div>
                    </li>
                    <li>
                      <input type="radio" id="s-option" name="selector" />
                      <label htmlFor="s-option">Flat Rate</label>
                      <div className="check"><div className="inside"></div></div>
                    </li>
                    <li>
                      <input type="radio" id="t-option" name="selector" />
                      <label htmlFor="t-option">Local Pickup</label>
                      <div className="check"><div className="inside"></div></div>
                    </li>
                    <li>
                      <p>Shipping options will be updated during checkout</p>
                      <p className="bold">Calculate Shipping</p>
                    </li>
                  </ul>
                </div>
                <div className="bottom">
                  <div className="wrapper">
                    <span>Subtotal</span>
                    <h6 className="price">$1100.00</h6>
                  </div>
                  <div className="button-area">
                    <button className="rts-btn btn-primary">Proceed To Checkout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        
    </>
  );
}

export default CartPages;
