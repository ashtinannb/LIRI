// dependencies 
require("dotenv").config();

// my variables 
var keys = require("./keys.js");

var axios = require("axios");
var fs = require('fs');
var moment = require("moment");

// joins arguments
var term = process.argv.slice(3).join(" ");

// variable for spotify
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

// variable for movies
var omdbURL = "http://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=trilogy";

// variable for concerts
var bandsURL = "https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp";


//// Functions


// function movie-this 

// function concert-this

// function spotify-this-song

// function do-what-it-says

