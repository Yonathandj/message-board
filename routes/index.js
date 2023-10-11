const express = require('express');
const router = express.Router();

const messages = [
  {
    id: 0,
    user: "Amando",
    message: "Hi there!",
    createdAt: new Date()
  },
  {
    id: 1,
    user: "Charles",
    message: "What a beautiful world!",
    createdAt: new Date()
  }
];

router.get('/', function (req, res) {
  res.render('index', { messages });
});

router.route('/new')
  .get(function (req, res) {
    res.render('new', { title: 'Express' });
  })
  .post(function (req, res) {
    res.redirect('/');
  })

module.exports = router;
