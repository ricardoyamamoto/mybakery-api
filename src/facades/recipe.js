const Facade = require('../lib/facade');
const recipeSchema = require('../models/recipe');

class RecipeFacade extends Facade {
    find(...args) {
        return recipeSchema
            .find(...args).populate('author')
            .exec();
    }

    findById(...args) {
        return recipeSchema
            .findById(...args).populate('author')
            .exec();
    }
}

module.exports = new RecipeFacade(recipeSchema);