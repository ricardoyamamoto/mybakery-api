const recipeSchema = require('../models/recipe');

class CheckIngredientUseFacade{
    constructor(Schema) {
        this.Schema = Schema;
    }

    find(...args) {
        var param = ''; 

        if (args[0].q) {          
            param = args[0].q;
        }
        console.log(param);
        return this.Schema
        .find({ recipeIngredients : {$elemMatch: {ingredient: param}}})
        .exec();
    }
}

module.exports = new CheckIngredientUseFacade(recipeSchema);