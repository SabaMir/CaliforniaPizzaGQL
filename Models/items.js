import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    itemName:String,
    itemCategory:String,
    description:String,
    flavour:String,
    size:String,
    price:String

});

export default mongoose.model('items',itemSchema);