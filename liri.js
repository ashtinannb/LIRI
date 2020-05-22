require("dotenv").config();

// this imports api keys
var keys = require("./keys.js");

// axios npm
var axios = require("axios");

// imports the fs package
var request = require("fs");

// moment.js npm
var moment = require('moment');

// inits api client using 
var spotify = new Spotify(keys.spotify);

