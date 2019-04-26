const express = require('express');
const router = express.Router({
  mergeParams: true
});
const {
  errorHandler
} = require('../middleware');
const {
  getReviews,
  newReviews
} = require('../controllers/reviews');

/* GET reviews index /reviews */
router.get('/', errorHandler(getReviews));

/* GET new reviews /reviews/new */
router.get('/new', errorHandler(newReviews));

/* POST reviews create  */
router.post('/', (req, res, next) => {
  res.send('CREATE /posts/:id/reviews');
});

/* GET reviews  */
router.get('/:review_id/edit', (req, res, next) => {
  res.send('EDIT /posts/:id/reviews/:review_id/edit');
});

/* PUT reviews  */
router.put('/:review_id', (req, res, next) => {
  res.send('UPDATE /posts/:id/reviews/:review_id');
});

/* DELETE reviews  */
router.delete('/:review_id', (req, res, next) => {
  res.send('DELETE /posts/:id/reviews/:review_id');
});


module.exports = router;