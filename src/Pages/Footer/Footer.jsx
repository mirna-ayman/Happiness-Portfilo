import React from "react";
import gallery1  from '../../Assets/gallery-01.png'
import gallery2  from '../../Assets/gallery-02.png'
import gallery3  from '../../Assets/gallery-03.jpg'
import gallery4  from '../../Assets/gallery-04.png'
import gallery5  from '../../Assets/gallery-05.jpg'
import gallery6  from '../../Assets/gallery-06.png'
import logo from '../../Assets/logo1.jpg'
import { Link } from "react-router-dom";

function Footer() {
  return <div>
     {/* <!-- Start Footer --> */}
    <div className="footer">
        <div className="container">
            <div className="box">
                <img src={logo} alt="logo" className="logo"/>
                {/* <h3>Google</h3> */}
                <ul className="social">
                    <li>
                        <a href="https://www.facebook.com/Happiness.Coders?mibextid=hIlR13" target="blank" className="facebook">
                            <i class="fab fa-facebook-square fa-2x"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/happiness-coders/" target="blank" className="linkedin">
                            <i class="fab fa-linkedin fa-2x"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/+0201029576647" target="blank" className="whatsapp">
                            <i class="fab fa-whatsapp fa-2x"></i>
                        </a>
                    </li>
                </ul>
                <p className="text">
                    You can get to know us more through our pages on social media or via the WhatsApp service
                </p>
            </div>
            <div className="box">
                <ul className="links">
                    <li><i className="fa fa-angle-double-right"></i><Link to="/"  alt=''>Home</Link></li>
                    <li><i className="fa fa-angle-double-right"></i><Link to="/services"  alt=''>Services</Link></li>
                    <li><i className="fa fa-angle-double-right"></i><Link to="/portfolio"  alt=''>Portfolio</Link></li>
                    <li><i className="fa fa-angle-double-right"></i><Link to="/event"  alt=''>Event</Link></li>
                    <li><i className="fa fa-angle-double-right"></i><Link to="/contact"  alt=''>Contact</Link></li>
                </ul>
            </div>
            <div className="box">
                <div className="line">
                    <i class="fas fa-map-marked-alt"></i>
                    <div className="info">Egypt, Cairo </div>
                </div>
                <div className="line">
                    <i class="fas fa-clock"></i>
                    <div className="info">Business Hours: From 90:00 AM href 9:00 PM</div>
                </div>
                <div className="line">
                    <i className="fa fa-phone fa-fw"></i>
                    <div className="info">
                        <span>+201029576647</span>
                    </div>
                </div>
            </div>
            <div className="box footer-gallery">
                <img src={gallery1} alt="" />
                <img src={gallery2} alt="" />
                <img src={gallery3} alt="" />
                <img src={gallery4} alt="" />
                <img src={gallery5} alt="" />
                <img src={gallery6} alt="" />
            </div>
        </div>
        <p className="copyright">Made With @ By Ahmed Gamal</p>
    </div>
    {/* <!-- End Footer --> */}
  </div>;
}

export default Footer;
