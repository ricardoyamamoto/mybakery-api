const Controller = require('../lib/controller');
const unitFacade = require('../facades/unit');
const unitSchema = require('../models/unit');

class InitialLoadController  {
    constructor(){
        this.unitSchema = unitSchema;
        console.log('initial load started');
    }

    insertMany(req, res, next){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        this.unitSchema.insertMany(req.body)
            .then(doc => res.status(201).json(doc))
            .catch(err => next(err));
    }



}

module.exports = new InitialLoadController;