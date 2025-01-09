import React from 'react';
import HomeScreenContent from './../components/AppComponents/HomeScreenContent.tsx/HomeScreenContent';

import m1 from "../assets/images/movie-1.png";
import m2 from "../assets/images/movie-2.png";
import m3 from "../assets/images/movie-3.png";
import m4 from "../assets/images/movie-4.png";
import m5 from "../assets/images/movie-5.png";
import m6 from "../assets/images/movie-6.png";
import m7 from "../assets/images/movie-7.png";
import m9 from "../assets/images/movie-9.png";
import m10 from "../assets/images/movie-10.png";
import header from "../assets/images/header-1.png";


export const mockMoviesData = [
  {
    id: 1,
    title: "The Redemption",
    year: 1994,
    runtime: 142,
    actors: "Tim Robbins, Morgan Freeman, Bob Gunton",
    description:
      "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.",
    image: m1,
    header: header,
    reviews: 9.5,
    type:"action"
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 1904,
    runtime: 170,
    actors: "Tim Robbins, Morgan Freeman, Bob Gunton",
    description:
      "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.",
    image: m2,
    header: header,
    reviews: 9.5,
    type:"action"

  },
  {
    id: 3,
    title: "Interstellar",
    year: 1904,
    runtime: 170,
    actors: "Tim Robbins, Morgan Freeman, Bob Gunton",
    description:
      "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.",
    image: m3,
    header: header,
    reviews: 9.5,
    type:"action"

  },
  {
    id: 4,
    title: "Forrest Gump",
    year: 1924,
    runtime: 170,
    actors: "Tim Robbins, Morgan Freeman, Bob Gunton",
    description:
      "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.",
    image: m4,
    header: header,
    reviews: 7.5,
    type:"action"

  },
  {
    id: 5,
    title: "Inception",
    year: 1904,
    runtime: 120,
    actors: "Tim Robbins, Morgan Freeman, Bob Gunton",
    description:
      "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.",
    image: m5,
    header: header,
    reviews: 9.5,
    type:"cartoon"

  },
  {
    id: 6,
    title: "The Shawshank Redemption",
    year: 1904,
    runtime: 170,
    actors: "Tim Robbins, Morgan Freeman, Bob Gunton",
    description:
      "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.",
    image: m6,
    header: header,
    reviews: 9.5,
    type:"action"

  },
  {
    id: 7,
    title: "The Shawshank Redemption",
    year: 1904,
    runtime: 170,
    actors: "Tim Robbins, Morgan Freeman, Bob Gunton",
    description:
      "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.",
    image: m7,
    header: header,
    reviews: 9.5,
    type:"action"

  },
];

const imagesSlider = [
  {
    id: 1,
    title: "SpiderMan",
    image: m10,
    header: header,
    reviews: 10.3,
    year: 2010,
    description: "lorem lorem lorem pla pla pla",
  },
  {
    id: 2,
    title: "SpiderMan",
    image: m9,
    header: header,
    reviews: 10.3,
    year: 2010,
    description: "lorem lorem lorem pla pla pla",
  },
  {
    id: 3,
    title: "SpiderMan",
    image: m10,
    header: header,
    reviews: 10.3,
    year: 2010,
    description: "lorem lorem lorem pla pla pla",
  },
];

const TabData = [
  {
    key: "1",
    content: React.createElement(HomeScreenContent),
  },
  {
    key: "2",
    title: "Upcoming",
    content: "..",
  },
  {
    key: "3",
    title: "Top Rated",
    content: "..",
  },
  {
    key: "4",
    title: "Popular",
    content: "..",
  },
];

export { imagesSlider };
