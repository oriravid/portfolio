//ext
import React, { useState } from "react";
import ReactDOM from "react-dom";
import HttpsRedirect from "react-https-redirect";
import ReactGA, { initialize } from "react-ga";
//int - css
import "./css/resets.css";
import "./css/styles.scss";
//int - components
import Nav from "./js/components/nav";
import Home from "./js/components/home";
import Projects from "./js/components/projects";
import About from "./js/components/about";

function initializeReactGA() {
    ReactGA.initialize("UA-50867458-1");
    ReactGA.pageview("/");
}
initializeReactGA();

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    const Root = () => {
        const [scrollAmt, setScrollAmt] = useState(0);
        const [currentSection, setCurrentSection] = useState(0);

        root.addEventListener("scroll", (e) => {
            setScrollAmt(e.target.scrollTop);

            var section = Math.floor(e.target.scrollTop / window.innerHeight);
            if (currentSection !== section) setCurrentSection(section);
        });

        return (
            <HttpsRedirect>
                <Nav currentSection={currentSection} />
                <Home scrollAmt={scrollAmt} />
                <Projects />
                <About scrollAmt={scrollAmt - window.innerHeight * 2} />
            </HttpsRedirect>
        );
    };

    ReactDOM.render(<Root />, root);
});
