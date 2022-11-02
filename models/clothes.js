const mongoose = require('mongoose');
//Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const additionalInfoSchema = new Schema({
    notes: {
        type: String
    },
    soldDonated: {
        type: Boolean,
        default: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});


const inventorySchema = new Schema({
    itemType: {
        type: String, 
        enum: ['T-Shirt', 'Pant', 'Shirt', 'Boots/Shoes', 'Hat', 'Jacket']
    },
    brand: {
        type: String
    }, 
    size: {
        type: String
    },
    purchaseLocation: {
        type: String
    },
    purchasePrice: {
        type: Number
    },
    image: {
        type: String
    },
    additionalInfo: [additionalInfoSchema],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Item', inventorySchema);