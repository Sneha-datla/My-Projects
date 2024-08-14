import React from "react";
import { Link } from "react-router-dom";
const ErrorPage =()=>{
    return(
        <div>
  <div class="error-area-main-wrapper rts-section-gap2">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="error-main-wrapper">
                        <div class="thumbnail">
                            <img src="images/contact/01.png" alt="error"/>
                        </div>
                        <div class="content-main">
                            <h2 class="title">This Page Can’t Be Found</h2>
                            <p>Sorry, we couldn't find the page you where looking for. We suggest that you return to homepage.</p>
                            <Link to="/" class="rts-btn btn-primary">Back To Homepage</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
};
export default ErrorPage;