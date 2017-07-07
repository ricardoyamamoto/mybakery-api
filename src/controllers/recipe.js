const Controller = require('../lib/controller');
const recipeFacade = require('../facades/recipe');

class RecipeController extends Controller {}

module.exports = new RecipeController(recipeFacade);