const {model, Schema} = require('mongoose');

const trackSchema = new Schema({
    name: String,
    artist: String,
    sound: String,
    cover: String,
    duration: Number,
    like: Boolean,
})

module.exports = model("Movies", trackSchema);