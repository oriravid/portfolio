//ext
import React, { useState, useEffect } from "react";
//int - util
import * as PD from "./project_data";
import * as HELPERS from "../../utils/helpers";

const ProjectDisplay = ({ rendered, setProject }) => {
    const calcNumProjects = () => {
        if (window.innerWidth < 700) {
            return 2;
        } else if (window.innerWidth < 1000) {
            return 4;
        }
        return 6;
    };

    const [selectedType, setType] = useState("ALL");
    const [projectStartIdx, setProjectStartIdx] = useState(0);
    const [numProjects, setNumProjects] = useState(calcNumProjects());
    const [prevInactive, setPrevInactive] = useState(true);
    const [nextInactive, setNextInactive] = useState(true);
    const [projects, setProjects] = useState(PD.projects);

    window.addEventListener("resize", () => {
        setNumProjects(calcNumProjects());
    });

    useEffect(() => {
        setProjectStartIdx(0);
        setProjects(
            PD.projects.filter((project) =>
                selectedType === "ALL" ? true : project.type === selectedType
            )
        );
    }, [selectedType]);

    useEffect(() => {
        setPrevInactive(projectStartIdx === 0);
        setNextInactive(
            projectStartIdx + numProjects >=
                PD.projects.filter((project) =>
                    selectedType === "ALL"
                        ? true
                        : project.type === selectedType
                ).length
        );
    }, [projectStartIdx]);

    const renderPrev = () => {
        return (
            <div
                className={`project-nav-btn ${
                    prevInactive ? "inactive" : "pointer"
                }`}
                onClick={() => {
                    if (!prevInactive)
                        setProjectStartIdx(projectStartIdx - numProjects);
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
                    if (!nextInactive)
                        setProjectStartIdx(projectStartIdx + numProjects);
                }}
            >
                NEXT
            </div>
        );
    };

    return (
        <div className={`section-inner${rendered ? " active" : ""}`}>
            <div className="section-header">
                <h2 className="section-title">Projects</h2>
                <ul id="project-type-list">
                    {PD.types.map((type) => (
                        <li
                            className={`project-type-list-item pointer
                                    ${selectedType === type ? " active" : ""}`}
                            key={type}
                            onClick={(e) => setType(e.currentTarget.innerText)}
                        >
                            {type}
                        </li>
                    ))}
                </ul>
            </div>

            <div id="project-list">
                {projects
                    .slice(projectStartIdx, projectStartIdx + numProjects)
                    .map((project, idx) => (
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
                                // WebkitAnimationDelay: `${idx * 0.25}s`,
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
    );
};

export default ProjectDisplay;
