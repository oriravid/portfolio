import React from "react";

export const arrow = (classes) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className={classes}
    >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
    </svg>
);

export const arrowDown = (classes, action) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className={classes}
        onClick={action}
    >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>
);

export const arrowLeft = (classes, action) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className={classes}
        onMouseOver={action}
    >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
    </svg>
);

export const arrowRight = (classes, action) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className={classes}
        onMouseOver={action}
    >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
    </svg>
);

export const close = (classes, action) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className={classes}
        onClick={action}
    >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
    </svg>
);
