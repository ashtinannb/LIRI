// dependencies 
require("dotenv").config();

// my variables 
var keys = require("./keys.js");

var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var axios = require("axios");
var fs = require('fs');
var moment = require("moment");

var search = process.argv[2];

// Joining the remaining arguments since an actor or tv show name may contain spaces
var term = process.argv.slice(3).join(" ");

// variable for spotify
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

// variable for movies
var omdbURL = "http://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=trilogy";

// variable for concerts
var bandsURL = "https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp";
