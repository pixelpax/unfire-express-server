const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Article = mongoose.model('Article');

module.exports = (app) => {
  app.use('/', router);
};

router.get('/make_bob', (req, res, next) => {
  let bob = Article({title: 'foo', url: 'baz', text: 'bar'})
  bob.save().then(() => {
    res.send("k")
  });
});

router.get('/', (req, res, next) => {
  Article.find((err, articles) => {
    if (err) return next(err);
    res.send(articles);
  });
});
