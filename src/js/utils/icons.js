import React from "react";

export const add = (classes, action) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className={classes}
        onClick={action}
    >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </svg>
);

export const addCircle = (classes) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className={classes}
    >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
    </svg>
);

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

export const browse = (classes) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className={classes}
    >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M19 5v4H4V5h15m0 10v4H4v-4h15m1-12H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm0 10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1z" />
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

export const closeCircle = (classes, action) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className={classes}
        onClick={action}
    >
        <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm4.3 14.3c-.39.39-1.02.39-1.41 0L12 13.41 9.11 16.3c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41L10.59 12 7.7 9.11c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L12 10.59l2.89-2.89c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41z" />
    </svg>
);

export const cloud = (classes, action) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className={classes}
    >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z" />
    </svg>
);

export const cloudFull = (classes, action) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className={classes}
    >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
    </svg>
);

export const cloudCircle = (classes, action) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        className={classes}
    >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z" />
    </svg>
);

export const edit = (classes, action) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className={classes}
        onClick={action}
    >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
    </svg>
);

export const fire = (classes, action) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className={classes}
    >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z" />
    </svg>
);

export const go = (classes) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className={classes}
    >
        <g>
            <rect fill="none" height="24" width="24" />
            <path d="M12,4c4.41,0,8,3.59,8,8s-3.59,8-8,8s-8-3.59-8-8S7.59,4,12,4 M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10 c5.52,0,10-4.48,10-10C22,6.48,17.52,2,12,2L12,2z M13,12l0-4h-2l0,4H8l4,4l4-4H13z" />
        </g>
    </svg>
);

export const list = (classes, action) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="black"
        width="18px"
        height="18px"
        className={classes}
        onClick={action}
    >
        <g fill="none">
            <path d="M0 0h24v24H0V0z" />
            <path d="M0 0h24v24H0V0z" opacity=".87" />
        </g>
        <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
    </svg>
);

export const loop = (classes, action) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className={classes}
        onClick={action}
    >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" />
    </svg>
);

export const next2 = (classes, action) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className={classes}
        onClick={action}
    >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
    </svg>
);

export const next = (classes, action) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className={classes}
        onClick={action}
    >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" />
    </svg>
);

export const pause = (classes, action) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className={classes}
        onClick={action}
    >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
);

export const play = (classes, action) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className={classes}
        onClick={action}
    >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M8 5v14l11-7z" />
    </svg>
);

export const playCircle = (classes, action) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className={classes}
    >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
    </svg>
);

export const playCircleFill = (classes, action) => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={classes}
        onClick={action}
    >
        <g>
            <rect
                fill="none"
                id="canvas_background"
                height="602"
                width="802"
                y="-1"
                x="-1"
            />
        </g>
        <g>
            <path id="svg_1" fill="none" d="m0,0l24,0l0,24l-24,0l0,-24z" />
            <rect
                id="svg_3"
                height="13.36898"
                width="11.01604"
                y="5.20354"
                x="6.38503"
                fill="#fff"
            />
            <path
                id="svg_2"
                d="m12,2c-5.52,0 -10,4.48 -10,10s4.48,10 10,10s10,-4.48 10,-10s-4.48,-10 -10,-10zm-2,14.5l0,-9l6,4.5l-6,4.5z"
            />
        </g>
    </svg>
);

export const playlist = (classes) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className={classes}
    >
        <g>
            <rect fill="none" height="24" width="24" />
            <rect fill="none" height="24" width="24" />
            <rect fill="none" height="24" width="24" />
        </g>
        <g>
            <g />
            <g>
                <g transform="matrix(1 0 0 1 144 120)">
                    <path d="M-122-114h-5v8.18c-0.31-0.11-0.65-0.18-1-0.18c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3v-9h3V-114 L-122-114z M-129-114h-12v2h12V-114L-129-114z M-129-110h-12v2h12V-110L-129-110z M-133-106h-8v2h8V-106L-133-106z M-129-103 c0-0.55,0.45-1,1-1c0.55,0,1,0.45,1,1s-0.45,1-1,1C-128.55-102-129-102.45-129-103z" />
                </g>
            </g>
        </g>
    </svg>
);

