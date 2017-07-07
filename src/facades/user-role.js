const Facade = require('../lib/facade');
const userRoleSchema = require('../models/user-role');

class UserRoleFacade extends Facade {}

module.exports = new UserRoleFacade(userRoleSchema);
