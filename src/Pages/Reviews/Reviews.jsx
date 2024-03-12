import React from "react";
import data from '../../Data/Reviews'

function Reviews() {
  return <div>
     {/* <!-- Start Testimonials --> */}
    <div className="testimonials" id="reviews">
        <h2 className="main-title">Clients Reviews</h2>
        <div className="container">
            {
                data.map((item , index) => {
                    return (
                    <div className="box" key={index}>
                        <img src={item.image} alt=""/>
                        <h3>{item.name}</h3>
                        <span className="title">{item.address}</span>
                        <div className="rate">
                            <i className="filled fa fa-star"></i>
                            <i className="filled fa fa-star"></i>
                            <i className="filled fa fa-star"></i>
                            <i className="filled fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>{item.review} </p>
                    </div>
                    )
                })
            }
        </div>
    </div>
    {/* <!-- End Testimonials --> */}
  </div>;
}

export default Reviews;
