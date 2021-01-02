import itemType from '../GqlSchemas/itemType';
import itemController from '../Controllers/items';

const graphql = require('graphql');

const { GraphQLNonNull, GraphQLString, GraphQLID} = graphql;

const deleteItem = {
	type: itemType,
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
		return itemController.deleteItems(args);
	},
};

export default deleteItem;
