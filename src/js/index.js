//ext
import React from "react";
import ReactDOM from "react-dom";
//int - components
import Header from "./header";
import Home from "./home";
import About from "./about";

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        <div className="app">
            <Header />
            <Home />
            <About />
        </div>,
        document.getElementById("root")
    );
});
