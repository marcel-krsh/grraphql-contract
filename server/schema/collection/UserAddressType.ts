import {
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLNonNull,
} from 'graphql';

const UserAddressType = new GraphQLInputObjectType({
  name: 'UserAddress',
  description: 'Input payload for check user',
  fields: () => ({
    address: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
});

export default UserAddressType;
