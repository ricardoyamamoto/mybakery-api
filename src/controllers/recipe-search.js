const Controller = require('../lib/controller');
const recipeSearchFacade = require('../facades/recipe-search');

class RecipeSearchController extends Controller {}

module.exports = new RecipeSearchController(recipeSearchFacade);