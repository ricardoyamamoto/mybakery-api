const Facade = require('../lib/facade');
const categorySchema = require('../models/category');

class CategoryFacade extends Facade {
    // findOne(name){
    //     return categorySchema
    //         .findOne({ name: name })
    //         .exec();
    // }
}

module.exports = new CategoryFacade(categorySchema);
