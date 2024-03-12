import React from "react";
import imgData from '../../Data/Gallery';

function Gallerys() {
  return <div>
    {/* <!-- Start Gallery --> */}
    <div className="gallery" id="gallery">
        <h2 className="main-title">Gallery</h2>
        <div className="container">
            {
                imgData.map((item,index) => {
                    return (
                        <div key={index} className="box">
                            <div className="image">
                                <img src={item.image} alt=""/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
    {/* <!-- End Gallery --> */}
  </div>;
}

export default Gallerys;
