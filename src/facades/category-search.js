const categorySchema = require('../models/category');

class CategorySearchFacade{
    constructor(Schema) {
        this.Schema = Schema;
    }

    find(...args) {

        var searchObj = {};
        var regExp1 = '';

        if (args[0].q) {
            regExp1 = '.*' + args[0].q + '.*';
        }     

        return this.Schema
        .find({name : new RegExp(regExp1)})
        .exec();
    }
}

module.exports = new CategorySearchFacade(categorySchema);