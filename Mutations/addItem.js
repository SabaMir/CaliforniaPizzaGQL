import itemType from '../GqlSchemas/itemType';
import itemController from '../Controllers/items';

const graphql = require('graphql');

const { GraphQLNonNull, GraphQLString } = graphql;

const addItem = {
	type: itemType,
	/* define the arguments that we should pass to the mutation
   here we require both book name and the author name 
   the id will be generated automatically 
*/
	args: {
        itemName:{type: GraphQLString},
        itemCategory:{type: GraphQLString},
        description:{type: GraphQLString},
        flavour:{type: GraphQLString},
        size:{type: GraphQLString},
        price:{type: GraphQLString}

	},
	resolve: async (root, args) => {
		return itemController.addItems(args);
	},
};

export default addItem;
