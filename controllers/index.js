const Reviewer = require('../models/reviewer');

module.exports = {
  reviewerLogin(req, res, next) {
    res.send("LOGIN reviewer");
  }
};