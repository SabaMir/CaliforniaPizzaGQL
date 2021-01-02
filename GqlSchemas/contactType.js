const graphql = require('graphql');

const { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString } = graphql;

const contactType = new GraphQLObjectType({
	name: 'contactType',
	fields: () => {
		return {
			
            firstName: { type: GraphQLString },
            lastName: { type: GraphQLString },
            email: { type: GraphQLString },
            message: { type: GraphQLString }
		};
	},
});

export default contactType;
