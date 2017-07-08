const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userRoleSchema = new Schema({
    roleName: { type: String},
    functionalityList: { type: [Schema.Types.ObjectId], ref: 'Functionality'}
});


module.exports = mongoose.model('UserRole', userRoleSchema);
