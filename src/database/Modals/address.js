import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema;

const addressSchema = new Schema({
    street: String,
    postalCode: Number,
    city: String,
    country: String
})

module.exports = mongoose.model('address',addressSchema);