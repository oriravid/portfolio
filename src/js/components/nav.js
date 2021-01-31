//ext
import React from "react";
//int - util
import * as HELPERS from "../utils/helpers";
import * as ICONS from "../utils/icons";

const Nav = ({ currentSection }) => {
    let navClass = "";
    if (currentSection > 0) {
        navClass = "active";

        if (currentSection === 2) {
            navClass += " light";
        }
    }

    return (
        <div id="nav" className={navClass}>
            <ul id="nav-list">
                {navItems.map((navItem, idx) => (
                    <li key={navItem} className="nav-list-item">
                        <a
                            href={`#${navItem}`}
                            className={currentSection === idx ? "active" : ""}
                        >
                            {navItem}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Nav;

const navItems = ["home", "projects", "about", "contact"];
