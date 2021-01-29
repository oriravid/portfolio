//ext
import React from "react";
import ReactDOM from "react-dom";
//int - components
import Projects from "./components/projects";
import About from "./components/about";

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        <React.Fragment>
            <About />
            <Projects />
        </React.Fragment>,
        document.getElementById("root")
    );
});
