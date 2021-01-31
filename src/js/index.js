//ext
import React, { useState } from "react";
import ReactDOM from "react-dom";
//int - components
import Nav from "./components/nav";
import Home from "./components/home";
import Projects from "./components/projects";
import About from "./components/about";

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
            <React.Fragment>
                <Nav currentSection={currentSection} />
                <Home scrollAmt={scrollAmt} />
                <Projects />
                <About />
            </React.Fragment>
        );
    };

    ReactDOM.render(<Root />, root);
});
