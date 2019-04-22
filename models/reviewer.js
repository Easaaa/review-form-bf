const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-loca-mongoose');
const Schema = mongoose.Schema;

const ReviewerSchema = new Schema({
  email: String,
  name: String,
  password: String,
  placeReviewed: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }]
});

ReviewerSchema.plugin(passportLocalMongoose);

modulse.exports = mongoose.model('Reviewer', ReviewerSchema);