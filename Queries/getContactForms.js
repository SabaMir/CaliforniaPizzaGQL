// import GraphQL ContactType;
import contactType from '../GqlSchemas/contactType';
import contactController from '../Controllers/contactForm';

const graphql = require('graphql');

const { GraphQLList } = graphql;

// Query
const getContactForms = {
	type: new GraphQLList(contactType),
	args: {},
	resolve: async () => {
		return contactController.getContactForms();
	},
};

export default getContactForms;
