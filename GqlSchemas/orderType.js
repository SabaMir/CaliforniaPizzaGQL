const graphql = require('graphql');
import dealType from './dealType';
import itemType from './itemType';


const { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString, GraphQLList, GraphQLUnionType, GraphQLId } = graphql;
// var itemType = new GraphQLUnionType({
// 	name: 'Items',
// 	types: [ GraphQLID, dealType ]
//   });

const OrderType = new GraphQLObjectType({
	name: 'orderType',
	fields: () => {
		return {
			id: {
				type: new GraphQLNonNull(GraphQLID),
			},
           
            city: { type: GraphQLString },
            dealName: { type: GraphQLString },
            purchasedItems: { type: new GraphQLList(itemType)},
			dealsPurchased: { type: new GraphQLList(dealType)},
			tax:{type:GraphQLString},
			name:{type:GraphQLString},
			email:{type:GraphQLString},
			address:{type:GraphQLString}
			
            
		};
	},
});

export default OrderType;
