const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  name: String,
  category: String,
  date: {
    type: Date,
    default: Date.now
  },
  foodQualityRate: [{
    taste: Number,
    presentation: Number,
    quantity: Number
  }],
  serviceRate: [{
    courteus: Number,
    timing: Number,
    presence: Number
  }],
  atmosphere: [{
    attractive: Number,
    cleanliness: Number,
    temperature: Number
  }],
  cleanliness: [{
    bathroom: Number,
    table: Number,
    floor: Number
  }],
  price: [{
    priceQuality: Number,
    priceQuantity: Number
  }],
  notes: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

PlaceSchema.plugin(passportLocalMongoose);

modulse.exports = mongoose.model('Review', ReviewSchema);