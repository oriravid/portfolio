//ext
import React, { useState, useEffect } from "react";
//int - components
import ProjectDisplay from "./project_display";
import ProjectLinks from "./project_links";
//int - util
import * as HELPERS from "../../utils/helpers";
import * as ICONS from "../../utils/icons";

const Projects = ({ inView }) => {
    const [rendered, setRendered] = useState(inView);
    const [selectedProject, setProject] = useState(null);

    useEffect(() => {
        if (inView === true && rendered === false) setRendered(true);
    }, [inView]);

    return (
        <React.Fragment>
            <div className="section" id="projects">
                <ProjectDisplay rendered={rendered} setProject={setProject} />
                {selectedProject ? (
                    <div
                        id="project-detail-container"
                        onClick={(e) => {
                            if (e.target === e.currentTarget) setProject(null);
                        }}
                    >
                        <div
                            id="project-detail-inner"
                            className={`${
                                selectedProject.links.YouTube ? "video" : ""
                            }`}
                        >
                            {ICONS.close("detail-close pointer", () =>
                                setProject(null)
                            )}
                            <div id="project-detail-header">
                                <h2 id="project-detail-title">
                                    {selectedProject.title}
                                </h2>
                                <h3 id="project-detail-subtitle">
                                    {selectedProject.subtitle}
                                </h3>
                                <span id="project-detail-date">
                                    {HELPERS.dateFormatter(
                                        selectedProject.date
                                    )}
                                </span>
                            </div>
                            {selectedProject.links.YouTube ? (
                                <div id="project-detail-video">
                                    <iframe
                                        title="YouTube Video"
                                        width="1064"
                                        height="598"
                                        src={`https://www.youtube-nocookie.com/embed/${selectedProject.links.YouTube}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            ) : (
                                <img
                                    id="project-detail-image"
                                    src={selectedProject?.image}
                                    alt={selectedProject?.name}
                                />
                            )}
                            <div id="project-detail-content">
                                <p id="project-detail-text">
                                    {selectedProject.description}
                                </p>
                                <ProjectLinks links={selectedProject.links} />
                            </div>
                        </div>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </React.Fragment>
    );
};

export default Projects;