export const previous2 = (classes, action) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className={classes}
        onClick={action}
    >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
    </svg>
);

export const previous = (classes, action) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className={classes}
        onClick={action}
    >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z" />
    </svg>
);

export const recent = (classes) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className={classes}
    >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
        <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
    </svg>
);

export const repeat = (classes, action) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className={classes}
        onClick={action}
    >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z" />
    </svg>
);

export const search = (classes, action) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className={classes}
        onClick={action}
    >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </svg>
);

export const shuffle = (classes, action) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className={classes}
        onClick={action}
    >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z" />
    </svg>
);

export const signin = (classes) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className={classes}
    >
        <g>
            <rect fill="none" height="24" width="24" />
        </g>
        <g>
            <path d="M11,7L9.6,8.4l2.6,2.6H2v2h10.2l-2.6,2.6L11,17l5-5L11,7z M20,19h-8v2h8c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-8v2h8V19z" />
        </g>
    </svg>
);

export const signout = (classes, action) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className={classes}
        onClick={action}
    >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
    </svg>
);

export const trash = (classes, action) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className={classes}
        onClick={action}
    >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
    </svg>
);

export const trashOutline = (classes, action) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className={classes}
        onClick={action}
    >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
    </svg>
);

export const volume = (classes, action) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className={classes}
        onClick={action}
    >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
    </svg>
);

export const warning = (classes, action) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className={classes}
        onClick={action}
    >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
);

//LOADER
export const loader1 = (classes, fill) => (
    <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        xmlns="http://www.w3.org/2000/svg"
        className={classes}
    >
        <defs>
            <linearGradient
                x1="8.042%"
                y1="0%"
                x2="65.682%"
                y2="23.865%"
                id="a"
            >
                <stop stopColor={fill} stopOpacity="0" offset="0%" />
                <stop stopColor={fill} stopOpacity=".631" offset="63.146%" />
                <stop stopColor={fill} offset="100%" />
            </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
            <g transform="translate(1 1)">
                <path
                    d="M36 18c0-9.94-8.06-18-18-18"
                    id="Oval-2"
                    stroke="url(#a)"
                    strokeWidth="2"
                >
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 18 18"
                        to="360 18 18"
                        dur="1.2s"
                        repeatCount="indefinite"
                    />
                </path>
                <circle fill={fill} cx="36" cy="18" r="1">
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 18 18"
                        to="360 18 18"
                        dur="1.2s"
                        repeatCount="indefinite"
                    />
                </circle>
            </g>
        </g>
    </svg>
);

export const loader2 = (classes, fill) => (
    <svg
        width="120"
        height="30"
        viewBox="0 0 120 30"
        xmlns="http://www.w3.org/2000/svg"
        fill={fill}
        className={classes}
    >
        <circle cx="15" cy="15" r="15">
            <animate
                attributeName="r"
                from="15"
                to="15"
                begin="0s"
                dur="0.8s"
                values="15;9;15"
                calcMode="linear"
                repeatCount="indefinite"
            />
            <animate
                attributeName="fill-opacity"
                from="1"
                to="1"
                begin="0s"
                dur="0.8s"
                values="1;.5;1"
                calcMode="linear"
                repeatCount="indefinite"
            />
        </circle>
        <circle cx="60" cy="15" r="9" fillOpacity="0.3">
            <animate
                attributeName="r"
                from="9"
                to="9"
                begin="0s"
                dur="0.8s"
                values="9;15;9"
                calcMode="linear"
                repeatCount="indefinite"
            />
            <animate
                attributeName="fill-opacity"
                from="0.5"
                to="0.5"
                begin="0s"
                dur="0.8s"
                values=".5;1;.5"
                calcMode="linear"
                repeatCount="indefinite"
            />
        </circle>
        <circle cx="105" cy="15" r="15">
            <animate
                attributeName="r"
                from="15"
                to="15"
                begin="0s"
                dur="0.8s"
                values="15;9;15"
                calcMode="linear"
                repeatCount="indefinite"
            />
            <animate
                attributeName="fill-opacity"
                from="1"
                to="1"
                begin="0s"
                dur="0.8s"
                values="1;.5;1"
                calcMode="linear"
                repeatCount="indefinite"
            />
        </circle>
    </svg>
);

