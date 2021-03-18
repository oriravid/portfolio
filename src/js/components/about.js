//ext
import React from "react";
//int - images
import about_bg from "../../imgs/about3.png";

const About = () => {
    return (
        <div
            className="section"
            id="about"
            style={{ backgroundImage: `url(${about_bg})` }}
        >
            <div className="section-inner">
                <h3>Hello, I’m Ori</h3>
                <p className="about-text">
                    I’m a software engineer with an audio engineering
                    background.
                </p>
                <p className="about-text">
                    My skillset in software engineering has primarily been
                    focused on frontend development via React, JavaScript, CSS,
                    and HTML, though I am always happy to dive into the backend
                    of a project and work on organized, efficient data flow.
                </p>
                <p className="about-text">
                    In conjunction, I’ve logged countless hours in both
                    large-scale recording facilities and small project studios,
                    polishing my knowledge in audio recording, editing, and
                    processing in the analog/digital domains.{" "}
                </p>
                <p className="about-text">
                    My experience in these two fields has fueled my passion to
                    take part in media related projects that strive for
                    excellence in design, UX/UI, and functionality.
                </p>
            </div>
            <div id="about-banner">
                <div id="about-banner-inner">
                    <h1>Let's make something beautiful together.</h1>
                    <ul id="about-links">
                        <li>
                            <a href="mailto:ori@oriravid.com">EMail</a>
                        </li>
                        <li>•</li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/oriravid/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li>•</li>
                        <li>
                            <a
                                href="https://github.com/oriravid"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                        </li>
                        <li>•</li>
                        <li>
                            <a
                                href="https://www.instagram.com/oriravid/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
