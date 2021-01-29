//ext
import React from "react";
import ReactDOM from "react-dom";
//int - components
import Nav from "./components/nav";
import Intro from "./components/intro";
import Projects from "./components/projects";
import About from "./components/about";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    ReactDOM.render(
        <React.Fragment>
            <Nav root={root} />
            <Intro root={root} />
            <Projects />
            <About />
        </React.Fragment>,
        root
    );
});
