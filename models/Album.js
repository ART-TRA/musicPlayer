const {model, Schema} = require('mongoose');


const albumSchema = new Schema({
    albumName: String,
    artist: String,
    albumCover: String,
    numberOfTracks: Number,
    albumDuration: Number,
    tracks: [
        {
            id: String,
            trackName: String,
            duration: Number,
            sound: String,
            like: Number
        }
    ],
})
module.exports = model("Album", albumSchema, 'albums');