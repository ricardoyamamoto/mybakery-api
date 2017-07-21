const Facade = require('../lib/facade');
const async = require('async');

const recipeSchema = require('../models/recipe');

class RecipeFacade extends Facade {
     findOld(...args) {
         return recipeSchema
             .find(...args).populate('author category recipeIngredients.ingredient recipeIngredients.unit')
             .sort({lastModified: -1})
             .exec();
     }

    findById(...args) {
        return recipeSchema.findById(...args)
            .populate('author category recipeIngredients.ingredient recipeIngredients.unit')
            .exec().then();
    }


find(query, callback)
{
    var findData = function (callback) {
        async.parallel({
            total: function (callback) {
                recipeSchema.find({})
                    .exec(function (err, doc) {
                        if (err) {
                            callback(err, null)
                        }
                        else {
                            callback(null, doc.length);
                        }
                    });
            },
            items: function (callback) {
                var queryObj = {};
                if (query.q) {
                    queryObj.title = query.q;
                }
                if (query.count) {
                    query.count = parseInt(query.count);
                }
                else {
                    query.count = 10;
                }
                if (query.page) {
                    query.skip = parseInt((query.page - 1) * query.count);
                }
                else {
                    query.skip = 0;
                }
                return recipeSchema
                    .find(queryObj).populate('author category recipeIngredients.ingredient recipeIngredients.unit')
                    .sort({lastModified: -1})
                    .limit(query.count)
                    .skip(query.skip)
                    .exec(function (err, doc) {
                        if (err) {
                            callback(err, null)
                        }
                        else {
                            callback(null, doc);
                        }
                    });
            }
        }, function (err, result) {
            return callback(result);
        });
    }

    findData(callback);
}

}

module.exports = new RecipeFacade(recipeSchema);