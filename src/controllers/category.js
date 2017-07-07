const Controller = require('../lib/controller');
const categoryFacade = require('../facades/category');

class CategoryController extends Controller {}

module.exports = new CategoryController(categoryFacade);
