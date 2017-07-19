const recipeSchema = require('../models/recipe');

class SearchByTitleFacade{
    constructor(Schema) {
        this.Schema = Schema;
    }

    find(...args) {

        var regExp1 = ''; // regExp2 = '';
        // var perPage = 3;       
        // var page = 0;
        
        if (args[0].page)
        {
            page = Math.max(0, args[0].page);
        }        

        if (args[0].q) {      
            regExp1 = '.*' + args[0].q + '.*';
        }

        return this.Schema
        .find({"title" : { $regex: new RegExp(regExp1, "i") }}) 
        .populate('author category recipeIngredients.ingredient recipeIngredients.unit')
        // .limit(perPage)
        // .skip(perPage * page)
        .sort({lastModified: -1})
        .exec();
    }
}

module.exports = new SearchByTitleFacade(recipeSchema);