import React from "react";
import work from '../../Assets/work-steps.png'
import Works from '../../Data/Work'

function Work() {
  return <div>
    {/* <!-- Start Work Steps --> */}
    <div className="work-steps" id="work-steps">
        <h2 className="main-title">How It Works ?</h2>
        <div className="container">
            <img src={work} alt="" className="image"/>
            <div className="info">
                {
                    Works.map((item ,index) => {
                        return (
                        <div key={index} className="box">
                            <img src={item.image} alt=""/>
                            <div className="text">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
    {/* <!-- End  Work Steps --> */}
  </div>;
}

export default Work;