export const appleMusic = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="100px"
        height="100px"
    >
        <path
            fill="#f15b6c"
            d="M70.011,18.988h-39c-6.6,0-12,5.4-12,12v39c0,6.6,5.4,12,12,12h39c6.6,0,12-5.4,12-12v-39 C82.011,24.388,76.611,18.988,70.011,18.988z"
        />
        <path
            fill="#1f212b"
            d="M70.011,82.988h-39c-7.18,0-13-5.82-13-13v-39c0-7.18,5.82-13,13-13h39c7.18,0,13,5.82,13,13v39 C83.011,77.168,77.19,82.988,70.011,82.988z M20.011,30.988v39c0,6.075,4.925,11,11,11h39c6.075,0,11-4.925,11-11v-39 c0-6.075-4.925-11-11-11h-39C24.935,19.988,20.011,24.913,20.011,30.988z"
        />
        <path
            fill="#1f212b"
            d="M67.173,77.988H33.848c-5.985,0-10.837-4.852-10.837-10.837V33.825 c0-5.985,4.852-10.837,10.837-10.837h33.663c0.276,0,0.5,0.224,0.5,0.5s-0.224,0.5-0.5,0.5H33.848 c-5.433,0-9.837,4.404-9.837,9.837V67.15c0,5.433,4.405,9.838,9.838,9.838h33.325c5.433,0,9.837-4.404,9.837-9.837V48.488 c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5V67.15C78.011,73.136,73.158,77.988,67.173,77.988z M77.511,45.567 c-0.276,0-0.5-0.224-0.5-0.5v-4c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v4C78.011,45.344,77.787,45.567,77.511,45.567z M77.511,39.567c-0.276,0-0.5-0.224-0.5-0.5v-2c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v2 C78.011,39.344,77.787,39.567,77.511,39.567z"
        />
        <path
            fill="#fff"
            d="M64.5,60.5c0-6.89,0-28.975,0-28.975c0-1.242-1.119-2.183-2.343-1.97l-19,3.657 c-0.958,0.167-1.657,0.998-1.657,1.97c0,0,0,19.318,0,24.318c0,2-2.75,2.063-2.75,2.063c-0.216,0.024-0.43,0.037-0.648,0.083 c-3.002,0.631-5.034,3.093-4.54,5.499c0.495,2.406,3.329,3.845,6.331,3.213C42.843,69.738,44.5,67.5,44.5,65 c0-5.5,0-21.656,0-21.656c0-0.487,0.346-0.903,0.826-0.985c2.798-0.477,11.77-2.254,15.001-2.83 c0.613-0.109,1.173,0.362,1.173,0.985c0,0,0,11.986,0,14.986c0,2-2.013,2.013-2.013,2.013c-0.454,0.002-0.915,0.033-1.385,0.132 c-3.002,0.631-5.034,3.093-4.54,5.499c0.495,2.406,3.329,3.845,6.331,3.213C62.674,65.773,64.5,63.5,64.5,60.5z"
        />
        <path
            fill="none"
            stroke="#1f212b"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M64.5,60.5 c0-6.89,0-28.975,0-28.975c0-1.242-1.119-2.183-2.343-1.97l-19,3.657c-0.958,0.167-1.657,0.998-1.657,1.97c0,0,0,19.318,0,24.318 c0,2-2.75,2.063-2.75,2.063c-0.216,0.024-0.43,0.037-0.648,0.083c-3.002,0.631-5.034,3.093-4.54,5.499 c0.495,2.406,3.329,3.845,6.331,3.213C42.843,69.738,44.5,67.5,44.5,65c0-5.5,0-21.656,0-21.656c0-0.487,0.346-0.903,0.826-0.985 c2.798-0.477,11.77-2.254,15.001-2.83c0.613-0.109,1.173,0.362,1.173,0.985c0,0,0,11.986,0,14.986c0,2-2.013,2.013-2.013,2.013 c-0.454,0.002-0.915,0.033-1.385,0.132c-3.002,0.631-5.034,3.093-4.54,5.499c0.495,2.406,3.329,3.845,6.331,3.213 C62.674,65.773,64.5,63.5,64.5,60.5z"
        />
    </svg>
);

