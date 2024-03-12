import React from "react";
import discount from '../../Assets/discount.png'

function Discount() {
  return <div>
     {/* <!-- Start Discount --> */}
    <div className="discount" id="discount">
        <div className="image">
            <div className="content">
                <h2>Connect with us</h2>
                <p>Our dear customer, we are very interested in communicating with us to express your opinion and evaluate the service provided, This helps us in developing and correcting errors.</p>
                <img src={discount} alt=""/>
            </div>
        </div>
        <div className="form">
            <div className="content">
                <h2>Connect with us</h2>
                <form action="">
                    <input className="input" type="text" placeholder="Your Name" name="name" />
                    <input className="input" type="email" placeholder="Your Email" name="email" />
                    <input className="input" type="text" placeholder="Your Phone" name="mobile" />
                    <textarea className="input" placeholder="Tell Us About Your Needs" name="message"></textarea>
                    <input type="submit" value="Send" />
                </form>
            </div>
        </div>
    </div>
    {/* <!-- End Discount --> */}
  </div>;
}

export default Discount;
