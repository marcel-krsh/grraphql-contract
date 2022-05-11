import {
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLNonNull,
} from 'graphql';


const IsApprovedType = new GraphQLObjectType({
  name: 'IsApproved',
  description: 'User type definition',
  fields: () => ({
    isApproved: {
      type: new GraphQLNonNull(GraphQLBoolean),
    },
  }),
});

export default IsApprovedType;
