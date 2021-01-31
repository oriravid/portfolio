//ext
import React from "react";
import ReactDOM from "react-dom";
//int - components
import Nav from "./components/nav";
import Home from "./components/home";
import Projects from "./components/projects";
import About from "./components/about";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    ReactDOM.render(
        <React.Fragment>
            <Nav root={root} />
            <Home root={root} />
            <Projects />
            <About />
        </React.Fragment>,
        root
    );
});
