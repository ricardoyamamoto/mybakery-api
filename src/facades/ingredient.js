const Facade = require('../lib/facade');
const ingredientSchema = require('../models/ingredient');

class IngredientFacade extends Facade {

    find(...args) {
        return ingredientSchema
            .find(...args).populate('defaultUnit')
            .exec();

    }

    findById(...args) {
        return ingredientSchema
            .findById(...args).populate('defaultUnit')
            .exec();
    }

}

module.exports = new IngredientFacade(ingredientSchema);
