// import GraphQL BookType
import dealType from '../GqlSchemas/dealType';
import dealController from '../Controllers/deals';
import Model from '../Models/Model'

const graphql = require('graphql');

const { GraphQLList } = graphql;

// Query
const deals = {
	type: new GraphQLList(dealType),
	args: {},
	resolve: async () => {
		return dealController.getDeals();
	},
};

export default deals;
