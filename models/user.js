const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  placeReviewed: [{
    type: Schema.Types.ObjectId,
    ref: 'Review'
  }]
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);