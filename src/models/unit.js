const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const unitSchema = new Schema({
    unit: { type: String, required: true, index: true },
    shortDescription: { type: String, required: true }
});


module.exports = mongoose.model('Unit', unitSchema);