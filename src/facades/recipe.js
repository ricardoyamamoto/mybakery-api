const Facade = require('../lib/facade');
const async = require('async');

const recipeSchema = require('../models/recipe');
const categorySchema = require('../models/category');
const ingredientSchema = require('../models/ingredient');

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

        var findData =function (callback) {
            var queryItem = new RegExp('.*' + query.q.toLowerCase() + '.*') || '.*';


            async.waterfall([
                function (callback) {
                    async.parallel([
                            function (callback) {
                                return categorySchema
                                    .findOne({name: queryItem})
                                    .exec(function (err, category) {
                                        if (err) {
                                            callback(err, null)
                                        }
                                        else {
                                            category==null?callback(null, '#$%^&*()'):callback(null, category._id);
                                        }
                                    });
                            },
                            function (callback) {
                                return ingredientSchema
                                    .findOne({name: queryItem})
                                    .exec(function (err, ingredient) {
                                        if (err) {
                                            callback(err, null)
                                        }
                                        else {
                                            ingredient==null?callback(null, '!@#$%^&*'):callback(null, ingredient._id);
                                        }
                                    });
                            },
                        ],
                        function(err, results) {
                            callback(null, results);
                        })
                },

                function (results, callback) {
                    console.log(results);
                    var categoryID = results[0];
                    var ingredientID = results[1];
                    console.log(categoryID);
                    console.log(ingredientID);
                    console.log(queryItem);
                    async.parallel({
                        total: function (callback) {
                            return recipeSchema
                                .find({
                                    $or: [
                                        {title: queryItem},
                                        {description: queryItem},
                                        {category: categoryID},
                                        {recipeIngredients : {$elemMatch: {ingredient: ingredientID}}}
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
                            query.count = parseInt(query.count) || 10;
                            query.skip = parseInt((query.page - 1) * query.count) || 0;

                            return recipeSchema
                                .find({
                                    $or: [
                                        {title: queryItem},
                                        {description: queryItem},
                                        {category: categoryID},
                                        {recipeIngredients : {$elemMatch: {ingredient: ingredientID}}}
                                    ]
                                })
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
                                        console.log(doc);
                                    }
                                });
                        }
                    }, function (err, result) {
                        callback(null,result);
                    });
                }
            ], function (err, result) {
                return callback(result);
            });
        }
        // var findData = function (callback) {
        //     async.parallel({
        //         total: function (callback) {
        //             var queryItem = new RegExp('.*' + query.q.toLowerCase() + '.*')  || '.*';
        //             query.count = parseInt(query.count) || 10;
        //             query.skip = parseInt((query.page - 1) * query.count) || 0 ;
        //
        //             return recipeSchema
        //                 .find({
        //                     $or: [
        //                         {title: queryItem},
        //                         {description: queryItem},
        //                     ]
        //                 })
        //                 .exec(function (err, doc) {
        //                     if (err) {
        //                         callback(err, null)
        //                     }
        //                     else {
        //                         callback(null, doc.length);
        //                     }
        //                 });
        //         },
        //         items: function (callback) {
        //             var queryItem = new RegExp('.*' + query.q.toLowerCase() + '.*')  || '.*';
        //             query.count = parseInt(query.count) || 10;
        //             query.skip = parseInt((query.page - 1) * query.count) || 0 ;
        //
        //
        //             return recipeSchema
        //                 .find({
        //                     $or: [
        //                         {title: queryItem},
        //                         {description: queryItem}
        //                     ]
        //                 })
        //                 .populate('author category recipeIngredients.ingredient recipeIngredients.unit')
        //                 .sort({lastModified: -1})
        //                 .limit(query.count)
        //                 .skip(query.skip)
        //                 .exec(function (err, doc) {
        //                     if (err) {
        //                         callback(err, null)
        //                     }
        //                     else {
        //                         callback(null, doc);
        //                         console.log(doc);
        //                     }
        //                 });
        //         }
        //     }, function (err, result) {
        //         return callback(result);
        //     });
        // }

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