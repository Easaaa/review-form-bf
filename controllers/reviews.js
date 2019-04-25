const Review = require('../models/review');

module.exports = {
  async getReviews(req, res, next) {
    let reviews = await Review.find({});
    res.render('reviews/index', {
      reviews
    });
  }
}