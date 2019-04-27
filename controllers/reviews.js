const Review = require('../models/review');

module.exports = {
  async getReviews(req, res, next) {
    let reviews = await Review.find({});
    res.render('reviews/index', {
      reviews
    });
  },
  newReviews(req, res, next) {
    res.render('reviews/new');
  },
  async createReviews(req, res, next) {
    // Use req.body to create a new review
    let review = await Review.create(req.body);
    res.redirect(`/reviews/${review.id}`);
  },
  async showReviews(req, res, next) {
    let review = await Review.findById(req.params.id);
    res.render('reviews/show', {
      review
    });
  }
}