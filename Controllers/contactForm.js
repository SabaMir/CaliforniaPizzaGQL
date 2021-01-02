import Model from '../Models/Model';

const getContactForms = async () => {
	const contactForms = await Model.ContactUsModel.find();
	if (contactForms) {
		return contactForms;
	}
	return {
		error: JSON.stringify('Internal Server Error! Can not get contact forms right now'),
	};
};

const addContactForm = async args => {
	const { firstName, lastName, email,message } = args;

	const book = new Model.ContactUsModel({
		firstName, lastName, email,message
	});
	const savedBook = await book.save();
	if (savedBook) {
		return savedBook;
	}
	return {
		error: JSON.stringify('Internal Server Error! Can not save right now'),
	};
};



export default {
	getContactForms,
	addContactForm
};
