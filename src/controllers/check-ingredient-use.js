const Controller = require('../lib/controller');
const checkIngredientUseFacade = require('../facades/check-ingredient-use');

class CheckIngredientUseController extends Controller {}

module.exports = new CheckIngredientUseController(checkIngredientUseFacade);