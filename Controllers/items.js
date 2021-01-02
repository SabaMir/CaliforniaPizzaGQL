import Model from '../Models/Model';

const getItems = async () => {
	const items = await Model.ItemsModel.find();
	if (items) {
		return items;
	}
	return {
		error: JSON.stringify('Internal Server Error! Can not get contact forms right now'),
	};
};

const addItems = async args => {
    const { itemName, itemCategory, description,flavour,size,price} = args;

	const book = new Model.ItemsModel({
		itemName, itemCategory, description,flavour,size,price
	});
	const savedBook = await book.save();
	if (savedBook) {
		return savedBook;
	}
	return {
		error: JSON.stringify('Internal Server Error! Can not save right now'),
	};
};
const deleteItems = async args => {
	const { id } = args;
	const deletedItem = await Model.ItemsModel.findByIdAndRemove({_id:id});
	if (deletedItem) {
		return deletedItem;
	}
	return {
		error: JSON.stringify('Internel Server Error! Can not delete right now'),
	};
};

const updateItems = async args => {
	const {id, itemName, itemCategory, description,flavour,size,price } = args;
	const query = { $set: { itemName, itemCategory, description,flavour,size,price } };
	const updatedItem = await Model.ItemsModel.findByIdAndUpdate(id, query, {
		new: true,
	});
	if (updatedItem) {
		return updatedItem;
	}
	return {
		error: JSON.stringify('Internel Server Error! Can not update right now'),
	};
};

const getSingleItem = async args => {
	const { id } = args;
	console.log(id);
	const Item = await Model.ItemsModel.findOne({_id:id});
	console.log(Item);
	if (Item) {
		return Item;
	}
	return {
		error: JSON.stringify('Internel Server Error! Can not get right now'),
	};
};
const getPizza = async args => {
	//const { itemType } = args;
	
	const Item = await Model.ItemsModel.find({itemType:'pizza'});
	console.log(Item);
	if (Item) {
		return Item;
	}
	return {
		error: JSON.stringify('Internel Server Error! Can not get right now'),
	};
};
const getDesserts = async args => {
	//const { itemType } = args;
	
	const Item = await Model.ItemsModel.find({itemType:'dessert'});
	console.log(Item);
	if (Item) {
		return Item;
	}
	return {
		error: JSON.stringify('Internel Server Error! Can not get right now'),
	};
};
const getSandwichs = async args => {
	//const { itemType } = args;
	
	const Item = await Model.ItemsModel.find({itemType:'sandwich'});
	console.log(Item);
	if (Item) {
		return Item;
	}
	return {
		error: JSON.stringify('Internel Server Error! Can not get right now'),
	};
};
const getSalads = async args => {
	//const { itemType } = args;
	
	const Item = await Model.ItemsModel.find({itemType:'salad'});
	console.log(Item);
	if (Item) {
		return Item;
	}
	return {
		error: JSON.stringify('Internel Server Error! Can not get right now'),
	};
};
const getSidelines = async args => {
	//const { itemType } = args;
	
	const Item = await Model.ItemsModel.find({itemType:'sideline'});
	console.log(Item);
	if (Item) {
		return Item;
	}
	return {
		error: JSON.stringify('Internel Server Error! Can not get right now'),
	};
};
const getBeverages = async args => {
	//const { itemType } = args;
	
	const Item = await Model.ItemsModel.find({itemType:'beverage'});
	console.log(Item);
	if (Item) {
		return Item;
	}
	return {
		error: JSON.stringify('Internel Server Error! Can not get right now'),
	};
};
const getLasgnaAndPasta = async args => {
	//const { itemType } = args;
	
	const Item = await Model.ItemsModel.find({itemType:'lasagna & pasta'});
	console.log(Item);
	if (Item) {
		return Item;
	}
	return {
		error: JSON.stringify('Internel Server Error! Can not get right now'),
	};
};


export default {
	getItems,
	addItems,
	updateItems,
	deleteItems,
	getSingleItem,
	getPizza,
	getDesserts,
	getSandwichs,
	getSidelines,
	getSalads,
	getBeverages,
	getLasgnaAndPasta
};
