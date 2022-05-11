
import {
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import { checkApprove } from '../../operations/collection-operations';
import IsApproved from './IsApprovedType';

const CollectionQueries = {
  checkCollectionApprove: {
    type: new GraphQLNonNull(IsApproved),
    args: {
      user: {
        type: GraphQLString,
      },
    },
    resolve: (_source, { user }) => {

      const result = checkApprove(user);
      // if (role != null) {
      //   return result.filter((user) => user.role === role);
      // }
      return result;
    },
  },
};

export default CollectionQueries;
