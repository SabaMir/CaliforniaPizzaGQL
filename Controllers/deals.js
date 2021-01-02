import Model from '../Models/Model';

const getDeals = async () => {
	const deals = await Model.DealsModel.find().populate('items', 'itemName itemType');
	if (deals) {
		return deals;
	}
	return {
		error: JSON.stringify('Internal Server Error! Can not get right now'),
	};
};

const addDeals = async args => {
	const {  dealCategory,dealName, items} = args;
	// console.log(DataTransferItemList);

	const deals = new Model.DealsModel({
		dealCategory,dealName, items
	});
	const savedDeals = await deals.save();
	console.log(savedDeals);
	if (savedDeals) {
		return savedDeals;
	}
	return {
		error: JSON.stringify('Internal Server Error! Can not save right now'),
	};
};
const deleteDeals = async args => {
	const { id } = args;
	const deletedItem = await Model.DealsModel.findByIdAndRemove({_id:id});
	if (deletedItem) {
		return deletedItem;
	}
	return {
		error: JSON.stringify('Internel Server Error! Can not delete right now'),
	};
};

const updateDeals = async args => {
	const { id,dealName,dealCategory,items } = args;
	const query = { $set: { dealName,dealCategory,items } };
	const updatedItem = await Model.DealsModel.findByIdAndUpdate(id, query, {
		new: true,
	}).populate('items','itemName itemCategory');
	if (updatedItem) {
		return updatedItem;
	}
	return {
		error: JSON.stringify('Internel Server Error! Can not update right now'),
	};
};

const getSingleDeal = async args => {
	const { id } = args;
	console.log(id);
	const deal = await Model.DealsModel.findOne({_id:id}).populate('items','itemName itemCategory');
	console.log(deal);
	if (deal) {
		return deal;
	}
	return {
		error: JSON.stringify('Internel Server Error! Can not get right now'),
	};
};
const getMidNightDeals = async args => {
	//const { itemType } = args;
	
	const deal = await Model.DealsModel.find({dealCategory:'midnight'}).populate('items','itemName itemCategory');
	console.log(deal);
	if (deal) {
		return deal;
	}
	return {
		error: JSON.stringify('Internel Server Error! Can not get right now'),
	};
};
const getLunchDeals = async args => {
	//const { itemType } = args;
	
	const deal = await Model.DealsModel.find({dealCategory:'lunch'}).populate('items','itemName itemCategory');
	console.log(deal);
	if (deal) {
		return deal;
	}
	return {
		error: JSON.stringify('Internel Server Error! Can not get right now'),
	};
};
const getRoundTheClockDeals = async args => {
	//const { itemType } = args;
	
	const deal = await Model.DealsModel.find({dealCategory:'roundtheclock'}).populate('items','itemName itemCategory');
	console.log(deal);
	if (deal) {
		return deal;
	}
	return {
		error: JSON.stringify('Internel Server Error! Can not get right now'),
	};
};
export default {
	getDeals,
	addDeals,
	updateDeals,
	deleteDeals,
	getSingleDeal,
getMidNightDeals,
getLunchDeals,
getRoundTheClockDeals}