//ext
import React, { useState, useRef } from "react";
//int - util
import * as HELPERS from "../utils/helpers";
import * as ICONS from "../utils/icons";

const About = () => {
    const [scrollPos, setScrollPos] = useState(0);

    const root = document.getElementById("root");
    const section = useRef(null);

    root.addEventListener("scroll", () => {
        setScrollPos(root.scrollTop / section.current.offsetHeight);
    });

    return (
        <div className="section" id="about" ref={section}>
            <div id="about-background">
                {[1, 2, 3, 4, 5].map((num) => (
                    <div
                        key={num}
                        className="slice"
                        style={{ animationDelay: `${num * 0.2}s` }}
                    ></div>
                ))}
            </div>
            <div
                className="section-inner animated"
                style={{
                    transform: `translateY(-${
                        scrollPos * 100
                    }%) perspective(2000px) rotateX(${
                        120 * scrollPos
                    }deg) scale(${1 - scrollPos})`,
                    opacity: `${1 - scrollPos}`,
                }}
                onAnimationEnd={(e) =>
                    e.currentTarget.classList.remove("animated")
                }
            >
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
