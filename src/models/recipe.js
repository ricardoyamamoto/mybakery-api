const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: { type: String, required: true },
    category: { type: [Schema.Types.ObjectId], ref: 'Category', required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    photo: { type: String, required: false },
    numberOfServings: { type: Number, required: true },
    preparationTime: { type: Number, required: true },
    recipeIngredients: { type: [Schema.Types.ObjectId], ref: 'RecipeIngredient', required: true },
    price: { type: Number, required: false }
});


module.exports = mongoose.model('Recipe', recipeSchema);
