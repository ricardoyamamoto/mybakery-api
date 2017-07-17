//const Facade = require('../lib/facade');
const recipeSchema = require('../models/recipe');

class RecipeSearchFacade{
    constructor(Schema) {
        this.Schema = Schema;
    }

    find(...args) {

        var regExp1 = ''; // regExp2 = '';

        if (args[0].q) {      
            regExp1 = '.*' + args[0].q + '.*';
        }

        return this.Schema
        .find({title : new RegExp(regExp1)})
        // .sort(searchObj.sort)
        .populate('author category recipeIngredients.ingredient recipeIngredients.unit')
        .sort({lastModified: -1})
        .exec();

       
    }
}

module.exports = new RecipeSearchFacade(recipeSchema);