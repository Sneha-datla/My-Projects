import React from "react";
const Invoice=()=>{
    return(
        <div>
<div className="rts-invoice-style-one">
  <div className="container-2">
    <div className="row">
      <div className="col-lg-12">
        <div className="invoice-main-wrapper-1">
          <div className="logo-top-area">
            <div className="logo">
              <img src="images/logo/logo-01.svg" alt="logo" />
            </div>
            <div className="invoice-location">
              <h6 className="title">Invoice</h6>
              <span className="number">0152646678</span>
              <span className="email">info@reactheme.com</span>
              <span className="website">https://reacthemes.com/</span>
            </div>
          </div>
          <div className="invoice-banner bg_image"></div>
          <div className="invoice-center-rts">
            <div className="table-responsive">
              <table className="table table-striped invoice-table">
                <thead className="bg-active">
                  <tr>
                    <th>Item Item</th>
                    <th className="text-center">Unit Price</th>
                    <th className="text-center">Quantity</th>
                    <th className="text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="item-desc-1">
                        <span>Field Roast Chao Cheese Creamy Original</span>
                        <small>SKU: FWM15VKT</small>
                      </div>
                    </td>
                    <td className="text-center">$10.99</td>
                    <td className="text-center">1</td>
                    <td className="text-right">$10.99</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="item-desc-1">
                        <span>Blue Diamond Almonds Lightly Salted</span>
                        <small>SKU: FWM15VKT</small>
                      </div>
                    </td>
                    <td className="text-center">$20.00</td>
                    <td className="text-center">3</td>
                    <td className="text-right">$60.00</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="item-desc-1">
                        <span>Fresh Organic Mustard Leaves Bell Pepper</span>
                        <small>SKU: KVM15VK</small>
                      </div>
                    </td>
                    <td className="text-center">$640.00</td>
                    <td className="text-center">1</td>
                    <td className="text-right">$640.00</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="item-desc-1">
                        <span>All Natural Italian-Style Chicken Meatballs</span>
                        <small>SKU: 98HFG</small>
                      </div>
                    </td>
                    <td className="text-center">$240.00</td>
                    <td className="text-center">1</td>
                    <td className="text-right">$240.00</td>
                  </tr>
                  <tr>
                    <td colSpan="3" className="text-end f-w-600">SubTotal</td>
                    <td className="text-right">$1710.99</td>
                  </tr>
                  <tr>
                    <td colSpan="3" className="text-end f-w-600">Tax</td>
                    <td className="text-right">$85.99</td>
                  </tr>
                  <tr>
                    <td colSpan="3" className="text-end f-w-600">Grand Total</td>
                    <td className="text-right f-w-600">$1795.99</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="invoice-area-bottom">
            <div className="powerby">
              <p>Powerby</p>
              <img src="images/logo/fav.png" alt="" />
            </div>
            <p>Note: This is a computer-generated receipt and does not require a physical signature.</p>
          </div>
        </div>
        <div className="buttons-area-invoice no-print mb--30">
          <a href="javascript:window.print()" className="rts-btn btn-primary radious-sm with-icon">
            <div className="btn-text">Print Now</div>
            <div className="arrow-icon">
              <i className="fa-light fa-print"></i>
            </div>
            <div className="arrow-icon">
              <i className="fa-light fa-print"></i>
            </div>
          </a>
          <a href="images/invoice/invoice.pdf" download className="rts-btn btn-primary radious-sm with-icon">
            <div className="btn-text">Download</div>
            <div className="arrow-icon">
              <i className="fa-thin fa-download"></i>
            </div>
            <div className="arrow-icon">
              <i className="fa-thin fa-download"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    );
};
export default Invoice;