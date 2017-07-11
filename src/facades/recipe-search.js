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
        // if (args[0].p) {
        //     searchObj.description = args[0].p;
        //     regExp2 = '.*' + searchObj.description + '.*';
        // }
        if (args[0].sort) {
            searchObj.sort = args[0].sort;
        }
        else
        {
            searchObj.sort = '';
        }

        return this.Schema
        .find({"title" : new RegExp(regExp1)})
        .sort(searchObj.sort)
        .exec();
    }
}

module.exports = new RecipeSearchFacade(recipeSchema);