import React from "react";
import data from '../../Data/Services'

function Services() {
  return <div>
    {/* <!-- Start Services --> */}
    <div className="services" id="services">
        <h2 className="main-title">Services</h2>
        <div className="container">
            {
                data.map((item ,index) => {
                    return (
                    <div key={index} className="box">
                        <i className={item.iconClass}></i>
                        <h3>{item.title}</h3>
                        <div className="info">
                            {/* <a href="##">Details</a> */}
                        </div>
                    </div>
                    )
                })
            }
            
        </div>
    </div>
    {/* <!-- End Services --> */}
  </div>;
}

export default Services;
