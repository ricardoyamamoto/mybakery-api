const Controller = require('../lib/controller');
const unitFacade = require('../facades/unit');

class UnitController extends Controller {}

module.exports = new UnitController(unitFacade);