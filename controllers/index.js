const Reviewer = require('../models/reviewer');

module.exports = {
  postRegister(req, res, next) {
    const newReviewer = new Reviewer({
      name: req.body.name,
      email: req.body.email
    });
    User.register(newReviewer, req.body.password, (err) => {
      if (err) {
        console.log('error while user register!', err);
        return next(err);
      }

      console.log('user registered!');

      res.redirect('/');
    });
  }
}