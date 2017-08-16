const Facade = require('../lib/facade');
const conversionTableSchema = require('../models/conversion-table');

class ConversionTableFacade extends Facade {
    findById(...args) {
        return conversionTableSchema
            .find({ingredient: args[0]})
            .populate({path: 'ingredient unit', populate:{path: 'defaultUnit'}})
            .exec();
    }

    findOneAndUpdate(){
        return conversionTableSchema
            .findOneAndUpdate({ingredient: args[0]})
    }
}

module.exports = new ConversionTableFacade(conversionTableSchema);