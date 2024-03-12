import React from "react";
import data from '../../Data/Features';

function Features() {
  return <div>
     {/* <!-- Start Features --> */}
    <div className="features" id="features">
        <h2 className="main-title">Features</h2>
        <div className="container">
            {
                data.map((item,index) => {
                    return (
                        <div key={index} className={item.class}>
                            <div className="image-holder">
                                <img src={item.image} alt=""/>
                            </div>
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                            {/* <a href="##">More</a> */}
                        </div>
                    )
                })
            }
        </div>
    </div>
    <div className="spikes"></div>
    {/* <!-- End Features --> */}
  </div>;
}

export default Features;
