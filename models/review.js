const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  name: String,
  category: String,
  date: {
    type: Date,
    default: Date.now
  },
  taste: Number,
  presentation: Number,
  quantity: Number,
  courteus: Number,
  timing: Number,
  presence: Number,
  attractive: Number,
  clean: Number,
  temperature: Number,
  bathroom: Number,
  table: Number,
  floor: Number,
  priceQuality: Number,
  priceQuantity: Number,
  notes: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

ReviewSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Review', ReviewSchema);