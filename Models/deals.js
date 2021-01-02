import mongoose from 'mongoose';

const dealSchema = new mongoose.Schema({
    dealCategory:String,
    dealName:String,
    items:[
        {
       
            type:mongoose.SchemaTypes.ObjectId,
            ref:'items'
        
    }
    ]

},
{timestamps:true}
);
export default mongoose.model('deals',dealSchema);