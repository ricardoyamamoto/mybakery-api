const Controller = require('../lib/controller');
const recipeIngredientFacade = require('../facades/recipe-ingredient');

class RecipeIngredientController extends Controller {}

module.exports = new RecipeIngredientController(recipeIngredientFacade);
