import orderType from '../GqlSchemas/orderType';
import orderController from '../Controllers/orders';

const graphql = require('graphql');

const { GraphQLNonNull, GraphQLString, GraphQLID, GraphQLList } = graphql;

const placeOrder = {
	type: orderType,
	/* define the arguments that we should pass to the mutation
   here we require both book name and the author name 
   the id will be generated automatically 
*/
	args: {
        // id: {
        //     type: new GraphQLNonNull(GraphQLID),
        // },
       
        city: { type: GraphQLString },
        dealName: { type: GraphQLString },
        purchasedItems: { type: new GraphQLList(GraphQLID)},
        dealsPurchased: { type: new GraphQLList(GraphQLID)},
        tax:{type:GraphQLString},
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        address:{type:GraphQLString}

	},
	resolve: async (root, args) => {
		return orderController.placeOrder(args);
	},
};

export default placeOrder;
