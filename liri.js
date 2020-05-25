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

// variable for movies -- Movie API 
 var omdbURL = "http://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=trilogy";


// variable for concerts -- Concert API
var bandsURL = "https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp";


//// Functions

// concert-this function
function concertThis() {
    //calls api
    axios.get(bandsURL) 
        .then(function (response) { // returns and documents concert info

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


// movie this function
function movieThis() {
    axios //searches api
        .get(omdbURL)
        .then(function(response) { //returns and documents movie info

                console.log("Movie Title: " + response.data.Title);
                console.log("Release Year: " + response.data.Year);
                console.log("IMDB Rating: " + response.data.imdbRating);
                console.log("Actors: " + response.data.Actors);
                console.log("Plot: " + response.data.Plot);
                console.log("Country: " + response.data.Country);
                console.log(". . . . . . . . . .");
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
if (search === "spotify-this-song") {
    spotifyThis(term);
} else if (search === "movie-this") {
    omdbURL = "http://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=trilogy";
    movieThis();

} else if (search === "concert-this") {
    bandsURL = "https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp";
    concertThis();

} else {
    console.log("LIRI SAYS: Sorry, please try again.")
}



if (search === "spotify-this-song" && term !== "") {
    spotifyThis();

} else if (search === "spotify-this-song" && term === "") {
    term = "All the Small Things";
} else if (search === "movie-this" && term !== "") {
    movieThis();
} else if (search === "movie-this" && term === "") {
    term = "mr nobody";
    omdbURL = "http://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=trilogy";
    movieThis();

} else if (search === "concert-this" && term !== "") {
    concertThis();

} else if (search === "concert-this" && term === "") {
    term = "Tool";
    bandsURL = "https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp";
    concertThis();

} else if (search === "do-what-it-says") {
    doWhatItSays();

} else {
    console.log("LIRI SAYS: Sorry, I don't understand. Please enter a command.")
}