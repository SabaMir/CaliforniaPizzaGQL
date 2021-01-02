const graphql = require('graphql');

const { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString } = graphql;

const itemType = new GraphQLObjectType({
	name: 'itemType',
	fields: () => {
		return {
			id: {
				type: new GraphQLNonNull(GraphQLID),
			},
            itemName: { type: GraphQLString },
            itemCategory: { type: GraphQLString },
            description: { type: GraphQLString },
			flavour: { type: GraphQLString },
			size: { type: GraphQLString },
			price: { type: GraphQLString }
		};
	},
});

export default itemType;
