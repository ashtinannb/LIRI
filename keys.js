console.log('this is loaded');

// this calls the spotify API, wrote down id and pw for later
exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};