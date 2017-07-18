const Controller = require('../lib/controller');
const searchByCategoryFacade = require('../facades/search-by-category');

class SearchByCategoryController extends Controller {}

module.exports = new SearchByCategoryController(searchByCategoryFacade);