export const spotify = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="100px"
        height="100px"
    >
        <circle cx="50" cy="50" r="35" fill="#60be92" />
        <path
            fill="#1f212b"
            d="M50,86c-19.851,0-36-16.149-36-36s16.149-36,36-36s36,16.149,36,36S69.851,86,50,86z M50,16	c-18.748,0-34,15.252-34,34s15.252,34,34,34s34-15.252,34-34S68.748,16,50,16z"
        />
        <path d="M65.5,24.227c-0.086,0-0.174-0.022-0.254-0.069c-0.642-0.379-1.303-0.738-1.967-1.066c-0.248-0.123-0.349-0.422-0.227-0.67	s0.421-0.348,0.67-0.227c0.686,0.339,1.37,0.71,2.033,1.102c0.238,0.141,0.316,0.447,0.176,0.685	C65.837,24.139,65.67,24.227,65.5,24.227z" />
        <path d="M68.5,26.249c-0.106,0-0.212-0.034-0.303-0.103c-0.323-0.247-0.651-0.487-0.983-0.719c-0.226-0.159-0.281-0.471-0.123-0.697	c0.159-0.226,0.471-0.281,0.697-0.123c0.343,0.241,0.683,0.489,1.017,0.745c0.219,0.167,0.261,0.481,0.093,0.701	C68.799,26.182,68.65,26.249,68.5,26.249z" />
        <path
            fill="#1f212b"
            d="M50,81c-17.093,0-31-13.907-31-31s13.907-31,31-31c3.667,0,7.257,0.635,10.672,1.887	c0.259,0.095,0.393,0.382,0.297,0.641c-0.095,0.26-0.382,0.396-0.641,0.297C57.024,20.614,53.549,20,50,20	c-16.542,0-30,13.458-30,30s13.458,30,30,30s30-13.458,30-30c0-8.439-3.585-16.536-9.836-22.213	c-0.205-0.186-0.22-0.502-0.034-0.706c0.186-0.205,0.503-0.219,0.706-0.034C77.295,32.913,81,41.279,81,50	C81,67.093,67.093,81,50,81z"
        />
        <path
            fill="#fff"
            d="M72.167,46.852c-0.62,0-1.248-0.165-1.816-0.51c-17.023-10.355-39.833-4.366-40.061-4.304 c-1.866,0.501-3.787-0.598-4.293-2.461c-0.506-1.864,0.592-3.785,2.455-4.293c1.049-0.286,25.901-6.866,45.538,5.078 c1.651,1.004,2.176,3.158,1.171,4.809C74.501,46.253,73.349,46.852,72.167,46.852z"
        />
        <path
            fill="#1f212b"
            d="M72.167,47.352c-0.731,0-1.449-0.202-2.076-0.583c-16.896-10.278-39.444-4.31-39.669-4.249 c-2.125,0.571-4.33-0.688-4.907-2.813c-0.577-2.127,0.682-4.328,2.806-4.907c1.057-0.289,26.112-6.92,45.929,5.133 c0.913,0.555,1.555,1.433,1.808,2.471c0.253,1.039,0.086,2.113-0.47,3.025C74.855,46.633,73.576,47.352,72.167,47.352z M45.828,39.738c7.599,0,16.79,1.314,24.783,6.176c0.471,0.286,1.009,0.438,1.557,0.438c1.058,0,2.017-0.539,2.566-1.441 c0.416-0.685,0.541-1.491,0.352-2.269c-0.189-0.779-0.671-1.437-1.355-1.853c-19.453-11.832-44.106-5.305-45.146-5.022 c-1.593,0.434-2.537,2.085-2.104,3.68c0.433,1.592,2.085,2.539,3.681,2.109C30.282,41.521,36.975,39.738,45.828,39.738z"
        />
        <path
            fill="#fff"
            d="M68.146,57.267c-0.531,0-1.069-0.141-1.556-0.437c-14.728-8.958-34.318-3.763-34.514-3.71 c-1.599,0.437-3.248-0.507-3.684-2.104c-0.436-1.599,0.507-3.248,2.105-3.684c0.902-0.246,22.304-5.912,39.21,4.372 c1.416,0.861,1.865,2.707,1.005,4.122C70.147,56.754,69.159,57.267,68.146,57.267z"
        />
        <path
            fill="#1f212b"
            d="M68.146,57.767c-0.64,0-1.268-0.176-1.815-0.51c-14.467-8.798-33.929-3.707-34.125-3.654 c-0.9,0.247-1.843,0.126-2.656-0.338c-0.812-0.464-1.394-1.216-1.64-2.117c-0.507-1.862,0.594-3.791,2.456-4.298 c0.912-0.249,22.513-5.968,39.602,4.427c1.648,1.003,2.175,3.16,1.172,4.809C70.499,57.138,69.38,57.767,68.146,57.767z M45.448,51.097c6.579,0,14.532,1.127,21.403,5.307c0.392,0.237,0.839,0.363,1.296,0.363c0.882,0,1.682-0.449,2.14-1.201 c0.716-1.178,0.34-2.719-0.838-3.436c-16.724-10.171-37.925-4.561-38.819-4.316c-1.33,0.363-2.116,1.74-1.754,3.07 c0.176,0.644,0.592,1.181,1.171,1.512c0.581,0.332,1.256,0.418,1.898,0.241C32.053,52.608,37.828,51.097,45.448,51.097z"
        />
        <g>
            <path
                fill="#fff"
                d="M63.743,67.011c-0.443,0-0.892-0.117-1.297-0.364c-12.812-7.793-29.852-3.276-30.022-3.229 c-1.332,0.361-2.707-0.423-3.07-1.754c-0.363-1.332,0.422-2.707,1.754-3.07c0.781-0.212,19.307-5.117,33.936,3.782 c1.18,0.718,1.555,2.255,0.837,3.435C65.41,66.584,64.587,67.011,63.743,67.011z"
            />
            <path
                fill="#1f212b"
                d="M63.743,67.511c-0.55,0-1.088-0.151-1.558-0.438c-12.626-7.682-29.461-3.221-29.629-3.174 c-1.598,0.434-3.25-0.512-3.685-2.104c-0.435-1.597,0.509-3.249,2.105-3.685c0.792-0.215,19.548-5.153,34.327,3.838 c0.685,0.416,1.166,1.074,1.356,1.853c0.189,0.778,0.064,1.584-0.353,2.269C65.76,66.972,64.801,67.511,63.743,67.511z M44.06,61.569c5.714,0,12.628,0.989,18.646,4.65c0.916,0.558,2.193,0.243,2.747-0.67c0.278-0.456,0.361-0.993,0.235-1.513 c-0.127-0.519-0.448-0.957-0.904-1.235c-14.415-8.768-32.77-3.937-33.545-3.727c-1.063,0.29-1.693,1.393-1.403,2.456 c0.29,1.063,1.391,1.696,2.457,1.403C32.385,62.909,37.41,61.569,44.06,61.569z"
            />
        </g>
    </svg>
);

