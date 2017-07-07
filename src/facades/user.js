const Facade = require('../lib/facade');
const userSchema = require('../models/user');

class UserFacade extends Facade {
    find(...args) {
        return userSchema
            .find(...args).populate('userRole')
            .exec();
    }

    findById(...args) {
        return userSchema
            .findById(...args).populate('userRole')
            .exec();
    }
}

module.exports = new UserFacade(userSchema);
