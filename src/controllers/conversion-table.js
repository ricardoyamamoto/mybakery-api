const Controller = require('../lib/controller');
const conversionTableFacade = require('../facades/conversion-table');

class ConversionTableController extends Controller {}

module.exports = new ConversionTableController(conversionTableFacade);
