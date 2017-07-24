const categorySchema = require('../models/recipe');

class SearchByCategoryFacade{
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
        .find({category : param})
        .populate('author category recipeIngredients.ingredient recipeIngredients.unit')
        .sort({lastModified: -1})
        .exec();

        //  return this.Schema
        // .find({category: { "$in" : ["596bcb014679593b4868ee85"]}})
        // // .sort(searchObj.sort)
        // .populate('author category recipeIngredients.ingredient recipeIngredients.unit')
        // .sort({lastModified: -1})
        // .exec();
    }
}

module.exports = new SearchByCategoryFacade(categorySchema);