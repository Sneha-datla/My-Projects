import React from 'react';

const Footer = () => {
    return (
        <div>
        <div className="rts-footer-area pt--80 bg_light-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer-main-content-wrapper pb--70 pb_sm--30">
                            {/* single footer area wrapper */}
                            <div className="single-footer-wized">
                                <h3 className="footer-title">About Company</h3>
                                <div className="call-area">
                                    <div className="icon">
                                        <i className="fa-light fa-phone-rotary"></i>
                                    </div>
                                    <div className="info">
                                        <span>Have Question? Call Us 24/7</span>
                                        <a href="#" className="number">+258 3692 2569</a>
                                    </div>
                                </div>
                                <div className="opening-hour">
                                    <div className="single">
                                        <p>Monday - Friday: <span>8:00am - 6:00pm</span></p>
                                    </div>
                                    <div className="single">
                                        <p>Saturday: <span>8:00am - 6:00pm</span></p>
                                    </div>
                                    <div className="single">
                                        <p>Sunday: <span>Service Close</span></p>
                                    </div>
                                </div>
                            </div>
                            {/* single footer area wrapper */}
                            {/* single footer area wrapper */}
                            <div className="single-footer-wized">
                                <h3 className="footer-title">Our Stores</h3>
                                <div className="footer-nav">
                                    <ul>
                                        <li><a href="#">Delivery Information</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Terms & Conditions</a></li>
                                        <li><a href="#">Support Center</a></li>
                                        <li><a href="#">Careers</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* single footer area wrapper */}
                            {/* single footer area wrapper */}
                            <div className="single-footer-wized">
                                <h3 className="footer-title">Shop Categories</h3>
                                <div className="footer-nav">
                                    <ul>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Information</a></li>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Careers</a></li>
                                        <li><a href="#">Nest Stories</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* single footer area wrapper */}
                            {/* single footer area wrapper */}
                            <div className="single-footer-wized">
                                <h3 className="footer-title">Useful Links</h3>
                                <div className="footer-nav">
                                    <ul>
                                        <li><a href="#">Cancellation & Returns</a></li>
                                        <li><a href="#">Report Infringement</a></li>
                                        <li><a href="#">Payments</a></li>
                                        <li><a href="#">Shipping</a></li>
                                        <li><a href="#">FAQ</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* single footer area wrapper */}
                            {/* single footer area wrapper */}
                            <div className="single-footer-wized">
                                <h3 className="footer-title">Our Newsletter</h3>
                                <p className="disc-news-letter">
                                    Subscribe to the mailing list to receive updates on <br /> the new arrivals and other discounts
                                </p>
                                <form className="footersubscribe-form" action="#">
                                    <input type="email" placeholder="Your email address" required />
                                    <button className="rts-btn btn-primary">Subscribe</button>
                                </form>

                                <p className="dsic">
                                    I would like to receive news and special offers
                                </p>
                            </div>
                            {/* single footer area wrapper */}
                        </div>
                        <div className="social-and-payment-area-wrapper">
                            <div className="social-one-wrapper">
                                <span>Follow Us:</span>
                                <ul>
                                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-whatsapp"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                </ul>
                            </div>
                            <div className="payment-access">
                                <span>Payment Accepts:</span>
                                <img src="images/payment/01.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="rts-copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="copyright-between-1">
                            <p className="disc">
                                Copyright 2024 <a href="#">©Ekomart</a>. All rights reserved.
                            </p>
                            <a href="#" className="playstore-app-area">
                                <span>Download App</span>
                                <img src="assets/images/payment/02.png" alt="" />
                                <img src="assets/images/payment/03.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
      </div> 

          
    );
}

export default Footer;
