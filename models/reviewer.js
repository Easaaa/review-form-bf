const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const ReviewerSchema = new Schema({
  email: String,
  name: String,
  password: String,
  placeReviewed: [{
    type: Schema.Types.ObjectId,
    ref: 'Place'
  }]
});

ReviewerSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Reviewer', ReviewerSchema);