export const external = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="100px"
        height="100px"
    >
        <path
            fill="#a3a3cd"
            d="M69,83H29c-6.627,0-12-5.373-12-12V31c0-6.627,5.373-12,12-12h40c6.627,0,12,5.373,12,12v40C81,77.627,75.627,83,69,83z"
        />
        <path
            fill="#fefdef"
            d="M74,12.5c-0.828,0-1.5,0.672-1.5,1.5s0.672,1.5,1.5,1.5h8.39L51.951,45.939c-0.585,0.585-0.586,1.533-0.002,2.119l0.003,0.003c0.586,0.588,1.537,0.589,2.124,0.002L84.5,17.62V26c0,0.828,0.672,1.5,1.5,1.5s1.5-0.672,1.5-1.5V12.5H74z"
        />
        <path
            fill="#1f212b"
            d="M69,83H29c-6.617,0-12-5.383-12-12V31c0-6.617,5.383-12,12-12h40c1.146,0,2.282,0.162,3.375,0.481c0.529,0.155,0.834,0.711,0.679,1.241c-0.155,0.529-0.702,0.833-1.241,0.679C70.903,21.135,69.957,21,69,21H29c-5.514,0-10,4.486-10,10v40c0,5.514,4.486,10,10,10h40c5.514,0,10-4.486,10-10V31c0-0.924-0.125-1.837-0.373-2.714c-0.149-0.531,0.16-1.084,0.691-1.234c0.533-0.147,1.084,0.161,1.234,0.691C80.85,28.797,81,29.893,81,31v40C81,77.617,75.617,83,69,83z"
        />
        <path
            fill="#1f212b"
            d="M53.015,49.003c-0.001,0-0.001,0-0.002,0c-0.535-0.001-1.038-0.21-1.415-0.589c-0.78-0.784-0.778-2.051,0-2.828L81.183,16H74c-1.103,0-2-0.897-2-2s0.897-2,2-2h13.5c0.276,0,0.5,0.224,0.5,0.5V26c0,1.103-0.897,2-2,2s-2-0.897-2-2v-7.172L54.43,48.417C54.052,48.795,53.55,49.003,53.015,49.003z M74,13c-0.552,0-1,0.448-1,1s0.448,1,1,1h8.39c0.202,0,0.385,0.122,0.462,0.309s0.034,0.402-0.108,0.545L52.305,46.293c-0.39,0.389-0.39,1.022-0.002,1.412c0.192,0.193,0.443,0.298,0.711,0.298h0.001c0.268,0,0.519-0.104,0.708-0.293l30.424-30.443c0.143-0.143,0.358-0.185,0.545-0.108C84.878,17.235,85,17.418,85,17.62V26c0,0.552,0.448,1,1,1s1-0.448,1-1V13H74z"
        />
        <path
            fill="#1f212b"
            d="M69 78H29c-3.86 0-7-3.141-7-7V31c0-3.859 3.14-7 7-7h35.5c.276 0 .5.224.5.5S64.776 25 64.5 25H29c-3.309 0-6 2.691-6 6v40c0 3.309 2.691 6 6 6h40c3.309 0 6-2.691 6-6V53c0-.276.224-.5.5-.5S76 52.724 76 53v18C76 74.859 72.859 78 69 78zM75.5 50c-.276 0-.5-.224-.5-.5v-4c0-.276.224-.5.5-.5s.5.224.5.5v4C76 49.776 75.776 50 75.5 50zM75.5 44c-.276 0-.5-.224-.5-.5v-2c0-.276.224-.5.5-.5s.5.224.5.5v2C76 43.776 75.776 44 75.5 44z"
        />
    </svg>
);
