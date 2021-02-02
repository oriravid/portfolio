//ext
import React, { useState } from "react";
//int - util
import * as ICONS from "../utils/icons";

const Home = ({ scrollAmt }) => {
    const [cardVis, setCardVis] = useState(false);
    var scrollPct =
        scrollAmt / window.innerHeight > 1 ? 1 : scrollAmt / window.innerHeight;

    return (
        <div className="section" id="home">
            <div id="home-background">
                {[1, 2, 3, 4, 5].map((num) => (
                    <div
                        key={num}
                        className="slice animated"
                        style={{
                            animationDelay: `${num * 0.2}s`,
                            transform: `translateY(${20 * num * scrollPct}%)`,
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
                    transform: `translateY(${scrollPct * 125}%)
                    translateZ(-${100 * scrollPct}px)
                    perspective(1000px)
                    rotateX(${90 * scrollPct}deg)`,
                }}
                onAnimationEnd={(e) => {
                    e.currentTarget.classList.remove("animated");
                    setCardVis(true);
                }}
            >
                <img
                    id="home-image"
                    alt="Ori Ravid"
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
                    `home-arrow pointer${scrollPct > 0 ? " inactive" : ""}`
                )}
            </a>
        </div>
    );
};

export default Home;
