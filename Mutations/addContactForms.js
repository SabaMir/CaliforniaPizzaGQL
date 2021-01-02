import contactType from '../GqlSchemas/contactType';
import contactController from '../Controllers/contactForm';

const graphql = require('graphql');

const { GraphQLNonNull, GraphQLString } = graphql;

const addContactForms = {
	type: contactType,
	/* define the arguments that we should pass to the mutation
   here we require both book name and the author name 
   the id will be generated automatically 
*/
	args: {
        
        firstName:{type: GraphQLString},
        lastName:{type: GraphQLString},
        email:{type: GraphQLString},
        message:{type: GraphQLString}

	},
	resolve: async (root, args) => {
		return contactController.addContactForm(args);
	},
};

export default addContactForms;
