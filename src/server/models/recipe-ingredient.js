const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const recipeIngredientSchema = new Schema({
    ingredient: { type: Schema.Types.ObjectId, ref: 'Ingredient', required: true },
    quantity: { type: String, required: true },
    unit: { type: Schema.Types.ObjectId, ref: 'Unit', required: true }
});


module.exports = mongoose.model('RecipeIngredient', recipeIngredientSchema);