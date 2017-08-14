const Controller = require('../lib/controller');
const ingredientFacade = require('../facades/ingredient');

class IngredientController extends Controller {

}

module.exports = new IngredientController(ingredientFacade);