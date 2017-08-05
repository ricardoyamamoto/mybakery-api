const Facade = require('../lib/facade');
const configurationSchema = require('../models/configuration');

class ConfigurationFacade extends Facade {}

module.exports = new ConfigurationFacade(configurationSchema);