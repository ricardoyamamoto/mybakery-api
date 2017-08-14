const Facade = require('../lib/facade');
const conversionTableSchema = require('../models/conversion-table');

class ConversionTableFacade extends Facade {
    find(...args) {
        return conversionTableSchema
            .find({ingredient: args[0]})
            .populate('ingredient ingredient.defaultUnit unit')
            .exec();
    }
}

module.exports = new ConversionTableFacade(conversionTableSchema);