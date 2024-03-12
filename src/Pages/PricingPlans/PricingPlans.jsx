import React from "react";
import hosting1 from '../../Assets/web.png'
import hosting2 from '../../Assets/mobile-app.png'
import hosting3 from '../../Assets/ui-ux.png'

function PricingPlans() {
  return <div>
    {/* <!-- Start Pricing Plans --> */}
    <div class="pricing" id="pricing">
        <div class="dots dots-up"></div>
        <div class="dots dots-down"></div>
        <h2 class="main-title">Pricing Plans</h2>
        <div class="container">
            <div class="box popular">
                <div class="label">Most Popular</div>
                <div class="title">Websites</div>
                <img src={hosting1} alt="" />
                <div class="price">
                    <span class="amount">10% </span>
                    <span class="time">Special Offer</span>
                </div>
                <ul>
                    <li><i class="fa fa-check"></i> Professional and smooth website</li>
                    <li> <i class="fa fa-check"></i> A control panel to control the entire site</li>
                    <li><i class="fa fa-check"></i> Fully responsive website</li>
                    <li><i class="fa fa-check"></i> Professional and creative design</li>
                    <li><i class="fa fa-check"></i> Advanced Support</li>
                </ul>
                {/* <a href="#">Choose Plan</a> */}
            </div>
            <div class="box popular">
                <div class="label">Most Popular</div>
                <div class="title">Mobile Application</div>
                <img src={hosting2} alt="" />
                <div class="price">
                    <span class="amount">10%</span>
                    <span class="time">Special Offer</span>
                </div>
                <ul>
                    <li><i class="fa fa-check"></i> Application available on IOS, Android</li>
                    <li><i class="fa fa-check"></i> A panel to control the application</li>
                    <li><i class="fa fa-check"></i> Easy handling and attractiveness</li>
                    {/* <li><i class="fa fa-check"></i> 8 Databases</li> */}
                    <li><i class="fa fa-check"></i> Advanced Support</li>
                </ul>
                {/* <a href="#">Choose Plan</a> */}
            </div>
            <div class="box popular">
                <div class="label">Most Popular</div>
                <div class="title">UI/UX</div>
                <img src={hosting3} alt="" />
                <div class="price">
                    <span class="amount">10%</span>
                    <span class="time">Special Offer</span>
                </div>
                <ul>
                    <li><i class="fa fa-check"></i> Professionalism in design</li>
                    <li><i class="fa fa-check"></i> Creativity in choosing harmonious colors</li>
                    <li><i class="fa fa-check"></i>Unique and distinctive brands</li>
                    <li><i class="fa fa-check"></i> An attractive website or application</li>
                    <li><i class="fa fa-check"></i>Professional Support</li>
                </ul>
                {/* <a href="#">Choose Plan</a> */}
            </div>
        </div>
    </div>
    {/* <!-- End Pricing Plans --> */}
  </div>;
}

export default PricingPlans;
