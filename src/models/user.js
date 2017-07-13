const mongoose = require('mongoose');
const UserRole = require('./user-role');

const Schema = mongoose.Schema;


const userSchema = new Schema({
  firstName: { type: String, required: true , index: true },
  lastName: { type: String, required: false, index: true },
  email: { type: String, required: false, index: true },
  phone: { type: String, required: false, index: true },
  userId: { type: String, required: false, index: true },
  password: { type: String, required: false},
  status: { type: String, index: true },
  userRole : { type: Schema.Types.ObjectId, ref: 'UserRole', required: false}
});


module.exports = mongoose.model('User', userSchema);
