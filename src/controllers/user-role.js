const Controller = require('../lib/controller');
const userRoleFacade = require('../facades/user-role');

class UserRoleController extends Controller {}

module.exports = new UserRoleController(userRoleFacade);
