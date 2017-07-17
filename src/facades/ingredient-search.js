const ingredientSchema = require('../models/ingredient');

class IngredientSearchFacade{
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

        return this.Schema
        .find({"name" : new RegExp(regExp1)})
        .populate('defaultUnit')
        .sort({name: -1})
        .exec();
    }
}

module.exports = new IngredientSearchFacade(ingredientSchema);