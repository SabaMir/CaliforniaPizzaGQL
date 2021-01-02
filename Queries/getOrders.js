// import GraphQL BookType
import orderType from '../GqlSchemas/orderType';
import orderController from '../Controllers/orders';
import Model from '../Models/Model'

const graphql = require('graphql');

const { GraphQLList } = graphql;

// Query
const order = {
	type: new GraphQLList(orderType),
	args: {},
	resolve: async () => {
		return orderController.getOrders();
	},
};

export default order;
