//ext
import React, { useState, useRef } from "react";
//int - util
import * as HELPERS from "../utils/helpers";
import * as ICONS from "../utils/icons";

const Home = ({ scrollAmt }) => {
    const [cardVis, setCardVis] = useState(false);
    var scrollPos = scrollAmt / window.innerHeight;

    return (
        <div className="section" id="home">
            <div id="home-background">
                {[1, 2, 3, 4, 5].map((num) => (
                    <div
                        key={num}
                        className="slice animated"
                        style={{
                            animationDelay: `${num * 0.2}s`,
                            transform: `translateY(${20 * num * scrollPos}%)`,
                        }}
                        onAnimationEnd={(e) =>
                            e.currentTarget.classList.remove("animated")
                        }
                    ></div>
                ))}
            </div>
            <div
                className="section-inner animated"
                style={{
                    transform: `translateY(${scrollPos * 125}%)
                    translateZ(-${100 * scrollPos}px)
                    perspective(1000px)
                    rotateX(${90 * scrollPos}deg)`,
                }}
                onAnimationEnd={(e) => {
                    e.currentTarget.classList.remove("animated");
                    setCardVis(true);
                }}
            >
                <img
                    id="home-image"
                    src="https://avatars.githubusercontent.com/u/71371489?s=460&u=0d99ba3b21759743f7b3e50716473e59027a4141&v=4"
                />
                <h1>Ori Ravid</h1>
                <p>Software & Audio Engineer</p>
                <div className={`line${cardVis ? " active" : ""}`}></div>
                <ul className={cardVis ? "active" : ""}>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>•</li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>•</li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            <a href="#projects">
                {ICONS.arrowDown(
                    `home-arrow pointer${scrollPos > 0 ? " inactive" : ""}`
                )}
            </a>
        </div>
    );
};

export default Home;
