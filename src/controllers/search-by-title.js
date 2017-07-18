const Controller = require('../lib/controller');
const searchByTitleFacade = require('../facades/search-by-title');

class SearchByTitleController extends Controller {}

module.exports = new SearchByTitleController(searchByTitleFacade);