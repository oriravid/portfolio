//ext
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
//int - components
import Header from "./components/header";
import Projects from "./components/projects";
import About from "./components/about";

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        <HashRouter>
            <div id="app">
                <header>{/* <Header /> */}</header>
                <main>
                    <Projects />
                    <About />
                </main>
                <footer>
                    <div id="footer-inner">
                        Copyright © 2021 Ori Ravid. All rights reserved.
                    </div>
                </footer>
            </div>
        </HashRouter>,
        document.getElementById("root")
    );
});
