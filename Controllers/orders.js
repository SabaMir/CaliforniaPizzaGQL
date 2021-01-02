import Model from '../Models/Model';

const getOrders = async () => {
	const deals = await Model.ordersModel.find().populate('purchasedItems', 'itemName itemCategory flavour size price').populate('dealsPurchased','dealName dealCategory');
	if (deals) {
		return deals;
	}
	return {
		error: JSON.stringify('Internal Server Error! Can not get right now'),
	};
};

const placeOrder = async args => {
	const {  city,purchasedItems,dealsPurchased,tax,name,email,address} = args;
	// console.log(DataTransferItemList);

	const orders = new Model.ordersModel({
		city,purchasedItems,dealsPurchased,tax,name,email,address
	});
	const savedOrder = await orders.save();
	console.log(savedOrder);
	if (savedOrder) {
		return savedOrder;
	}
	return {
		error: JSON.stringify('Internal Server Error! Can not save right now'),
	};
};
const deleteOrder = async args => {
	const { id } = args;
	const deletedorder = await Model.ordersModel.findByIdAndRemove({_id:id});
	if (deletedItem) {
		return deletedItem;
	}
	return {
		error: JSON.stringify('Internel Server Error! Can not delete right now'),
	};
};

const updateOrder = async args => {
	const { id,city,purchasedItems,dealsPurchased,tax,name,email,address } = args;
	const query = { $set: { city,purchasedItems,dealsPurchased,tax,name,email,address } };
	const updatedOrder = await Model.ordersModel.findByIdAndUpdate(id, query, {
		new: true,
	}).populate('purchasedItems','itemName itemCategory flavour size price')
	.populate('dealsPurchased','dealName dealCategory');
	if (updatedOrder) {
		return updatedOrder;
	}
	return {
		error: JSON.stringify('Internel Server Error! Can not update right now'),
	};
};

export default {
	getOrders,
	placeOrder,
	updateOrder,
    deleteOrder,
updateOrder}