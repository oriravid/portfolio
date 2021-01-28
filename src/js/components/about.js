//ext
import React, { useState } from "react";
//int - util
import * as HELPERS from "../utils/helpers";
import * as ICONS from "../utils/icons";

const About = () => {
    return (
        <div className="section" id="about">
            <div className="section-header">
                <div></div>
                <h2 className="section-title">ABOUT</h2>
            </div>
            <div className="about-inner">
                <div className="about-image">
                    <img src="https://avatars.githubusercontent.com/u/71371489?s=460&u=0d99ba3b21759743f7b3e50716473e59027a4141&v=4" />
                </div>
                <div className="about-content">
                    <p>
                        Hi, I’m Ori! I’m a software engineer with an extensive
                        audio engineering background. My skillset in software
                        engineering has primarily been focused on frontend
                        development via React, JavaScript, CSS3, and HTML5,
                        though I am always happy to dive into the backend of a
                        project and work on organized, efficient data flow. In
                        conjunction, I’ve logged countless hours in both
                        large-scale recording facilities and small project
                        studios, polishing my knowledge in audio recording,
                        editing, and processing in the analog/digital domains.
                        My experience in these two fields has fueled my passion
                        to take part in media related projects that strive for
                        excellence in design, UX/UI, and functionality.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
