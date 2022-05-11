const { ApolloServer, gql } =  require('apollo-server-express');

describe('Testing sql operations', () => {
  it('example test', () => {
    expect(true).toEqual(true);
  });
});


// For clarity in this example we included our typeDefs and resolvers above our test,
// but in a real world situation you'd be importing these in from different files
const typeDefs = gql`
    type Query {
      checkCollectionApprove(user: String!): IsApproved!
    }

    type IsApproved {
      isApproved: Boolean!
    }

`;

const resolvers = {
  Query: {
    checkCollectionApprove: (_, {address}) => `${address}`,
  },
};

it('returns false with the provided address', async () => {
  const testServer = new ApolloServer({
    typeDefs,
    resolvers
  });

  const result = await testServer.executeOperation({
    query: 'query  getCollectionQuery ($address: String!) { checkCollectionApprove(user: $address) {isApproved} } ',
    variables: { address: '0x3F92602154f384d6A8205033729c75A3E67a9a9d'}
  });


  expect(result.data).toBe(false);
});