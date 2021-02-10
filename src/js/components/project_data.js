//int - images
import appo_music from "../../imgs/appo_music.jpg";
import devhub from "../../imgs/devhub.jpg";
import lyrassist from "../../imgs/lyrassist.jpg";
import fletcher_silent from "../../imgs/fletcher_silent.jpg";
import wild_love from "../../imgs/wild_love.jpg";
import zosia_alter from "../../imgs/zosia_alter.jpeg";
import zosia_suns from "../../imgs/zosia_suns.jpg";
import caitlyn_fix from "../../imgs/caitlyn_fix.jpg";
import fletcher_forever from "../../imgs/fletcher_forever.jpg";
import ninetythree_punx from "../../imgs/ninetythree_punx.jpg";
import jessie_christmas from "../../imgs/jessie_christmas.jpg";
import haley_dream from "../../imgs/haley_dream.png";
import reyna_way from "../../imgs/reyna_way.jpg";
import sky_downhill from "../../imgs/sky_downhill.jpg";
import frank_provider from "../../imgs/frank_provider.jpg";
import pria_foolish from "../../imgs/pria_foolish.jpg";
import loko_loko from "../../imgs/loko_loko.jpg";
import first_man from "../../imgs/first_man.jpg";
import eylon_shiri from "../../imgs/eylon_shiri.png";
import eylon_time from "../../imgs/eylon_time.png";
import tanooki_wow from "../../imgs/tanooki_wow.jpg";

export const types = ["ALL", "MUSIC", "CODE"];

