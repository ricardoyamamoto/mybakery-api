const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ingredientSchema = new Schema({
    name: { type: String, required: true, index: true },
    description: { type: String, required: true },
    defaultUnit: { type: Schema.Types.ObjectId, ref: 'Unit'},
    quantity: { type: Number, required: false},
    cost: { type: Number, required: false}
});


module.exports = mongoose.model('Ingredient', ingredientSchema);