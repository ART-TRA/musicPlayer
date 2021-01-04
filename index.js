const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose')
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers/playlist')

const PORT = process.env.PORT || 5000;
const server = new ApolloServer({
    typeDefs,
    resolvers
})

const src = 'mongodb+srv://popcop:popcop@cluster0.kybcj.mongodb.net/graphqlproject';
mongoose.connect(src, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then((res) => {
        console.log('MongoDB Connected');
        return server.listen({port: PORT});
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`)
    })
.catch(err => {
    console.error(err)
})