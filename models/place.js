const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-loca-mongoose');
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
  name: String,
  category: String,
  date: Date,
  foodQualityRate: [{
    taste: Number,
    presentation: Number,
    quantity: Number
  }],
  serviceRate: [{
    courteus: Number,
    professionality: Number,
    timing: Number,
    presence: Number
  }],
  atmosphere: [{
    attractive: Number,
    cleanliness: Number,
    temperature: Number,
    waiterLooks: Number
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
  reviewer: {
    type: Schema.Types.ObjectId,
    ref: 'Reviewer'
  }
});

PlaceSchema.plugin(passportLocalMongoose);

modulse.exports = mongoose.model('Place', PlaceSchema);