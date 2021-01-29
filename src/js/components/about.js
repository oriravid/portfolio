//ext
import React from "react";
//int - util
import * as HELPERS from "../utils/helpers";
import * as ICONS from "../utils/icons";

const About = () => {
    return (
        <div className="section" id="about">
            <div id="about-background">
                {[1, 2, 3, 4, 5].map((num) => (
                    <div
                        key={num}
                        className="slice"
                        style={{ animationDelay: `${num * 0.2}s` }}
                    ></div>
                ))}
            </div>
            <div className="section-inner">
                <img
                    id="about-image"
                    src="https://avatars.githubusercontent.com/u/71371489?s=460&u=0d99ba3b21759743f7b3e50716473e59027a4141&v=4"
                />
                <h1>Ori Ravid</h1>
                <p id="about-content">
                    A software engineer with an extensive audio engineering
                    background.
                </p>
            </div>
        </div>
    );
};

export default About;
