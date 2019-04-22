const express = require('express');
const router = express.Router();
const {
  reviewerLogin
} = require('../controllers/index');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Review Form'
  });
});

/* GET login. */
router.get('/login', (req, res, next) => {
  res.send("LOGIN PAGE");
});
/* POST login. */
router.post('/login', (req, res, next) => {
  res.send("POST LOGIN");
});

module.exports = router;