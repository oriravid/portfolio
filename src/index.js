//int - css
import "./css/resets.css";
import "./css/styles.scss";
//ext
import React, { useState } from "react";
import ReactDOM from "react-dom";
import HttpsRedirect from "react-https-redirect";
import ReactGA from "react-ga";
//int - components
import Home from "./js/components/home";
import Projects from "./js/components/projects/projects";
import About from "./js/components/about";
//int - util
import * as ICONS from "./js/utils/icons";

//Google Analytics
function initializeReactGA() {
    ReactGA.initialize("UA-50867458-1");
    ReactGA.pageview("/");
}
initializeReactGA();

//Set app height
const setHeight = () => {
    document.body.style.height = window.innerHeight + "px";
};
window.addEventListener("resize", setHeight);
setHeight();

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    const Root = () => {
        const [scrollAmt, setScrollAmt] = useState(0);

        root.addEventListener("scroll", (e) => {
            setScrollAmt(e.target.scrollTop);
        });

        return (
            <HttpsRedirect>
                <React.Fragment>
                    <Home scrollAmt={scrollAmt} />
                    {/* <Projects inView={scrollAmt > window.innerHeight / 2} /> */}
                    {/* <About scrollAmt={scrollAmt} /> */}
                </React.Fragment>
            </HttpsRedirect>
        );
    };

    ReactDOM.render(<Root />, root);
});
