const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true }, 
    review: { type: String }, 
    details: { type: String },
    price: { type: Number, required: true },
}, {
    timestamps: true, 
});

const Product = mongoose.model('Product', productSchema);

export default Product;
