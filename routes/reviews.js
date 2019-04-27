const express = require('express');
const router = express.Router({
  mergeParams: true
});
const {
  asyncErrorHandler
} = require('../middleware');
const {
  reviewIndex,
  reviewNew,
  reviewCreate,
  reviewShow,
  reviewEdit,
  reviewUpdate,
  reviewDestroy
} = require('../controllers/reviews');

/* GET reviews index /reviews */
router.get('/', asyncErrorHandler(reviewIndex));

/* GET new reviews /reviews/new */
router.get('/new', reviewNew);

/* POST reviews create  */
router.post('/', asyncErrorHandler(reviewCreate));

/* GET reviews show  */
router.get('/:id', asyncErrorHandler(reviewShow));

/* GET reviews  */
router.get('/:id/edit', asyncErrorHandler(reviewEdit));

/* PUT reviews  */
router.put('/:id', asyncErrorHandler(reviewUpdate));

/* DELETE reviews  */
router.delete('/:id', asyncErrorHandler(reviewDestroy));


module.exports = router;