const mongoose = require('mongoose');
const paginator = require('mongoose-paginate');

const Schema = mongoose.Schema;

const recipeIngredientSchema = new Schema({
    ingredient: { type: Schema.Types.ObjectId, ref: 'Ingredient', required: true, index: true },
    quantity: { type: Number, required: true },
    unit: { type: Schema.Types.ObjectId, ref: 'Unit', required: true }
});


const recipeSchema = new Schema({
    title: { type: String, required: true, index: true },
    category: [{ type: Schema.Types.ObjectId, ref: 'Category', required: true, index: true }],
    author: { type: Schema.Types.ObjectId, ref: 'User', required: false },
    photo: { type: String, required: false },
    numberOfServings: { type: Number, required: true },
    preparationTime: { type: Number, required: true },
    cookingTime: { type: Number, required: true},
    recipeIngredients: { type: [recipeIngredientSchema], required: true },
    price: { type: Number, required: false },
    description: { type: String, required: true},
    lastModified: { type: Date, required: true }
});

recipeSchema.plugin(paginator);
module.exports = mongoose.model('Recipe', recipeSchema);
