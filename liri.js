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
function movieThis() {
//calling api
    axios
        .get(omdbURL)
        .then( // showing the data called from
            function(response) {

                console.log(". . . . . . . . . .");

                console.log("Movie Title: " + response.Title);
                console.log("Release Year: " + response.Year);
                console.log("IMDB Rating: " + response.imdbRating);
                console.log("Rotten Tomatoes Rating: " + response.Ratings[1].Value);
                console.log("Country: " + response.Country);
                console.log("Language: " + response.Language);
                console.log("Plot: " + response.Plot);
                console.log("Actors: " + response.Actors);

                console.log(". . . . . . . . . .");

            })
// function concert-this

// function spotify-this-song

// function do-what-it-says

