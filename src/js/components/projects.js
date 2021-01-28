//ext
import React, { useState } from "react";
//int - util
import * as HELPERS from "../utils/helpers";
import * as ICONS from "../utils/icons";

const Projects = () => {
    const [selectedType, setType] = useState("All");
    const [selectedProject, setProject] = useState(projects[0]);

    //detail view
    let detailView;
    const openDetailView = (project) => {
        setProject(project);
        detailView.classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const closeDetailView = () => {
        detailView.classList.remove("active");
    };

    return (
        <div className="section" id="project-feed">
            <div className="section-header">
                <h2 className="section-title">PROJECTS</h2>
                <div id="project-feed-filter">
                    <ul id="project-feed-type-list">
                        {types.map((type) => (
                            <li
                                className={`project-feed-type-list-item pointer
                                    ${selectedType === type ? " active" : ""}`}
                                key={type}
                                onClick={(e) => {
                                    setType(e.currentTarget.innerText);
                                }}
                            >
                                {type}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div id="project-feed-list">
                {projects
                    .filter((project) =>
                        selectedType !== "All"
                            ? project.type === selectedType
                            : true
                    )
                    .map((project) => (
                        <div
                            key={project.title}
                            className={`project-feed-list-item ${project.type.toLowerCase()} pointer`}
                            style={{ backgroundImage: `url(${project.image})` }}
                            onClick={() => openDetailView(project)}
                        >
                            <div className="project-overlay">
                                <div className="project-overlay-top">
                                    <h3 className="project-title">
                                        {project.title}
                                    </h3>
                                </div>
                                <div className="project-overlay-bottom">
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

            <div
                id="project-detail-container"
                ref={(ref) => (detailView = ref)}
            >
                {ICONS.close("detail-close", () => closeDetailView())}
                <div id="project-detail-info">
                    <h3>{selectedProject.title}</h3>
                    <span>{HELPERS.dateFormatter(selectedProject.date)}</span>
                    <p>{selectedProject.description}</p>
                    {Object.keys(selectedProject.links).map((linkText) => (
                        <a
                            href={selectedProject.links[linkText]}
                            target="_blank"
                        >
                            <div className="button primary">{linkText}</div>
                        </a>
                    ))}
                </div>
                <div id="project-detail-image">
                    <img src={selectedProject?.image} />
                </div>
            </div>
        </div>
    );
};

export default Projects;

const types = ["All", "Music", "Code"];

const projects = [
    {
        title: "Appo Music",
        description:
            "Appo Music is a full-stack clone of the incredible Apple Music online streaming platform, with an aim to re-create it's core features, seamless design, and excellent user experience.",
        date: "2021-01-01",
        image: "../src/imgs/appo_music.png",
        links: { view: "https://appo-music.herokuapp.com/" },
        type: "Code",
    },
    {
        title: "Fletcher – Silent Night",
        description: "bunch of random text",
        date: "2020-12-01",
        image: "../src/imgs/fletcher_silent.jpg",
        links: {
            listen:
                "https://music.apple.com/us/album/silent-night-single/1541041366",
        },
        type: "Music",
    },
    {
        title: "LYRASSIST",
        description:
            "LYRASSIST is a word recommendation tool and visualizer for writers. Built strictly with JavaScript/JQuery, HTML and CSS to showcase front-end animation/transitions.",
        date: "2020-11-30",
        image: "../src/imgs/lyrassist.png",
        links: { view: "https://oriravid.github.io/LYRASSIST/" },
        type: "Code",
    },
    {
        title: "devHub",
        description:
            "devHUB is a platform that empowers developers to showcase themselves and their work, connect with other developers, and access job opportunities. General professionals have Linkedin, designers have Dribble, and now developers have devHUB.",
        date: "2020-11-25",
        image: "../src/imgs/devhub.png",
        links: { view: "https://getdevhub.herokuapp.com/#/" },
        type: "Code",
    },
];
