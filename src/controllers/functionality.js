const Controller = require('../lib/controller');
const functionalityFacade = require('../facades/functionality');

class FunctionalityController extends Controller {}

module.exports = new FunctionalityController(functionalityFacade);
