const mongoose = require("mongoose")
const {Schema} = mongoose;



const productCheckSchemas = new Schema({
    productname: String,
    brandname: String,
    productDescreption: String,
    colorCase: [{body: String}],
    productSize: [{body: String}],
    number: Number,
    price: Number,
    discountPrice: Number,
    totalPrice: Number,
})

module.exports = mongoose.model("ComputerType", productCheckSchemas)