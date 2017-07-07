const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userRoleSchema = new Schema({
    roleName: { type: String, required: true },
    functionalityList: { type: [Schema.Types.ObjectId], ref: 'Functionality', required: true}
});


module.exports = mongoose.model('UserRole', userRoleSchema);
