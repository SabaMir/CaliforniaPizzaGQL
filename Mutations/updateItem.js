import itemType from '../GqlSchemas/itemType';
import itemController from '../Controllers/items';

const graphql = require('graphql');

const { GraphQLNonNull, GraphQLString, GraphQLID} = graphql;

const updateItem = {
	type: itemType,
	/* define the arguments that we should pass to the mutation
   here we require both book name and the author name 
   the id will be generated automatically 
*/
	args: {
        id: {
			type:(GraphQLID)
		},
		itemName:{type: GraphQLString},
        itemCategory:{type: GraphQLString},
        description:{type: GraphQLString},
        flavour:{type: GraphQLString},
        size:{type: GraphQLString},
        price:{type: GraphQLString}

	},
	resolve: async (root, args) => {
		return itemController.updateItems(args);
	},
};

export default updateItem;
