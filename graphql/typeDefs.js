// const gql = require('apollo-server');
const gql = require('graphql-tag');

module.exports = gql`
    type Track {
        id: ID!
        name: String!,
        artist: String!,
        sound: String!,
        cover: String!,
        duration: Int!,
        like: Boolean!,
    }
    type Query{
        getPlaylist: [Track]
        getTrack(trackId: ID!): Track
    }
`;