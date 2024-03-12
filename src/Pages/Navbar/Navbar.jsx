import React from "react";
// import megamenu from '../../Assets/megamenu.png'
import logo from '../../Assets/logo2.jpg'
import { Link } from "react-router-dom";


function Navbar() {
  return <div>
      {/* <!-- Start Header --> */}
    <div className="header" id="header">
        <div className="container">
            <Link to="/" className="logo" >
                <img src={logo} alt="Logo" />
                Happiness Coders
            </Link>
            <ul className="main-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/event">Event</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                {/* <li> */}
                    {/* <a href="##">Other Links</a> */}
                    {/* <!-- Start Megamenu --> */}
                    {/* <div className="mega-menu">
                        <div className="image">
                            <img src={megamenu} alt="" />
                        </div>
                        <ul className="links">
                            <li>
                                <a href="#reviews"><i className="fas fa-comments fa-fw"></i>Clients Reviews</a>
                            </li>
                            <li>
                                <a href="#team"><i className="fas fa-user fa-fw"></i> Team Members</a>
                            </li>
                            <li>
                                <a href="#services"><i className="fas fa-building fa-fw"></i> Services</a>
                            </li>
                            <li>
                                <a href="#our-skills"><i className="fas fa-check-circle fa-fw"></i> Our Skills</a>
                            </li>
                            <li>
                                <a href="#work-steps"><i className="fas fa-clipboard fa-fw"></i> How It Works</a>
                            </li>
                        </ul>
                        <ul className="links">
                            <li>
                                <a href="#pricing"><i class="fa fa-server fa-fw"></i> Pricing Plans</a>
                            </li>
                            <li>
                                <a href="#events"><i className="fas fa-calendar fa-fw"></i> Events</a>
                            </li>
                            <li>
                                <a href="#stats"><i className="fas fa-chart-bar"></i> Stats</a>
                            </li>
                            <li>
                                <a href="#discount" ><i className="fas fa-percent fa-fw"></i> Request A Discount</a>
                            </li>
                        </ul>
                    </div> */}
                    {/* <!-- End Megamenu --> */}
                {/* </li> */}
            </ul>
        </div>
    </div>
    {/* <!-- End Header --> */}

  </div>
}

export default Navbar;
