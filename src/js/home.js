//ext
import React, { useState } from "react";

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
            <ul id="post-feed-list">
                {posts
                    .filter((post) =>
                        selectedType ? post.type === selectedType : true
                    )
                    .map((post) => (
                        <li
                            key={post.title}
                            className={`post-feed-list-item ${post.type.toLowerCase()}`}
                        >
                            <img src={post.image} />
                            {post.title}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Home;

const types = ["All", "Music", "Code"];

const posts = [
    {
        title: "Appo Music",
        body: "bunch of random text",
        date: "01/01/2021",
        image:
            "https://miro.medium.com/max/10368/1*o8tTGo3vsocTKnCUyz0wHA.jpeg",
        type: "Code",
    },
    {
        title: "Fletcher | Silent Night",
        body: "bunch of random text",
        date: "12/05/2020",
        image:
            "https://miro.medium.com/max/10368/1*o8tTGo3vsocTKnCUyz0wHA.jpeg",
        type: "Music",
    },
    {
        title: "LYRASSIST",
        body: "bunch of random text",
        date: "12/15/2020",
        image:
            "https://miro.medium.com/max/10368/1*o8tTGo3vsocTKnCUyz0wHA.jpeg",
        type: "Code",
    },
    {
        title: "devHub",
        body: "bunch of random text",
        date: "12/10/2020",
        image:
            "https://miro.medium.com/max/10368/1*o8tTGo3vsocTKnCUyz0wHA.jpeg",
        type: "Code",
    },
];
