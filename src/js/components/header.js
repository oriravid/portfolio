//ext
import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
    return (
        <div id="header-inner">
            <div id="header-left">
                <img
                    id="avatar"
                    src="https://avatars.githubusercontent.com/u/71371489?s=460&u=0d99ba3b21759743f7b3e50716473e59027a4141&v=4"
                />
            </div>
            <div id="header-right">
                <h1 id="title">Ori Ravid</h1>
                <h2 id="subtitle">Software & Audio Engineer</h2>
                <ul id="nav">
                    <NavLink to="/">
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/about">
                        <li>About</li>
                    </NavLink>
                    <NavLink to="/contact">
                        <li>Contact</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Header;
