//ext
import React from "react";
import ReactDOM from "react-dom";
//int - components
import Projects from "./components/projects";
import Intro from "./components/intro";

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        <React.Fragment>
            <Intro />
            <Projects />
        </React.Fragment>,
        document.getElementById("root")
    );
});
