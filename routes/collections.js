const express = require('express');
const router = express.Router();

/* GET collections /collections . */
router.get('/', (req, res, next) => {
  res.render('collections', {
    title: 'Database'
  });
});

/* GET collections new /collections/new . */
router.get('/new', (req, res, next) => {
  res.render('collections', {
    title: 'New Place'
  });
});

/* POST collections new /collections/new . */
router.post('/', (req, res, next) => {
  res.render('collections', {
    title: 'Create New Place'
  });
});

/* GET collections shows /collections/:id . */
router.get('/:id', (req, res, next) => {
  res.render('collections', {
    title: 'Show New Place'
  });
});

/* GET collections edit /collections/:id/edit . */
router.get('/:id/edit', (req, res, next) => {
  res.render('collections', {
    title: 'Edit Place'
  });
});

/* PUT collections update /collections/:id/ . */
router.put('/:id', (req, res, next) => {
  res.render('collections', {
    title: 'Update Place'
  });
});
/* DELETE collections destroy /collections . */
router.delete('/:id', (req, res, next) => {
  res.render('collections', {
    title: 'Delete Place'
  });
});

module.exports = router;