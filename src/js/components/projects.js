//ext
import React, { useState, useEffect } from "react";
//int - util
import * as PD from "./project_data";
import * as HELPERS from "../utils/helpers";
import * as ICONS from "../utils/icons";

const Projects = ({ scrollAmt }) => {
    const [selectedType, setType] = useState("ALL");
    const [projectStartIdx, setProjectStartIdx] = useState(0);
    const [prevInactive, setPrevInactive] = useState(true);
    const [nextInactive, setNextInactive] = useState(true);
    const [projects, setProjects] = useState(PD.projects.slice(0, 6));
    const [selectedProject, setProject] = useState(null);

    useEffect(() => {
        setProjectStartIdx(0);
    }, [selectedType]);

    useEffect(() => {
        setProjects(
            PD.projects
                .filter((project) =>
                    selectedType === "ALL"
                        ? true
                        : project.type === selectedType
                )
                .slice(projectStartIdx, projectStartIdx + 6)
        );

        setPrevInactive(projectStartIdx === 0);
        setNextInactive(
            projectStartIdx + 6 >=
                PD.projects.filter((project) =>
                    selectedType === "ALL"
                        ? true
                        : project.type === selectedType
                ).length
        );
    }, [projectStartIdx, selectedType]);

    const renderPrev = () => {
        return (
            <div
                className={`project-nav-btn ${
                    prevInactive ? "inactive" : "pointer"
                }`}
                onClick={() => {
                    if (!prevInactive) setProjectStartIdx(projectStartIdx - 6);
                }}
            >
                PREV
            </div>
        );
    };

    const renderNext = () => {
        return (
            <div
                className={`project-nav-btn ${
                    nextInactive ? "inactive" : "pointer"
                }`}
                onClick={() => {
                    if (!nextInactive) setProjectStartIdx(projectStartIdx + 6);
                }}
            >
                NEXT
            </div>
        );
    };

    return (
        <React.Fragment>
            <div className="section" id="projects">
                <div className="section-inner">
                    <div className="section-header">
                        <h2 className="section-title">Projects</h2>
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
                        {projects.map((project, idx) => (
                            <div
                                key={
                                    PD.types.indexOf(selectedType) *
                                        PD.projects.length +
                                    project.id
                                }
                                className="project-list-item pointer"
                                style={{
                                    backgroundImage: `url(${project.image})`,
                                    animationDelay: `${idx * 0.25}s`,
                                }}
                                onClick={() => setProject(project)}
                            >
                                <div
                                    className={`project-overlay ${project.type.toLowerCase()}`}
                                >
                                    <div className="project-overlay-inner">
                                        <h2 className="project-title">
                                            {project.title}
                                        </h2>
                                        <div className="divider"></div>
                                        <h3 className="project-subtitle">
                                            {project.subtitle}
                                        </h3>
                                    </div>
                                    <div className="project-overlay-inner">
                                        <span className="project-date">
                                            {HELPERS.dateFormatter(
                                                project.date,
                                                "short"
                                            )}
                                        </span>
                                        <span className={"project-type"}>
                                            {project.type}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div id="project-nav">
                        {renderPrev()}
                        {renderNext()}
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
                        <div id="project-detail-inner">
                            {ICONS.close("detail-close pointer", () =>
                                setProject(null)
                            )}
                            <div id="project-detail-header">
                                <h2 id="project-detail-title">
                                    {selectedProject.title}
                                </h2>
                                <h3 id="project-detail-title">
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
                ) : (
                    ""
                )}
            </div>
        </React.Fragment>
    );
};

export default Projects;
