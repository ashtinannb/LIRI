// dependencies 
require("dotenv").config();

// my variables 
var keys = require("./keys.js");

var axios = require("axios");
var fs = require('fs');
var moment = require("moment");

// joins my arguments
var term = process.argv.slice(3).join(" ");
var search = process.argv[2];

// variable for spotify
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

// variable for movies -- Movie API wip 
// var omdbURL = "http://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=trilogy";


// variable for concerts -- Concert API
var bandsURL = "https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp";


//// Functions

// concert-this function
function concertThis() {
    //calls api
    axios.get(bandsURL) //returns data
        .then(function (response) {

            console.log(". . . . . . . . . .");

            for (var i = 0; i < response.data.length; i++) {

                var dateOfEvent = response.data[i].datetime
                var dateFormatted = moment().format("MM/DD/YYYY", dateOfEvent)
                // shows data
                console.log("-------------------------");
                console.log("Venue Name: " + response.data[i].venue.name);
                console.log("Venue Location: " + response.data[i].venue.location);
                console.log("Date of Event: " + dateFormatted);
            }
            console.log(". . . . . . . . . .");
        });
}

//spotify this function
function spotifyThis() {
    spotify //searches api 
        .search({
            type: 'track',
            query: term
        })
        .then(function (response) { //returns and documents artist/song info

            console.log(". . . . . . . . . .");
            console.log("Artist: " + response.tracks.items[0].artists[0].name);
            console.log("Song: " + response.tracks.items[0].name);
            console.log("Preview Link: " + response.tracks.items[0].external_urls.spotify);
            console.log("Album: " + response.tracks.items[0].album.name);
            console.log(". . . . . . . . . .");
        })
        .catch(function (err) {
            console.log(err);
        });
}


// do what it says function
function doWhatItSays() {

    fs.readFile("random.txt", "utf8", function (error, data) {

        // logs errors
        if (error) {
            return console.log(error);
        }
    });
}
