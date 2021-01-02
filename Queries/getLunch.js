// import GraphQL BookType
import dealType from '../GqlSchemas/dealType';
import dealController from '../Controllers/deals';

const graphql = require('graphql');

const { GraphQLList } = graphql;

// Query
const getLunch = {
	type: new GraphQLList(dealType),
	args: {},
	resolve: async () => {
		return dealController.getLunchDeals();
	},
};

export default getLunch;
