// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// CSS for Dev Environment
require('../public/styles/scss/master.scss');

//Import Whole Application
import Application from "./index.jsx";

//Variable for DOM
const APP = document.getElementById("APP");

let players = [
  {
    id: 1,
    name: "James Bond",
    score: 7,
  },
  {
    id: 2,
    name: "Austin Powers",
    score: 69,
  },
  {
    id: 3,
    name: "Dil Pickle",
    score: 1,
  },
]

// Render Application Into DOM
ReactDOM.render(<Application players={players} title="scoreboard"/>, APP)
