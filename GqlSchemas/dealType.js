const graphql = require('graphql');
import itemType from './itemType';

const { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString, GraphQLList, GraphQLUnionType, GraphQLId } = graphql;
// var itemType = new GraphQLUnionType({
// 	name: 'Items',
// 	types: [ GraphQLID, dealType ]
//   });

const dealType = new GraphQLObjectType({
	name: 'dealType',
	fields: () => {
		return {
			id: {
				type: new GraphQLNonNull(GraphQLID),
			},
           
            dealCategory: { type: GraphQLString },
            dealName: { type: GraphQLString },
            items: { type: new GraphQLList(itemType)},
		};
	},
});

export default dealType;
