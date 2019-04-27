const Review = require('../models/review');

module.exports = {
  async reviewIndex(req, res, next) {
    let reviews = await Review.find({});
    res.render('reviews/index', {
      reviews
    });
  },
  // FORM
  reviewNew(req, res, next) {
    res.render('reviews/new');
  },
  async reviewCreate(req, res, next) {
    // Use req.body to create a new review
    let review = await Review.create(req.body.review);
    res.redirect(`/reviews/${review.id}`);
  },
  async reviewShow(req, res, next) {
    let review = await Review.findById(req.params.id);
    res.render('reviews/show', {
      review
    });
  },
  async reviewEdit(req, res, next) {
    let review = await Review.findById(req.params.id);
    res.render('reviews/edit', {
      review
    });
  },
  async reviewUpdate(req, res, next) {
    let review = await Review.findByIdAndUpdate(req.params.id, req.body.review);
    res.redirect('/reviews');
  },
  async reviewDestroy(req, res, next) {
    await Review.findByIdAndRemove(req.params.id);
    res.redirect('/reviews');
  }
}