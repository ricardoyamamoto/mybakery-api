const Facade = require('../lib/facade');
const conversionTableSchema = require('../models/conversion-table');

class ConversionTableFacade extends Facade {
    findById(...args) {
        return conversionTableSchema
            .find({ingredient: args[0]})
            .populate({path: 'ingredient unit', populate:{path: 'defaultUnit'}})
            .exec();
    }

    find(...args) {
        return conversionTableSchema
            .find(args)
            .populate({path: 'ingredient unit', populate:{path: 'defaultUnit'}})
            .exec();
    }

    findOneAndUpdate(){
        return conversionTableSchema
            .findOneAndUpdate(
                {_id: args[0]},
                args[1],
                {upsert: true}
            )
    }
}

module.exports = new ConversionTableFacade(conversionTableSchema);