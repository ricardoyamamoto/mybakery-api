const ingredientSchema = require('../models/ingredient');

class IngredientSearchFacade{
    constructor(Schema) {
        this.Schema = Schema;
    }

    find(...args) {
        var regExp1 = ''; // regExp2 = '';
        //var perPage = 2;       
        var page = 0;
        
        if (args[0].page)
        {
            page = Math.max(0, args[0].page);
        }

        if (args[0].q) {
            regExp1 = '.*' + args[0].q + '.*';
        }

        return this.Schema
        .find({"name" : { $regex: new RegExp(regExp1, "i") }})       
        .populate('defaultUnit')
        // .limit( perPage )
        // .skip(perPage * page)
        .sort({name: 1})
        .exec();
    }
}

module.exports = new IngredientSearchFacade(ingredientSchema);