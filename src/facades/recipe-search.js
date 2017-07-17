//const Facade = require('../lib/facade');
const recipeSchema = require('../models/recipe');

class RecipeSearchFacade{
    constructor(Schema) {
        this.Schema = Schema;
    }

    find(...args) {
        // console.log(args[0].q);
        // console.log(args[0]);

        var searchObj = {};
        var regExp1 = ''; // regExp2 = '';

        if (args[0].q) {
            regExp1 = '.*' + args[0].q + '.*';
        }
        else if (args[0].p) {
            regExp1 = '.*' + args[0].p + '.*';
        }
        // if (args[0].p) {
        //     searchObj.description = args[0].p;
        //     regExp2 = '.*' + searchObj.description + '.*';
        // }

        return this.Schema
        .find({title : new RegExp(regExp1)})
        // .sort(searchObj.sort)
        .populate('author category recipeIngredients.ingredient recipeIngredients.unit')
        .sort({lastModified: -1})
        .exec();

        // return this.Schema
        // .find({category: { "$in" : ["596bcb014679593b4868ee85"]}})
        // // .sort(searchObj.sort)
        // .populate('author category recipeIngredients.ingredient recipeIngredients.unit')
        // .sort({lastModified: -1})
        // .exec();
    }
}

module.exports = new RecipeSearchFacade(recipeSchema);