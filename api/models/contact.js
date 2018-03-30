const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    address: String,
    phone: Number,
    mobile: Number
});

module.exports = mongoose.model('Contact', contactSchema);