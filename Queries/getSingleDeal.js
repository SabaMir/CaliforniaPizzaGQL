import dealType from '../GqlSchemas/dealType';
import dealController from '../Controllers/deals';

const graphql = require('graphql');

const { GraphQLNonNull, GraphQLString, GraphQLID, GraphQLObjectType} = graphql;

const getSingleDeal = {
	type: dealType,
	/* define the arguments that we should pass to the mutation
   here we require both book name and the author name 
   the id will be generated automatically 
*/
	args: {
        id: {
			type:(GraphQLID)
		}

	},
	resolve: async (root, args) => {
		return dealController.getSingleDeal(args);
	},
};

export default getSingleDeal;
