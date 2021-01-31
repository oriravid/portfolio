//ext
import React from "react";
//int - util
import * as HELPERS from "../utils/helpers";
import * as ICONS from "../utils/icons";

const About = () => {
    return (
        <div className="section" id="about">
            <div className="section-inner">
                <div className="section-header">
                    <h2 className="section-title">About</h2>
                </div>
                <p>
                    Hi, I’m Ori! <br />
                    I’m a software engineer with an extensive audio engineering
                    background. <br />
                    My skillset in software engineering has primarily been
                    focused on frontend development via React, JavaScript, CSS3,
                    and HTML5, though I am always happy to dive into the backend
                    of a project and work on organized, efficient data flow.{" "}
                    <br />
                    In conjunction, I’ve logged countless hours in both
                    large-scale recording facilities and small project studios,
                    polishing my knowledge in audio recording, editing, and
                    processing in the analog/digital domains. <br />
                    My experience in these two fields has fueled my passion to
                    take part in media related projects that strive for
                    excellence in design, UX/UI, and functionality.
                </p>
                <iframe
                    src="https://snapwidget.com/embed/265181"
                    className="snapwidget-widget"
                    allowtransparency="true"
                    frameBorder="0"
                    scrolling="no"
                ></iframe>
            </div>
        </div>
    );
};

export default About;
