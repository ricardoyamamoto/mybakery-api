const Facade = require('../lib/facade');
const async = require('async');

const recipeSchema = require('../models/recipe');
const categorySchema = require('../models/category');

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
        // collection allData =  recipeSchema
        //     .find({})
        //     .populate('author category recipeIngredients.ingredient recipeIngredients.unit')
        //     .sort({lastModified: -1})
        //     .exec();

        var findData = function (callback) {
            async.parallel({
                total: function (callback) {
                    var queryItem = new RegExp('.*' + query.q.toLowerCase() + '.*')  || '.*';
                    query.count = parseInt(query.count) || 10;
                    query.skip = parseInt((query.page - 1) * query.count) || 0 ;

                    return recipeSchema
                        .find({
                            $or: [
                                {title: queryItem},
                                {description: queryItem}
                            ]
                        })
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
                    // var queryItem = '.*';
                    // if (query.q) {
                    //     queryItem = new RegExp('.*' + query.q + '.*');
                    // }
                    //
                    // if (query.count) {
                    //     query.count = parseInt(query.count);
                    // }
                    // else {
                    //     query.count = 10;
                    // }
                    // if (query.page) {
                    //     query.skip = parseInt((query.page - 1) * query.count);
                    // }
                    // else {
                    //     query.skip = 0;
                    // }
                    var queryItem = new RegExp('.*' + query.q.toLowerCase() + '.*')  || '.*';
                    query.count = parseInt(query.count) || 10;
                    query.skip = parseInt((query.page - 1) * query.count) || 0 ;

                    return recipeSchema
                        .find({
                            $or: [
                                {title: queryItem},
                                {description: queryItem}
                            ]
                        }).populate('author category recipeIngredients.ingredient recipeIngredients.unit')
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

        var findAllData = function (callback) {
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
                    query.count = parseInt(query.count) || 10;
                    query.skip = parseInt((query.page - 1) * query.count) || 0 ;

                    return recipeSchema
                        .find({})
                        .populate('author category recipeIngredients.ingredient recipeIngredients.unit')
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

        if(query.q) {
           // console.log('findData is called');
            findData(callback);
        }
        else {
           // console.log('findAllData is called');
            findAllData(callback);
        }
    }
}


module.exports = new RecipeFacade(recipeSchema);