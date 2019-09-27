// const tradeTokenForUser = require('./auth-helpers');
const { ApolloServer, gql } = require('apollo-server');

// Source: https://thegreatestbooks.org/
const books = [
  { id: '1', title: 'In Search of Lost Time' },
  { id: '2', title: 'Don Quixote' },
  { id: '3', title: 'Ulysses' },
  { id: '4', title: 'The Great Gatsby666' },
  { id: '5', title: 'Moby Dick' },
  { id: '6', title: 'Hamlet' },
  { id: '7', title: 'War and Peace' },
  { id: '8', title: 'The Odyssey' },
  { id: '9', title: 'One Hundred Years of Solitude' },
  { id: '10', title: 'The Divine Comedy' }
];

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
  }
  type Query {
    books: [Book!]!,
    me: User
  }
  type User {
    id: ID!
    username: String!
  }
`;

const resolvers = {
  Query: {
    async books() {
      return books;
    }
  }
};



const HEADER_NAME = 'authorization';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    let authToken = null;
    let currentUser = null;

     try {
        authToken = req.headers[HEADER_NAME];
        console.log(authToken)
        // if (authToken) {
        //      currentUser = await tradeTokenForUser(authToken);
        // }
     } catch (e) {
        console.warn(`Unable to authenticate using auth token: ${authToken}`);
     }

    return {
        authToken,
        currentUser,
    };
 },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