export const projects = [
    {
        id: 1,
        title: "Appo Music",
        subtitle: "React, Redux, Rails, PostgreSQL",
        description:
            "Appo Music is a full-stack clone of the incredible Apple Music online streaming platform, with an aim to re-create it's core features, seamless design, and excellent user experience.",
        date: "2021-01-01",
        image: appo_music,
        links: { view: "https://appo-music.herokuapp.com/" },
        type: "CODE",
    },
    {
        id: 2,
        title: "First Man",
        subtitle: "Original Motion Picture Soundtrack",
        description: "Credits: Asst. Engineer",
        date: "2018-10-12",
        image: first_man,
        links: {
            Apple:
                "https://music.apple.com/us/album/first-man-original-motion-picture-soundtrack/1437211399",
            Spotify: "https://open.spotify.com/album/4NFpOHIv0hJa9of0IQsgKw",
            YouTube: "KqpMAYaKLgI",
        },
        type: "MUSIC",
    },
    {
        id: 3,
        title: "LYRASSIST",
        subtitle: "JavaScript, jQuery",
        description:
            "LYRASSIST is a word recommendation tool and visualizer for writers. Built strictly with JavaScript/JQuery, HTML and CSS to showcase front-end animation/transitions.",
        date: "2020-11-30",
        image: lyrassist,
        links: { view: "https://oriravid.github.io/LYRASSIST/" },
        type: "CODE",
    },
    {
        id: 4,
        title: "Forever (Stripped)",
        subtitle: "FLETCHER",
        description: "Credits: Asst. Engineer",
        date: "2020-05-07",
        image: fletcher_forever,
        links: {
            Apple:
                "https://music.apple.com/us/album/1510078837?ign-itscg=30440&ign-itsct=catchall_p1",
            Spotify: "https://open.spotify.com/album/5ctNXburXjfykf343XvgMp",
            YouTube: "LoJ7Q_9Kf_4",
        },
        type: "MUSIC",
    },
    {
        id: 5,
        title: "devHub",
        subtitle: "React, Express, Node, MongoDB",
        description:
            "devHUB is a platform that empowers developers to showcase themselves and their work, connect with other developers, and access job opportunities. General professionals have Linkedin, designers have Dribble, and now developers have devHUB.",
        date: "2020-11-25",
        image: devhub,
        links: { view: "https://getdevhub.herokuapp.com/#/" },
        type: "CODE",
    },
    {
        id: 6,
        title: "93 Punx",
        subtitle: "93 Punx",
        description:
            "Credits: Touring Production Manager, FOH Engineer, Vocal Processing/Playback",
        date: "2019-08-23",
        image: ninetythree_punx,
        links: {
            Apple: "https://music.apple.com/us/album/93punx/1476581045",
            Spotify: "https://open.spotify.com/album/13VX4SeBbXuZEihnA91GSo",
            YouTube: "enqtRxHtGG8",
        },
        type: "MUSIC",
    },

    {
        id: 7,
        title: "This Christmas Day",
        subtitle: "Jessie J",
        description: "Credits: Asst. Engineer",
        date: "2018-10-26",
        image: jessie_christmas,
        links: {
            Apple:
                "https://music.apple.com/us/album/this-christmas-day/1438807275?ign-gact=3&ls=1",
            Spotify:
                "https://open.spotify.com/album/5FVQjSLBVMdWaZYD4vf3gS?autoplay=true",
            YouTube: "aDKZREQaSA0",
        },
        type: "MUSIC",
    },

    {
        id: 8,
        title: "Dreams",
        subtitle: "Haley Reinhart",
        description: "Credits: Asst. Engineer",
        date: "2019-04-08",
        image: haley_dream,
        links: {
            YouTube: "NrWyLIlNrGE",
        },
        type: "MUSIC",
    },

    {
        id: 9,
        title: "Provider",
        subtitle: "Frank Ocean",
        description: "Credits: Asst. Engineer",
        date: "2017-08-28",
        image: frank_provider,
        links: {
            Apple:
                "https://music.apple.com/us/album/provider-single/1276055312?i=1276055314&ign-gact=3&ls=1",
            Spotify: "https://open.spotify.com/album/7uSaHPXSYaRB3FxLOmatG9",
            YouTube: "XKQNJzquduI",
        },
        type: "MUSIC",
    },

    {
        id: 10,
        title: "The Way I Loved You",
        subtitle: "REYNA",
        description: "Credits: Asst. Engineer",
        date: "2019-06-21",
        image: reyna_way,
        links: {
            Apple:
                "https://music.apple.com/us/album/the-way-i-loved-you-single/1466331959",
            Spotify: "https://open.spotify.com/album/2djMHYUGjj4bi7li2U7gwz",
            YouTube: "6W9dT27X4sU",
        },
        type: "MUSIC",
    },
    {
        id: 11,
        title: "Downhill Lullaby",
        subtitle: "Sky Ferreira",
        description: "Credits: Asst. Engineer",
        date: "2019-03-27",
        image: sky_downhill,
        links: {
            Apple:
                "https://music.apple.com/us/album/1457079053?ign-itscg=30440&ign-itsct=catchall_p1",
            Spotify: "https://open.spotify.com/track/5pTpFp9wr8X7uddedE7uJS",
            YouTube: "n8x55qS3chA",
        },
        type: "MUSIC",
    },

    {
        id: 12,
        title: "Silent Night",
        subtitle: "FLETCHER",
        description: "Credits: Asst. Engineer",
        date: "2020-12-01",
        image: fletcher_silent,
        links: {
            Apple:
                "https://music.apple.com/us/album/silent-night-single/1541041366",
        },
        type: "MUSIC",
    },
    {
        id: 13,
        title: "Loko Wit Tha Mask EP",
        subtitle: "Loko Wit Tha Mask",
        description:
            "Credits: Recording Engineer, Mix Engineer, Add'l Production (Gang Member, OTS Freestyle)",
        date: "2019-10-11",
        image: loko_loko,
        links: {
            Apple:
                "https://music.apple.com/us/album/loko-wit-tha-mask-ep/1482348618",
            Spotify: "https://open.spotify.com/album/67uIzBLC1DhJ8cUSTVJhnd",
            YouTube: "NM-flyvuFGI",
        },
        type: "MUSIC",
    },
    {
        id: 14,
        title: "Love Gone Wrong",
        subtitle: "Wild Rivers",
        description: "Credits: Asst. Engineer",
        date: "2021-01-28",
        image: wild_love,
        links: {
            Apple:
                "https://music.apple.com/us/album/love-gone-wrong-single/1548050610?at=11l69&ct=FFM_b96c67b884e4d22bc887e7bb8d0e9650&uo=4&app=music",
            Spotify: "https://open.spotify.com/album/2y0LnZGWcOLaHhzLpSMjHR",
            YouTube: "w2MmlRb0lNA",
        },
        type: "MUSIC",
    },
    {
        id: 15,
        title: "Shiri Li",
        subtitle: "Eylon Carny",
        description: "Credits: Editing, Mix Engineer",
        date: "2015-08-18",
        image: eylon_shiri,
        links: {
            YouTube: "S6w9gANo-6s",
        },
        type: "MUSIC",
    },
    {
        id: 16,
        title: "The Alter",
        subtitle: "Zosia",
        description: "Credits: Asst. Engineer",
        date: "2021-02-04",
        image: zosia_alter,
        links: {
            Apple: "https://music.apple.com/us/album/7-suns-single/1538318654",
            Spotify:
                "https://open.spotify.com/album/2itxaK9bdTAfQlxUcw10nB?si=15rypYVHRpGLZoCrbOrv_A&nd=1",
            YouTube: "-DLlwdJnkfE",
        },
        type: "MUSIC",
    },
    {
        id: 17,
        title: "Foolish",
        subtitle: "Pria Cotterell",
        description:
            "Credits: Recording Engineer, Mix Engineer, Add'l Production",
        date: "2019-04-07",
        image: pria_foolish,
        links: {
            Apple: "https://music.apple.com/us/album/foolish-single/1459294329",
            Spotify: "https://open.spotify.com/album/1fKb9VHVdBKIWbi0nx3zZW",
            YouTube: "cWoZAB44BiU",
        },
        type: "MUSIC",
    },
    {
        id: 18,
        title: "7 Suns",
        subtitle: "Zosia",
        description: "Credits: Asst. Engineer",
        date: "2020-11-19",
        image: zosia_suns,
        links: {
            Apple: "https://music.apple.com/us/album/7-suns-single/1538318654",
            Spotify:
                "https://open.spotify.com/album/6aQ4SFj2K6ESZ27bQRCJBq?si=zzPS1HM_SJ-s0YE3aWyg4g&nd=1",
            YouTube: "pp-o6SV-hOw",
        },
        type: "MUSIC",
    },
    {
        id: 19,
        title: "Fix You",
        subtitle: "Caitlyn Smith",
        description: "Credits: Asst. Engineer",
        date: "2020-09-25",
        image: caitlyn_fix,
        links: {
            Apple:
                "https://music.apple.com/us/album/supernova-deluxe/1531535233",
            Spotify:
                "https://open.spotify.com/album/7EVVjcblXEwmzOUFSIdExn?si=JxN3K9g-SyyQzOo2vB_Pvw&nd=1",
            YouTube: "eUuInNTFFtY",
        },
        type: "MUSIC",
    },
    {
        id: 20,
        title: "Wow",
        subtitle: "Tanooki James",
        description: "Credits: Editing, Add'l Production, Mix Engineer",
        date: "2019-08-29",
        image: tanooki_wow,
        links: {
            YouTube: "jIY3SYAH9zE",
        },
        type: "MUSIC",
    },
    {
        id: 21,
        title: "Time in a Bottle",
        subtitle: "Eylon Carny",
        description: "Credits: Editing, Mix Engineer",
        date: "2018-10-10",
        image: eylon_time,
        links: {
            YouTube: "ypp4bW1V9Bo",
        },
        type: "MUSIC",
    },
];
