const Facade = require('../lib/facade');
const functionalitySchema = require('../models/functionality');

class FunctionalityFacade extends Facade {}

module.exports = new FunctionalityFacade(functionalitySchema);
