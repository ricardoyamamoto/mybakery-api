const Facade = require('../lib/facade');
const categorySchema = require('../models/category');

class CategoryFacade extends Facade {}

module.exports = new CategoryFacade(categorySchema);
