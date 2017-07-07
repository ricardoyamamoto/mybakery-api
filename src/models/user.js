const mongoose = require('mongoose');
const UserRole = require('./user-role');

const Schema = mongoose.Schema;


const userSchema = new Schema({
  firstName: { type: String, required: true, index: true },
  lastName: { type: String, required: true, index: true },
  email: { type: String, required: true, index: true },
  phone: { type: String, required: true, index: true },
  userId: { type: String, required: true, index: true },
  password: { type: String, required: true },
  status: { type: String, required: false, index: true },
  userRole : { type: Schema.Types.ObjectId, ref: 'UserRole', required: false}
});


module.exports = mongoose.model('User', userSchema);
