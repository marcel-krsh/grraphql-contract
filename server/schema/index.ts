import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';


import CollectionQueries from './collection/CollectionQueries';


const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      ...CollectionQueries
    }),
  }),
  // mutation: new GraphQLObjectType({
  //   name: 'Mutation',
  //   fields: () => ({
  //   }),
  // }),
});

export default schema;
