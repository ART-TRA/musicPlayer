const gql = require('graphql-tag');

module.exports = gql`    
    type Track {
        id: ID!
        trackName: String!,
        sound: String!,
        duration: Int!,
        like: Int!,
    }
    type Album {
        id: ID!
        albumName: String!,
        artist: String!,
        albumCover: String!,
        numberOfTracks: Int!,
        albumDuration: Int!,
        tracks: [Track]!,
    }
    type Query {
#        getTrack(trackId: ID!): Track
#        getAlbum(albumId: ID!): Album
        getAlbums: [Album]
    }
#    type Mutation {
#        createPlaylist(name: String!): Playlist!
#        deletePlaylist(playlistId: ID!): String!
#        addTrackToPlaylist(playlistId: ID!, trackId: ID!): Playlist
#        deleteTrackFromPlaylist(trackId: ID!): String!
#    }
`;