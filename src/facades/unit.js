const Facade = require('../lib/facade');
const unitSchema = require('../models/unit');

class UnitFacade extends Facade {}

module.exports = new UnitFacade(unitSchema);