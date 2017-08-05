const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const configurationSchema = new Schema({
    _id: { type: Number, required: true, index: true},
    name: { type: String, required: true, unique: true, index: true},
    value: { type: Number, required: true}
});


module.exports = mongoose.model('Configuration', configurationSchema);