//ext
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
//int - components
import Header from "./header";
import Home from "./home";
import About from "./about";

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        <HashRouter>
            <div id="app">
                <Header />
                <main>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                    </Switch>
                </main>
            </div>
        </HashRouter>,
        document.getElementById("root")
    );
});
