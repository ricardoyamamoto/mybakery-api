const Controller = require('../lib/controller');
const ingredientSearchFacade = require('../facades/ingredient-search');

class IngredientSearchController extends Controller {}

module.exports = new IngredientSearchController(ingredientSearchFacade);