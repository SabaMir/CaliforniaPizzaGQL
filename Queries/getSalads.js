// import GraphQL BookType
import itemType from '../GqlSchemas/itemType';
import itemController from '../Controllers/items';

const graphql = require('graphql');

const { GraphQLList } = graphql;

// Query
const getsalad = {
	type: new GraphQLList(itemType),
	args: {},
	resolve: async () => {
		return itemController.getSalads();
	},
};

export default getsalad;
