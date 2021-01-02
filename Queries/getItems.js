// import GraphQL BookType
import itemType from '../GqlSchemas/itemType';
import itemController from '../Controllers/items';

const graphql = require('graphql');

const { GraphQLList, GraphQLID } = graphql;

// Query
const getItems = {
	type: new GraphQLList(itemType),
	args: {},
	resolve: async () => {
		return itemController.getItems();
	},
};


export default getItems
;
