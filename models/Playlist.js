
const {model, Schema} = require('mongoose');


const playlistSchema = new Schema({
    name: String,
    cover: String,
    tracks: [],
    numberOFTracks: Number,
    duration: Number,
})
module.exports = model("Producers", playlistSchema);