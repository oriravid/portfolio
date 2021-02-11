//ext
import React, { useState, useRef } from "react";
//int - util
import * as PD from "./project_data";

const ProjectDisplayMobile = ({ rendered }) => {
    const [playing, setPlaying] = useState(false);
    const slider = useRef(null);

    // console.log(slider);
    // setInterval(() => (slider.current.scrollDown += 5), 7.5);

    //     arrowScroll(e, opt) {
    //     if (opt === "right") {
    //         this.scrollInterval = setInterval(
    //             () => (this.scroller.scrollLeft += 5),
    //             7.5
    //         );
    //     } else if (opt === "left") {
    //         this.scrollInterval = setInterval(
    //             () => (this.scroller.scrollLeft -= 5),
    //             7.5
    //         );
    //     } else if (opt === "stop") {
    //         clearInterval(this.scrollInterval);
    //     }
    // }

    return (
        <div className={`section-inner${rendered ? " active" : ""}`}>
            <div className="section-header">
                <h2 className="section-title">Projects</h2>
                <div></div>
            </div>
            <div id="project-slider">
                <div id="project-slider-inner" ref={slider}>
                    {PD.projects.map((project) => {
                        return <img src={project.image} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProjectDisplayMobile;
