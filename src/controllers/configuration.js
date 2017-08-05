const Controller = require('../lib/controller');
const configurationFacade = require('../facades/configuration');

class ConfigurationController extends Controller {}

module.exports = new ConfigurationController(configurationFacade);
