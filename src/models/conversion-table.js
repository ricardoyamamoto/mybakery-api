const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const conversionSchema = new Schema({
    ingredient: { type: Schema.Types.ObjectId, ref: 'Ingredient', required: true, index: true },
    unit: { type: Schema.Types.ObjectId, ref: 'Unit'},
    quantity: { type: Number, required: false}
});


module.exports = mongoose.model('Conversion', conversionSchema);