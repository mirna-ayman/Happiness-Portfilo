import React from "react";
import data from '../../Data/Projects'
import { Link } from "react-router-dom";

function ProjectsPage() {
  return <div>
     {/* <!-- Start Articles --> */}
    <div className="articles" id="articles">
        <h2 className="main-title">Our Projects</h2>
        <div className="container">
            {
                data.length > 0 ? (
                    data.map((item,index) => {
                        return (
                            <div key={index} className="box">
                                            <img src={item.image} alt=""/>
                                <div className="content">
                                    <h3>{item.title}</h3>
                                    <p>{item.shortDesc}</p>
                                </div>
                                    <Link to={`/projects-detalis/${item.id}`} target="blank">
                                <div className="info">
                                        More Detalis
                                    <i class="fas fa-long-arrow-alt-right"></i>
                                </div>
                                    </Link>
                            </div>
                        )
                    })
                ) : null
            }
        </div>
    </div>
<div className="spikes"></div>
    {/* <!-- End Articles --> */}
  </div>;
}

export default ProjectsPage;
