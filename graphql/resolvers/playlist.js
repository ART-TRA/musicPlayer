// const Track = require('../../models/Track')
// const Playlist = require('../../models/Playlist')
const Album = require('../../models/Album')

module.exports = {
    Query: {
        // async getTrack(_, {trackId}) {
        //     try {
        //         const track = await Album.tracks.findById(trackId);
        //         if (track) {
        //             return track;
        //         } else {
        //             throw new Error('track not found')
        //         }
        //     } catch (err) {
        //         throw new Error(err);
        //     }
        // },

        //    ----------------------------------------------------------
        async getAlbums() {
            try {
                return await Album.find()
            } catch (err) {
                throw new Error(err);
            }
        },
        // async getAlbum(_, {albumId}) {
        //     try {
        //         const album = await Album.findById(albumId);
        //         if (album) {
        //             return album
        //         }
        //     } catch (err) {
        //         throw new Error(err);
        //     }
        // }
        //    ----------------------------------------------------------
    },
    // Mutation: {
    //     async createPlaylist(_, {name}) {
    //         const newPlaylist = new Playlist({
    //             name,
    //             tracks: []
    //         })
    //         const playlist = await newPlaylist.save()
    //         return playlist
    //     },
    //     async addTrackToPlaylist(_, {playlistId, trackId}) {
    //         const track = await Track.findById(trackId)
    //         return Playlist.findOneAndUpdate({playlistId}, {tracks: track})
    //     }
    // }
}