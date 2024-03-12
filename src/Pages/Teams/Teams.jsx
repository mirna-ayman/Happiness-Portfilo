import React from "react";
import data from '../../Data/Teams'

function Teams() {
  return <div>
     {/* <!-- Start Teams --> */}
    <div className="teams" id="team">
        <h2 className="main-title">Our Teams</h2>
        <div className="container">
            {
                data.map((item,index) => {
                    return (
                        <div className="box" key={index}>
                            <div className="data">
                                <img src={item.image} alt=""/>
                                <div className="social">
                                    <p>H</p><p>a</p><p>p</p><p>p</p><p>i</p><p>n</p><p>e</p><p>s</p><p>s</p>
                                </div>
                            </div>
                            <div className="info">
                                <h3>{item.name}</h3>
                                <p>{item.job}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
    <div className="spikes"></div>
    {/* <!-- End Teams --> */}
  </div>;
}

export default Teams;
