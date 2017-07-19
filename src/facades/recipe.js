const Facade = require('../lib/facade');
const recipeSchema = require('../models/recipe');
Ingredient = require('../models/ingredient');
Unit = require('../models/unit');

class RecipeFacade extends Facade {
    find(...args) {
        return recipeSchema
            .find(...args).populate('author category recipeIngredients.ingredient recipeIngredients.unit')
            .sort({lastModified: -1})
            .exec();

    }

    findById(...args) {
        return recipeSchema
            .findById(...args)
            .populate('author category recipeIngredients.ingredient recipeIngredients.unit')
            .exec();
    }
}

module.exports = new RecipeFacade(recipeSchema);