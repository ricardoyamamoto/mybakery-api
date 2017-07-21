const Controller = require('../lib/controller');
const recipeFacade = require('../facades/recipe');

class RecipeController extends Controller {

    constructor(schema) {
        super(schema);
    }
    find(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        return this.facade.find(req.query, function(collection) {
                    res.status(200).json(collection);
            });
    }
 }

module.exports = new RecipeController(recipeFacade);