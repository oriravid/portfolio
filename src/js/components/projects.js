//ext
import React, { useState } from "react";
//int - util
import * as PD from "./project_data";
import * as HELPERS from "../utils/helpers";
import * as ICONS from "../utils/icons";

const Projects = ({ scrollAmt }) => {
    const [selectedType, setType] = useState("ALL");
    const [projects, setProjects] = useState(
        PD.projects.sort(HELPERS.dateSorter)
    );
    const [selectedProject, setProject] = useState(null);

    return (
        <React.Fragment>
            <div className="section" id="projects">
                <div className="section-inner">
                    <div className="section-header">
                        <h2 className="section-title">Project Selection</h2>
                        <ul id="project-type-list">
                            {PD.types.map((type) => (
                                <li
                                    className={`project-type-list-item pointer
                                    ${selectedType === type ? " active" : ""}`}
                                    key={type}
                                    onClick={(e) =>
                                        setType(e.currentTarget.innerText)
                                    }
                                >
                                    {type}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div id="project-list">
                        {projects
                            .filter((project) =>
                                selectedType === "ALL"
                                    ? true
                                    : project.type === selectedType
                            )
                            .map((project, idx) => (
                                <div
                                    key={
                                        PD.types.indexOf(selectedType) *
                                            projects.length +
                                        idx
                                    }
                                    className={`project-list-item ${project.type.toLowerCase()} pointer`}
                                    style={{
                                        backgroundImage: `url(${project.image})`,
                                        animationDelay: `${idx * 0.25}s`,
                                    }}
                                    onClick={() => setProject(project)}
                                >
                                    <div className="project-overlay">
                                        <div className="project-overlay-inner">
                                            <h3 className="project-title">
                                                {project.title}
                                            </h3>
                                        </div>
                                        <div className="project-overlay-inner">
                                            <span className="project-date">
                                                {HELPERS.dateFormatter(
                                                    project.date,
                                                    "short"
                                                )}
                                            </span>
                                            <span className="project-type">
                                                {project.type}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>

            {selectedProject ? (
                <div
                    id="project-detail-container"
                    style={{ top: `${scrollAmt}` }}
                    onClick={(e) => {
                        if (e.target === e.currentTarget) setProject(null);
                    }}
                >
                    <div className="section-inner">
                        {ICONS.close("detail-close pointer", () =>
                            setProject(null)
                        )}
                        <div id="project-detail-inner">
                            <h2 id="project-detail-title">
                                {selectedProject.title}
                            </h2>
                            <span id="project-detail-date">
                                {HELPERS.dateFormatter(selectedProject.date)}
                            </span>
                            {selectedProject.links.YouTube ? (
                                <div id="project-detail-video">
                                    <iframe
                                        title="YouTube Video"
                                        width="560"
                                        height="315"
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
                                <ul id="project-detail-links">
                                    {Object.keys(selectedProject.links).map(
                                        (linkText) => {
                                            if (linkText === "YouTube") return;

                                            return (
                                                <li className="project-detail-link-item">
                                                    <a
                                                        key={linkText}
                                                        href={
                                                            selectedProject
                                                                .links[linkText]
                                                        }
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        {linkText}
                                                    </a>
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}
        </React.Fragment>
    );
};

export default Projects;
