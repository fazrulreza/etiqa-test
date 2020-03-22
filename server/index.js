import { ApolloServer } from 'apollo-server';
/** import apollo-errors */
import { formatError } from 'apollo-errors';
/** import GraphQL resolvers */
import resolvers from './graphql/resolvers';
/** import GraphQL types */
import typeDefs from './graphql/types';
/** import connectors */
import connectors from './graphql/connectors';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError,
  cors: true,
  playground: true,
  introspection: true,
  context: () => ({
    connectors,
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
