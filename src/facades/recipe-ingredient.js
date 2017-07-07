const Facade = require('../lib/facade');
const recipeIngredientSchema = require('../models/recipe-ingredient');

class RecipeIngredientFacade extends Facade {}

module.exports = new RecipeIngredientFacade(recipeIngredientSchema);