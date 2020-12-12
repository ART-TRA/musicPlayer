const Playlist = require('../../models/Track')

module.exports = {
    Query: {
        async getPlaylist() {
            try {
                const tracks = await Playlist.find();
                return tracks;
            } catch (err) {
                throw new Error(err);
            }
        },
        async getTrack(_, {trackId}) {
            try {
                const track = await Playlist.findById(trackId);
                if (track) {
                    return track;
                } else {
                    throw new Error('track not found')
                }
            } catch (err) {
                throw new Error(err);
            }
        },
    }
}