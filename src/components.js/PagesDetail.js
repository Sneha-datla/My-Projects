import React from "react";
import { Link } from "react-router-dom";
const PagesDetails =()=>{
   return (
    <div>
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
    </div>

    );
};
export default PagesDetails;