//int - util
import * as ICONS from "../utils/icons";

const ProjectLinks = ({ links }) => {
    const linkLogo = (link) => {
        switch (link) {
            case "Apple":
                return ICONS.appleMusic();
            case "Spotify":
                return ICONS.spotify();
            default:
                return ICONS.external();
        }
    };

    return (
        <ul id="project-detail-links">
            {Object.keys(links)
                .filter((link) => link !== "YouTube")
                .map((link) => {
                    return (
                        <li className="project-detail-link-item" key={link}>
                            <a
                                href={links[link]}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {linkLogo(link)}
                            </a>
                        </li>
                    );
                })}
        </ul>
    );
};

export default ProjectLinks;
