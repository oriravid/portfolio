//ext
import React, { useState } from "react";
//int
import * as HELPERS from "./helpers";

const Home = () => {
    const [selectedType, setType] = useState(null);

    return (
        <div id="post-feed">
            <div id="post-feed-filter">
                <span>Filter By:</span>
                <ul
                    id="post-feed-type-list"
                    onClick={(e) => {
                        e.target.innerText === "All"
                            ? setType(null)
                            : setType(e.target.innerText);
                    }}
                >
                    {types.map((type) => (
                        <li
                            className={type === selectedType ? "active" : ""}
                            key={type}
                        >
                            {type}
                        </li>
                    ))}
                </ul>
            </div>
            <div id="post-feed-list">
                {posts
                    .filter((post) =>
                        selectedType ? post.type === selectedType : true
                    )
                    .map((post) => (
                        <div
                            key={post.title}
                            className={`post-feed-list-item ${post.type.toLowerCase()} pointer`}
                            style={{ backgroundImage: `url(${post.image})` }}
                        >
                            <div className="post-overlay">
                                <div className="post-overlay-top">
                                    <span className="post-title">
                                        {post.title}
                                    </span>
                                </div>
                                <div className="post-overlay-bottom">
                                    <span className="post-date">
                                        {HELPERS.dateFormatter(
                                            post.date,
                                            "short"
                                        )}
                                    </span>
                                    <span className="post-type">
                                        {post.type}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Home;

const types = ["All", "Music", "Code"];

const posts = [
    {
        title: "Appo Music",
        body: "bunch of random text",
        date: "2021-01-01",
        image: "../src/imgs/appo_music.png",
        type: "Code",
    },
    {
        title: "Fletcher – Silent Night",
        body: "bunch of random text",
        date: "2020-12-01",
        image: "../src/imgs/fletcher_silent.jpg",
        type: "Music",
    },
    {
        title: "LYRASSIST",
        body: "bunch of random text",
        date: "2020-11-30",
        image: "../src/imgs/lyrassist.png",
        type: "Code",
    },
    {
        title: "devHub",
        body: "bunch of random text",
        date: "2020-11-25",
        image: "../src/imgs/devhub.png",
        type: "Code",
    },
];
