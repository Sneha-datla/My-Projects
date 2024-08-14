import React from 'react';
import { Link } from 'react-router-dom';
import MainNavbar from '../components.js/MainNavbar';


const AccountPage = () => {
  return (
    <div>
      <MainNavbar></MainNavbar>
      <div className="rts-navigation-area-breadcrumb">
        <div className="container-2">
          <div className="row">
            <div className="col-lg-12">
              <div className="navigator-breadcrumb-wrapper">
                <a href="index-2.html">Home</a>
                <i className="fa-solid fa-chevron-right"></i>
                <Link to='/' className="current" >Account</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="account-tab-area-start rts-section-gap">
        <div className="container-2">
          <div className="row">
            <div className="col-lg-3">
              <div className="nav accout-dashborard-nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                  <i className="fa-light fa-chart-line"></i> Dashboard
                </button>
                <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                  <i className="fa-light fa-bag-shopping"></i> Order
                </button>
                <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                  <i className="fa-sharp fa-light fa-tractor"></i> Track Your Order
                </button>
                <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                  <i className="fa-sharp fa-light fa-location-dot"></i> My Address
                </button>
                <button className="nav-link" id="v-pills-settingsa-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settingsa" type="button" role="tab" aria-controls="v-pills-settingsa" aria-selected="false">
                  <i className="fa-light fa-user"></i> Account Details
                </button>
                <button className="nav-link" id="v-pills-settingsb-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settingsb" type="button" role="tab" aria-controls="v-pills-settingsb" aria-selected="false">
                  <a href="login.html">
                    <i className="fa-light fa-right-from-bracket"></i> Log Out
                  </a>
                </button>
              </div>
            </div>
            <div className="col-lg-9 pl--50 pl_md--10 pl_sm--10 pt_md--30 pt_sm--30">
              <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex="0">
                  <div className="dashboard-account-area">
                    <h2 className="title">Hello Raisa! (Not Raisa?) <a href="login.html">Log Out.</a></h2>
                    <p className="disc">
                      From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.
                    </p>
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0">
                  <div className="order-table-account">
                    <div className="h2 title">Your Orders</div>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Order</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Total</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>#1357</td>
                            <td>March 45, 2020</td>
                            <td>Processing</td>
                            <td>$125.00 for 2 item</td>
                            <td><a href="#" className="btn-small d-block">View</a></td>
                          </tr>
                          <tr>
                            <td>#2468</td>
                            <td>June 29, 2020</td>
                            <td>Completed</td>
                            <td>$364.00 for 5 item</td>
                            <td><a href="#" className="btn-small d-block">View</a></td>
                          </tr>
                          <tr>
                            <td>#2366</td>
                            <td>August 02, 2020</td>
                            <td>Completed</td>
                            <td>$280.00 for 3 item</td>
                            <td><a href="#" className="btn-small d-block">View</a></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabIndex="0">
                  <div className="tracing-order-account">
                    <h2 className="title">Orders tracking</h2>
                    <p>
                      To keep up with the status of your order, kindly input your OrderID in the designated box below and click the "Track" button. This unique identifier can be found on your receipt as well as in the confirmation email that was sent to you.
                    </p>
                    <form action="#" className="order-tracking">
                      <div className="single-input">
                        <label htmlFor="order-id">Order Id</label>
                        <input type="text" placeholder="Found in your order confirmation email" required />
                      </div>
                      <div className="single-input">
                        <label htmlFor="order-id">Billing email</label>
                        <input type="text" placeholder="Email You use during checkout" />
                      </div>
                      <button className="rts-btn btn-primary">Track</button>
                    </form>
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabIndex="0">
                  <div className="shipping-address-billing-address-account">
                    <div className="half">
                      <h2 className="title">Billing Address</h2>
                      <p className="address">
                        3522 Interstate <br />
                        75 Business Spur, <br />
                        Sault Ste. <br />
                        Marie, MI 49783 <br />
                        New York
                      </p>
                      <a href="#">Edit</a>
                    </div>
                    <div className="half">
                      <h2 className="title">Shipping Address</h2>
                      <p className="address">
                        3522 Interstate <br />
                        75 Business Spur, <br />
                        Sault Ste. <br />
                        Marie, MI 49783 <br />
                        New York
                      </p>
                      <a href="#">Edit</a>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-settingsa" role="tabpanel" aria-labelledby="v-pills-settingsa-tab" tabIndex="0">
                  <form action="#" className="account-details-area">
                    <h2 className="title">Account Details</h2>
                    <div className="input-half-area">
                      <div className="single-input">
                        <input type="text" placeholder="First Name" />
                      </div>
                      <div className="single-input">
                        <input type="text" placeholder="Last Name" />
                      </div>
                    </div>
                    <input type="text" placeholder="Display Name" required />
                    <input type="email" placeholder="Email Address *" required />
                    <input type="email" placeholder="Email Address *" />
                    <input type="password" placeholder="Current Password *" required />
                    <input type="password" placeholder="New Password *" />
                    <input type="password" placeholder="Confirm Password *" />
                    <button className="rts-btn btn-primary">Save Change</button>
                  </form>
                </div>
                <div className="tab-pane fade" id="v-pills-settingsb" role="tabpanel" aria-labelledby="v-pills-settingsb-tab" tabIndex="0">
                  {/* Content for the last tab can go here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>

    
  );
};

export default AccountPage;
