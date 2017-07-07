const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const functionalitySchema = new Schema({
    functionalityName: { type: String, required: true, index: true }
});


module.exports = mongoose.model('Functionality', functionalitySchema);
