import mongoose from "mongoose";

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    email: String,
    password: String,
    salt: String,
    phone: Number,
    address:[
        { type: Schema.Types.ObjectId, ref: 'address', require: true }
    ],
    cart: [
        {
          product: { type: Schema.Types.ObjectId, ref: 'product', require: true},
          unit: { type: Number, require: true}
        }
    ],
    wishlist:[
        { 
            type: Schema.Types.ObjectId, ref: 'product', require: true
        }
    ],
    orders: [ 
        { type: Schema.Types.ObjectId, ref: 'order', require: true }
    ]
})


const CustomerSchema= mongoose.model('customer',customerSchema);

export default CustomerSchema;