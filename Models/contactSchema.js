import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema(
	{
        firstName:String,
        lastName:String,
        email:String,
        message:String
	},
	{
		timestamps: true,
	},
);

export default mongoose.model('contactus', ContactSchema);
