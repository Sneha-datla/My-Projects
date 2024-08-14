import React from "react";
import { Link } from "react-router-dom";
const PrivacyPolicy = () => {
    return (
        <div>
            <div className="rts-navigation-area-breadcrumb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="navigator-breadcrumb-wrapper">
                                <a href="index-2.html">Home</a>
                                <i className="fa-light fa-chevron-right"></i>
                                <Link className="current" to="/">Privacy Policy</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-seperator">
                <div className="container">
                    <hr className="section-seperator" />
                </div>
            </div>

            <div className="rts-pricavy-policy-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="container-privacy-policy">
                                <h1 className="title mb--40">Privacy Policy</h1>
                                <p className="disc">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.
                                </p>
                                <p className="disc">
                                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                </p>
                                <p className="disc mb--15">
                                    All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                                </p>
                                <div className="section-list mt--40">
                                    <h2 className="title">Determination of personal information of users</h2>
                                    <ul>
                                        <li>
                                            <p>
                                                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="section-list mt--40">
                                    <h2 className="title">Reasons for collecting and processing user personal information</h2>
                                    <ul>
                                        <li>
                                            <p>
                                                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.
                                            </p>
                                        </li>
                                    </ul>
                                    <p
                                        className="disc mt--30"
                                        style={{ color: "#616164", fontWeight: 500 }}
                                    >
                                        All generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
