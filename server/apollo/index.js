const { ApolloServer, gql } = require('apollo-server');
const { MongoClient, ObjectId } = require('mongodb');

const MONGO_URL = 'mongodb://localhost:27017';

const prepare = (obj) => (console.log({obj}), {
  ...obj,
  _id: obj._id.toString(),
});

const typeDefs = gql`
  type Customer {
    _id: ID!
    first_name: String!
    last_name: String!
    email: String!
    gender: String!
    ip_address: String!
  }
  type Query {
    customers: [Customer!]!
    customer(_id: String): Customer
  }
`;

const run = async () => {

  const client = await MongoClient.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  var db = client.db('db');

  const Customers = db.collection('customers');

  const resolvers = {
    Query: {
      async customers() {
        return (await Customers.find({}).toArray()).map(prepare)
      },
      async customer(root, { _id }) {
        return prepare(await Customers.findOne(ObjectId(_id)))
      },
    }
  };

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
      return {
      };
    },
  });

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });

}

run();
