const Controller = require('../lib/controller');
const categorySearchFacade = require('../facades/category-search');

class CategorySearchController extends Controller {}

module.exports = new CategorySearchController(categorySearchFacade);