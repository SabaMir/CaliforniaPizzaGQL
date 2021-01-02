import dealType from '../GqlSchemas/dealType';
import dealController from '../Controllers/deals';
import itemType from '../GqlSchemas/itemType'

const graphql = require('graphql');

const { GraphQLNonNull, GraphQLString, GraphQLID,GraphQLList} = graphql;

const updateDeal = {
	type: dealType,
	/* define the arguments that we should pass to the mutation
   here we require both book name and the author name 
   the id will be generated automatically 
*/
	args: {
		id: {
			type: new GraphQLNonNull(GraphQLID),
		},
		dealCategory:{type: GraphQLString},
        dealName:{type: GraphQLString},
        items:{ type: new GraphQLList(GraphQLID)}

	},
	resolve: async (root, args) => {
		return dealController.updateDeals(args);
	},
};

export default updateDeal;
