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
  foodQualityRate: [{
      taste: Number
    },
    {
      presentation: Number
    },
    {
      quantity: Number
    }
  ],
  serviceRate: [{
    courteus: String,
    timing: String,
    presence: String
  }],
  atmosphere: [{
    attractive: String,
    clean: String,
    temperature: String
  }],
  cleanliness: [{
    bathroom: String,
    table: String,
    floor: String
  }],
  price: [{
    priceQuality: String,
    priceQuantity: String
  }],
  notes: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

ReviewSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Review', ReviewSchema);