//int - images
import spotifyIcon from "../../../imgs/spotify_icon.png";
import appleIcon from "../../../imgs/apple_icon.png";
import externalIcon from "../../../imgs/external_icon.png";

const ProjectLinks = ({ links }) => {
    const linkLogo = (link) => {
        switch (link) {
            case "Apple":
                return appleIcon;
            case "Spotify":
                return spotifyIcon;
            default:
                return externalIcon;
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
                                <img src={linkLogo(link)} alt={link} />
                            </a>
                        </li>
                    );
                })}
        </ul>
    );
};

export default ProjectLinks;
