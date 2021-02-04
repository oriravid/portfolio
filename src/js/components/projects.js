//ext
import React, { useState } from "react";
//int - util
import * as HELPERS from "../utils/helpers";
import * as ICONS from "../utils/icons";
//int - images
import appo_music from "../../imgs/appo_music.png";
import devhub from "../../imgs/devhub.png";
import fletcher_silent from "../../imgs/fletcher_silent.jpg";
import lyrassist from "../../imgs/lyrassist.png";

const Projects = () => {
    const [selectedType, setType] = useState("ALL");
    const [selectedProject, setProject] = useState(null);

    return (
        <React.Fragment>
            <div className="section" id="projects">
                <div className="section-inner">
                    <div className="section-header">
                        <h2 className="section-title">Projects</h2>
                        <ul id="project-type-list">
                            {types.map((type) => (
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
                                        types.indexOf(selectedType) *
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
                {selectedProject ? (
                    <div
                        id="project-detail-container"
                        onClick={(e) => {
                            if (e.target === e.currentTarget) setProject(null);
                        }}
                    >
                        <div className="section-inner">
                            {ICONS.close("detail-close pointer", () =>
                                setProject(null)
                            )}
                            <div className="project-content">
                                <h3>{selectedProject.title}</h3>
                                <span>
                                    {HELPERS.dateFormatter(
                                        selectedProject.date
                                    )}
                                </span>
                                <img
                                    src={selectedProject?.image}
                                    alt={selectedProject?.name}
                                />
                                <p>{selectedProject.description}</p>
                                {Object.keys(selectedProject.links).map(
                                    (linkText) => (
                                        <a
                                            key={linkText}
                                            href={
                                                selectedProject.links[linkText]
                                            }
                                            target="_blank"
                                        >
                                            <div className="button primary">
                                                {linkText}
                                            </div>
                                        </a>
                                    )
                                )}
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

const types = ["ALL", "MUSIC", "CODE"];

const projects = [
    {
        title: "Appo Music",
        description:
            "Appo Music is a full-stack clone of the incredible Apple Music online streaming platform, with an aim to re-create it's core features, seamless design, and excellent user experience.",
        date: "2021-01-01",
        image: appo_music,
        links: { view: "https://appo-music.herokuapp.com/" },
        type: "CODE",
    },
    {
        title: "Fletcher – Silent Night",
        description: "bunch of random text",
        date: "2020-12-01",
        image: fletcher_silent,
        links: {
            listen:
                "https://music.apple.com/us/album/silent-night-single/1541041366",
        },
        type: "MUSIC",
    },
    {
        title: "LYRASSIST",
        description:
            "LYRASSIST is a word recommendation tool and visualizer for writers. Built strictly with JavaScript/JQuery, HTML and CSS to showcase front-end animation/transitions.",
        date: "2020-11-30",
        image: lyrassist,
        links: { view: "https://oriravid.github.io/LYRASSIST/" },
        type: "CODE",
    },
    {
        title: "devHub",
        description:
            "devHUB is a platform that empowers developers to showcase themselves and their work, connect with other developers, and access job opportunities. General professionals have Linkedin, designers have Dribble, and now developers have devHUB.",
        date: "2020-11-25",
        image: devhub,
        links: { view: "https://getdevhub.herokuapp.com/#/" },
        type: "CODE",
    },
];
