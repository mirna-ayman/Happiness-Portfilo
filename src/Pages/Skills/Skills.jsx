import React from "react";
import skills from '../../Assets/skills.png'

function Skills() {
  return <div>
    {/* <!-- Start Our Skills --> */}
    <div className="our-skills" id="our-skills">
        {/* <h2 className="main-title">Our Skills</h2> */}
        <div className="container">
            <img src={skills} alt=""/>
            <div className="skills">
                <div className="skill">
                    <h3>UI/UX <span>100%</span></h3>
                    <div className="the-progress">
                        <span style={{width: "100%"}}></span>
                    </div>
                </div>
                <div className="skill">
                    <h3>Front-End <span>100%</span></h3>
                    <div className="the-progress">
                        <span style={{width: "100%"}}></span>
                    </div>
                </div>
                <div className="skill">
                    <h3>Back-End <span>100%</span></h3>
                    <div className="the-progress">
                        <span style={{width: "100%"}}></span>
                    </div>
                </div>
                <div className="skill">
                    <h3>Android , IOS <span>100%</span></h3>
                    <div className="the-progress">
                        <span style={{width: "100%"}}></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="spikes"></div>
    {/* <!-- End Our Skills --> */}
  </div>;
}

export default Skills;
